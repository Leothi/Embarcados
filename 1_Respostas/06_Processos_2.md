1. Crie um código em C para gerar três processos-filho usando o fork().

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main(int argc, char**argv[]){

	pid_t bb1, bb2, bb3;
	printf("O endereço do pai é(ID): %d\n", (int) getpid());
	
	bb1 = fork();
	if(bb1 != 0){
	
		printf("Esse é o pai supremo, tem o ID igual a %d\n", (int) getpid());
		printf("O seu filho tem ID igual a %d\n", bb1);

		bb2 = fork();
	if(bb2 != 0){
	
		printf("Esse é o pai supremo, tem o ID igual a %d\n", (int) getpid());
		printf("O seu filho tem ID igual a %d\n", bb2);
		
		bb3 = fork();
	if(bb3 != 0){
	
		printf("Esse é o pai supremo, tem o ID igual a %d\n", (int) getpid());
		printf("O seu filho tem ID igual a %d\n", bb3);	
		
			}

		}
	}
	return 0;
}


2. Crie um código em C que recebe o nome de diversos comandos pelos argumentos de entrada (argc e *argv[]), e executa cada um sequencialmente usando system(). Por exemplo, considerando que o código criado recebeu o nome de 'serial_system', e que ele foi executado na pasta '/Sistemas_Embarcados/Code/06_Processos', que contem diversos arquivos:

$ ./serial_system pwd echo ls echo cal
$ ~/Sistemas_Embarcados/Code/06_Processos
$
$ Ex1.c    Ex2b.c   Ex4.c   Ex6.c
$ Ex2a.c   Ex3.c    Ex5.c   serial_system
$
$     Março 2017
$ Do Se Te Qu Qu Se Sá
$           1  2  3  4
$  5  6  7  8  9 10 11
$ 12 13 14 15 16 17 18
$ 19 20 21 22 23 24 25
$ 26 27 28 29 30 31

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>

int main(int argc, const char *argv[])
{
    int i;
    char comando[30];

    for (i =1; i < argc; i++){
        strcpy(comando, argv[i]);
	system(comando);
	}
       // if (!strcmp(comando, "ls") )
       //     system("ls");
       // if (!strcmp(comando, "pwd") )
       //     system("pwd");
       // if (!strcmp(comando, "echo") )
       //     system("echo");
       // if (!strcmp(comando, "cal") )
       //     system("cal");
  	 // }
   return 0;
}


3. Crie um código em C que recebe o nome de diversos comandos pelos argumentos de entrada (argc e *argv[]), e executa cada um usando fork() e exec().

4. Crie um código em C que gera três processos-filho usando o fork(), e que cada processo-filho chama a seguinte função uma vez:

int v_global = 0; // Variavel global para este exemplo
void Incrementa_Variavel_Global(pid_t id_atual)
{
	v_global++;
	printf("ID do processo que executou esta funcao = %d\n", id_atual);
	printf("v_global = %d\n", v_global);
}
(Repare que a função Incrementa_Variavel_Global() recebe como entrada o ID do processo que a chamou.) Responda: a variável global v_global foi compartilhada por todos os processos-filho, ou cada processo enxergou um valor diferente para esta variável?

5. Repita a questão anterior, mas desta vez faça com que o processo-pai também chame a função Incrementa_Variavel_Global(). Responda: a variável global v_global foi compartilhada por todos os processos-filho e o processo-pai, ou cada processo enxergou um valor diferente para esta variável?
