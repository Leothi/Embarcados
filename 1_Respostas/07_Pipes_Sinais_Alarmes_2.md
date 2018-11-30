1. Crie um programa em C que cria um processo-filho e um pipe de comunicação. Faça com que o processo-pai envie os valores 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10 para o processo-filho, com intervalos de 1 segundo entre cada envio. Depois de o processo-pai enviar o número 10, ele aguarda 1 segundo e termina a execução. O processo-filho escreve na tela cada valor recebido, e quando ele receber o valor 10, ele termina a execução.

	
#include <stdio.h>

	#include <stdlib.h>
	
#include <unistd.h>
	

int main(int argc, char *argv[])
	
{
    
	int fd[2];
    
	int I, O[10];
    
	pipe(fd);
    
	pid_t pid = fork();

    
	if (pid != 0)
        
		for(int i = 0 ; i < 10 ; i++)
        
	{
	        
	I = i + 1;
	        
		write(fd[1], &I, sizeof(int));
	        sleep(1);
   		
	}

    
	else
    
	{  
        
	for(int i = 0 ; i < 10 ; i++)
	        
		if(read(fd[0], &O[i], sizeof(int))>=0)
	        	
	printf("%d ", O[i]);
	    
	exit(1);
    
		}
    
	return 0;

		}



2. Crie um programa em C que cria um processo-filho e um pipe de comunicação. Utilize o pipe para executar a seguinte conversa entre processos:

	
	FILHO: Pai, qual é a verdadeira essência da sabedoria?
	
	PAI: Não façais nada violento, praticai somente aquilo que é justo e equilibrado.
	
	FILHO: Mas até uma criança de três anos sabe disso!
	
	PAI: Sim, mas é uma coisa difícil de ser praticada até mesmo por um velho como eu...


	Neste exercício, quem recebe a mensagem via pipe é quem as escreve no terminal.


	#include <stdio.h>
	
#include <stdlib.h>

	#include <unistd.h>
	
	

int main(int argc, char *argv[])
	
{
    
	int fd[2];
    
	char m[4][100] = {"Pai, qual é a verdadeira essência da sabedoria? ",
 
			  "Não façais nada violento, praticai somente aquilo que é justo e equilibrado.",
    				  
			  "Mas até uma criança de três anos sabe disso!",
    				  
			  "Sim, mas é uma coisa difícil de ser praticada até mesmo por um velho como eu..."}, 
	s[100];
    
	pipe(fd);
    
	pid_t pid = fork();

    
	if (pid != 0)
    	
		for(int i = 0 ; i < 2 ; i++)
    	
		{
    			
	write(fd[1], m[2*i], sizeof(m[0]));
	    	
	sleep(1);
	    	
		if(read(fd[0], s, 100)>=0)
	    		
	printf("PAI: %s\n", s);
    	
	}
    
	else
    	
	for(int i = 0 ; i < 2 ; i++)
    	
	{
	    	
	if(read(fd[0], s, 100)>=0)
	    		
	printf("FILHO: %s\n", s);
	    	
	write(fd[1], m[2*i+1], sizeof(m[0]));
	    	
	sleep(1);
    	
	}
    
	return 0;

	}



3. Crie um programa em C que cria dois processos-filhos e um pipe de comunicação. Utilize o pipe para executar a seguinte conversa entre processos:

	
	FILHO1: Quando o vento passa, é a bandeira que se move.
	
	FILHO2: Não, é o vento que se move.
	
	PAI: Os dois se enganam. É a mente dos senhores que se move.
	


	
Neste exercício, quem recebe a mensagem via pipe é quem as escreve no terminal.


	
	
	#include <stdio.h>
	
#include <stdlib.h>
	
#include <unistd.h>

	

int main(int argc, char *argv[])

	{
    
	int fd[2];
    
	char m[3][100] = {"Quando o vento passa, é a bandeira que se move. ",
    				  
			  "Não, é o vento que se move.",
    				  
			  "Os dois se enganam. É a mente dos senhores que se move."}, 
	s[100];
    
	pipe(fd);
    
	pid_t pid = fork();
    
	if(pid == 0)
    
	{
    	
	if(read(fd[0], s, 100) >= 0)
    		
	printf("FILHO1: %s\n", s);
    	
	exit(0);
    
	}
    
	else
    
	{
    	
	pid_t pid2 = fork();
    	
		if(pid2 == 0)
    	
	{
    		
	sleep(1);
	    	
		if(read(fd[0], s, 100) >= 0)
	    		
	printf("FILHO2: %s\n", s);
	    	
	write(fd[1], m[2], sizeof(m[0]));
    		
	exit(0);
    	
	}
    	
	else
    	
	{
    		
	write(fd[1], m[0], sizeof(m[0]));
    		
	sleep(1);
    		
	write(fd[1], m[1], sizeof(m[0]));
    		
	sleep(1);
    		
	if(read(fd[0], s, 100) >= 0)
    			
	printf("PAI: %s\n", s);
    		
    		
	exit(0);
    	
		}
    
	}
    
	return 0;

	}


	4. Crie um programa em C que cria um processo-filho e um pipe de comunicação. O processo-filho deverá pedir o nome do usuário, envia-lo para o pai via pipe, e o pai deverá escrever o nome do usuário no terminal.


	#include <stdio.h>

	#include <stdlib.h>
	
#include <unistd.h>
	
	

int main(int argc, char *argv[])
	
{
    
	int fd[2];
    
	char s[100], o[100];
    
	pipe(fd);
    
	pid_t pid = fork();

    
	if(pid == 0)
    
	{
    	
		printf("Escreva seu nome: ");
    	
	scanf("%[^'\n']", s);
    	
	write(fd[1], s, sizeof(s));
    
	}
    
	else
    
	{
    	
	while(read(fd[0], o, 100) < 0)
    	
	{
	}
    	
	printf("Nome do usuario: %s\n", o);
    
	}
    
	return 0;
	
}
	
	

5. Utilize o sinal de alarme para chamar a cada segundo o comando 'ps' ordenando todos os processos de acordo com o uso da CPU. Ou seja, seu código atualizará a lista de processos a cada segundo. Além disso, o código deverá tratar o sinal do CTRL-C, escrevendo "Processo terminado!" na tela antes de terminar a execução do processo.


	#include <signal.h>

	#include <unistd.h>
	
#include <stdio.h>

	#include <stdlib.h>


	
	void acabou(int sig)

	{
	
		printf("Processo terminado!\n");
	
		exit(0);
	
}
	

void tratamento_alarme(int sig)

	{
	
	system("ps --sort -time");
	
	alarm(1);
	
}
	

int main()
	
{
	
	signal(SIGALRM, tratamento_alarme);
	
	signal(SIGINT,acabou);
	
	alarm(1);
	
	printf("Aperte CTRL+C para acabar:\n");
	
	while(1);
	
	return 0;

}
