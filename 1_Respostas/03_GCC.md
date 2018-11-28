Para todas as questões, compile-as com o gcc e execute-as via terminal.

1)Crie um "Olá mundo!" em C.

#include <stdio.h>

int main (void){
	printf("Ola Mundo!\n");
	return 0;
}

2) Crie um código em C que pergunta ao usuário o seu nome, e imprime no terminal "Ola " e o nome do usuário. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_1':

$ ./ola_usuario_1
$ Digite o seu nome: Eu
$ Ola Eu

#include <stdio.h>

int main(){
	char name[20];
	printf("Digite o seu nome, please:  ");
	fgets(name,20,stdin);
	printf("\nOla %s\n",name);	
	
	return 0;
}


3) Apresente os comportamentos do código anterior nos seguintes casos:

(a) Se o usuário insere mais de um nome.

$ ./ola_usuario_1
$ Digite o seu nome: Eu Mesmo

(b) Se o usuário insere mais de um nome entre aspas duplas. Por exemplo:

$ ./ola_usuario_1
$ Digite o seu nome: "Eu Mesmo"
(c) Se é usado um pipe. Por exemplo:

$ echo Eu | ./ola_usuario_1
(d) Se é usado um pipe com mais de um nome. Por exemplo:

$ echo Eu Mesmo | ./ola_usuario_1
(e) Se é usado um pipe com mais de um nome entre aspas duplas. Por exemplo:

$ echo "Eu Mesmo" | ./ola_usuario_1
(f) Se é usado o redirecionamento de arquivo. Por exemplo:

$ echo Ola mundo cruel! > ola.txt
$ ./ola_usuario_1 < ola.txt


4) Crie um código em C que recebe o nome do usuário como um argumento de entrada (usando as variáveis argc e *argv[]), e imprime no terminal "Ola " e o nome do usuário. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_2':
$ ./ola_usuario_2 Eu
$ Ola Eu
#include <stdio.h>

int main(int argc, char **argv){
	printf("\nOla ");

	if (argc > 1){
		for(int i=1;i<argc;i++){		
			printf("%s ",argv[i]);	
		}
	}

	printf("\n");
	return 0;
}



5) Apresente os comportamentos do código anterior nos seguintes casos:
(a) Se o usuário insere mais de um nome.

$ ./ola_usuario_2 Eu Mesmo
(b) Se o usuário insere mais de um nome entre aspas duplas. Por exemplo:

$ ./ola_usuario_2 "Eu Mesmo"
(c) Se é usado um pipe. Por exemplo:

$ echo Eu | ./ola_usuario_2
(d) Se é usado um pipe com mais de um nome. Por exemplo:

$ echo Eu Mesmo | ./ola_usuario_2
(e) Se é usado um pipe com mais de um nome entre aspas duplas. Por exemplo:

$ echo Eu Mesmo | ./ola_usuario_2
(f) Se é usado o redirecionamento de arquivo. Por exemplo:

$ echo Ola mundo cruel! > ola.txt
$ ./ola_usuario_2 < ola.txt

6) Crie um código em C que faz o mesmo que o código da questão 4, e em seguida imprime no terminal quantos valores de entrada foram fornecidos pelo usuário. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_3':
$ ./ola_usuario_3 Eu
$ Ola Eu
$ Numero de entradas = 2
#include <stdio.h>

int main(int argc, char **argv){
	int i=1;
	printf("\nOla ");

	if (argc > 1){
		for(i=1;i<argc;i++){		
			printf("%s ",argv[i]);	
		}
	}

	printf("\n");
	printf("Numero de entradas: %d\n",i);
	return 0;
}



7) Crie um código em C que imprime todos os argumentos de entrada fornecidos pelo usuário. Por exemplo, considerando que o código criado recebeu o nome de 'ola_argumentos':
$ ./ola_argumentos Eu Mesmo e Minha Pessoa
$ Argumentos: Eu Mesmo e Minha Pessoa

#include <stdio.h>

int main(int argc, char **argv){
	int i=1;
	printf("\nArgumentos: ");

	if (argc > 1){
		for(i=1;i<argc;i++){		
			printf("%s ",argv[i]);	
		}
	}

	printf("\n");
	return 0;
}

8) Crie uma função que retorna a quantidade de caracteres em uma string, usando o seguinte protótipo: int Num_Caracs(char *string); Salve-a em um arquivo separado chamado 'num_caracs.c'. Salve o protótipo em um arquivo chamado 'num_caracs.h'. Compile 'num_caracs.c' para gerar o objeto 'num_caracs.o'.
//Arquivo num_caracs.c
#include <string.h>
#include "num_caracs.h"

int Num_Caracs(char *string){
	return strlen(string);
}
//Arquivo num_caracs.h
#ifndef num_caracs_h
#define	num caracs_h

int Num_Caracs(char*);

#endif


9) Re-utilize o objeto criado na questão 8 para criar um código que imprime cada argumento de entrada e a quantidade de caracteres de cada um desses argumentos. Por exemplo, considerando que o código criado recebeu o nome de 'ola_num_caracs_1':

$ ./ola_num_caracs_1 Eu Mesmo
$ Argumento: ./ola_num_caracs_1 / Numero de caracteres: 18
$ Argumento: Eu / Numero de caracteres: 2
$ Argumento: Mesmo / Numero de caracteres: 5

#include <stdio.h>
#include "num_caracs.h"

int main(int argc, char **argv){
	
	printf("\n");

	if (argc > 1){
		for(int i=0;i<argc;i++){	
			printf("\nArgumento: %s / Numero de Caracteres: %d",argv[i],Num_Caracs(argv[i]));	
		}
	}

	printf("\n");
	return 0;
}


10) Crie um Makefile para a questão anterior.

ola_num_caracs_1: ola_num_caracs_1.o num_caracs.o
	gcc -o ola_num_caracs_1 ola_num_caracs_1.o num_caracs.o

ola_num_caracs_1.o: ola_num_caracs_1.c num_caracs.h
	gcc -c ola_num_caracs_1.c

num_caracs.o: num_caracs.c num_caracs.h
	gcc -c num_caracs.c
clean:
	rm -f *.o num_caracs	 

11) Re-utilize o objeto criado na questão 8 para criar um código que imprime o total de caracteres nos argumentos de entrada. Por exemplo, considerando que o código criado recebeu o nome de 'ola_num_caracs_2':

$ ./ola_num_caracs_2 Eu Mesmo
$ Total de caracteres de entrada: 25

#include <stdio.h>
#include "num_caracs.h"

int main(int argc, char **argv){
	
	int total_char=0;

	if (argc > 1){
		for(int i=0;i<argc;i++){	
			total_char+=Num_Caracs(argv[i]);	
		}
	}

	printf("\n Total de caracteres de entrada: %d\n",total_char);

	return 0;
}


12) Crie um Makefile para a questão anterior.

ola_num_caracs_2: ola_num_caracs_2.o num_caracs.o
	gcc -o ola_num_caracs_2 ola_num_caracs_2.o num_caracs.o

ola_num_caracs_2.o: ola_num_caracs_2.c num_caracs.h
	gcc -c ola_num_caracs_2.c

num_caracs.o: num_caracs.c num_caracs.h
	gcc -c num_caracs.c
clean:
	rm -f *.o num_caracs	 
