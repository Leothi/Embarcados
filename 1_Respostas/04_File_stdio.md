1. Crie um código em C para escrever "Ola mundo!" em um arquivo chamado 'ola_mundo.txt'.

#include <stdio.h>

int main(int argc, const char *argv[])
{
    FILE *beta;

    beta = fopen ("ola.txt","w");
    if (beta == NULL){
    printf("Houve um erro ao criar o arquivo!");
    return 1;
    }
    fprintf(beta,"Ola mundo");
    fclose(beta);
    return 0;
}

\end



2. Crie um código em C que pergunta ao usuário seu nome e sua idade, e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_1':
	$ ./ola_usuario_1
	$ Digite o seu nome: Eu
	$ Digite a sua idade: 30
	$ cat Eu.txt
	$ Nome: Eu
	$ Idade: 30 anos
	$

#include <stdio.h>

int main(int argc, const char *argv[])
{
    char nome[30];
    char arquivo[30];
    int idade;

    FILE *beta;

    printf("insira o seu nome: ");
    scanf("%s", &nome);
    printf("Insira a sua idade: ");
    scanf("%d", &idade);

    sprintf(arquivo,"%s.txt", nome);
    beta = fopen(arquivo,"w");
    if(!beta){
        printf("Erro ao criar o arquivo");
        return 1;
    }
    fprintf(beta, "Idade: %d Anos", idade);
    fclose(beta);
    return 0;
}

\end



3. Crie um código em C que recebe o nome do usuário e e sua idade como argumentos de entrada (usando as variáveis argc e *argv[]), e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_2':
	$ ./ola_usuario_2 Eu 30
	$ cat Eu.txt
	$ Nome: Eu
	$ Idade: 30 anos
	$

#include <stdio.h>

int main(int argc, char *argv[])
{
    char arquivo[30];
    FILE *beta;

    sprintf(arquivo,"%s.txt", argv[1]);
    beta = fopen(arquivo,"w");
    if(!beta){
        printf("Erro ao criar o arquivo");
        return 1;
    }
    fprintf(beta, "Nome: %s Anos\n", argv[1]);
   fprintf(beta, "Idade: %s Anos\n", argv[2]);
    fclose(beta);
    return 0;
}

\end



4. Crie uma função que retorna o tamanho de um arquivo, usando o seguinte protótipo:

	int tam_arq_texto(char *nome_arquivo);

main:

#include <stdio.h>
#include "bib_arqs.h"

int main(int argc, const char *argv[])
{
    printf("O arquivo possui %d bytes",tam_arq_texto("ana.txt"));
    return 0;
}

bib_arqs.c:

#include <stdio.h>
#include <string.h>
#include "bib_arqs.h"


int tam_arq_texto(char *nome_arquivo){

    int i = 0;
    char c;

    FILE *beta_leitura;
    beta_leitura = fopen(nome_arquivo,"r");
    
    if(!beta_leitura){
        printf("Erro ao realizar leitura");
        return 1;
    }

    while((c = getc(beta_leitura)) != EOF)
         i++;
    fclose(beta_leitura);
    return i;
}

bib_arqs.h:

int tam_arq_texto(char *nome_arquivo);


terminal:
gcc -c questao04_funcao_arquivo.c
gcc -c bib_arqs.c
gcc -o funcao_arquivo_q4 questao04_funcao_arquivo.o bib_arqs.o 
./funcao_arquivo_q4

resultado:
O arquivo possui 14 bytes

\end

 Salve esta função em um arquivo separado chamado 'bib_arqs.c'. Salve o protótipo em um arquivo chamado 'bib_arqs.h'. Compile 'bib_arqs.c' para gerar o objeto 'bib_arqs.o'.



5. Crie uma função que lê o conteúdo de um arquivo-texto e o guarda em uma string, usando o seguinte protótipo:

	void le_arq_texto(char *nome_arquivo, char *conteúdo);

main:

#include <stdio.h>
#include "bib_arqs.h"

int main(int argc, char *argv[])
{
    char mensagem[100];
    le_arq_texto("ana.txt", mensagem);
    return 0;
}

bib_arqs.c:

#include <stdio.h>
#include <string.h>
#include "bib_arqs.h"


int tam_arq_texto(char *nome_arquivo){

    int i = 0;
    char c;

    FILE *beta_leitura;
    beta_leitura = fopen(nome_arquivo,"r");

    if(!beta_leitura){
        printf("Erro ao realizar leitura");
        return 1;
    }

    while((c = getc(beta_leitura)) != EOF)
         i++;
    fclose(beta_leitura);
    return i;
}

void le_arq_texto(char *nome_arquivo, char *conteudo){

    int i = 0;
    char c;

    FILE *beta_leitura;
    beta_leitura = fopen(nome_arquivo,"r");

    if(!beta_leitura){
        printf("Erro ao realizar leitura");
    }

    while((c = getc(beta_leitura)) != EOF){
        conteudo[i] = c;
        i++;
    }

    fclose(beta_leitura);
    printf("O arquivo possui o segunte texto: \n%s\n", conteudo);
}

bib_arqs.h:

int tam_arq_texto(char *nome_arquivo);
void le_arq_texto(char *nome_arquivo, char *conteudo);

terminal:

gcc -c questao05_le_e_print_arquivo_texto.c
gcc -c bib_arqs.c
gcc -o le_e_print questao05_le_e_print_arquivo_texto.o bib_arqs.o 
./le_e_print

resultado:

O arquivo possui o segunte texto: 
Idade: 23 Anos

\end

Repare que o conteúdo do arquivo é armazenado no vetor 'conteudo[]'. Ou seja, ele é passado por referência. Salve esta função no mesmo arquivo da questão 4, chamado 'bib_arqs.c'. Salve o protótipo no arquivo 'bib_arqs.h'. Compile 'bib_arqs.c' novamente para gerar o objeto 'bib_arqs.o'.



6. Crie um código em C que copia a funcionalidade básica do comando 'cat': escrever o conteúdo de um arquivo-texto no terminal. Reaproveite as funções já criadas nas questões anteriores. Por exemplo, considerando que o código criado recebeu o nome de 'cat_falsificado':
	$ echo Ola mundo cruel! Ola universo ingrato! > ola.txt
	$ ./cat_falsificado ola.txt
	$ Ola mundo cruel! Ola universo ingrato!
	$



main:

#include <stdio.h>
#include "bib_arqs.h"

int main(int argc, char *argv[])
{
    char conteudo[100];
    le_arq_texto(argv[1], conteudo); 
    return 0;
}

bib_arqs_q6.c:

void le_arq_texto(char *nome_arquivo, char *conteudo){

    int i = 0;
    char c;

    FILE *beta_leitura;
    beta_leitura = fopen(nome_arquivo,"r");

    if(!beta_leitura){
        printf("Erro ao realizar leitura");
    }

    while((c = getc(beta_leitura)) != EOF){
        conteudo[i] = c;
        i++;
    }

    fclose(beta_leitura);
    printf("%s\n", conteudo);
}

bib_arqs.h:

int tam_arq_texto(char *nome_arquivo);
void le_arq_texto(char *nome_arquivo, char *conteudo);

terminal:
gcc -c questao06_cat_falsificado.c 
gcc -c bib_arqs_q6.c 
gcc -o cat_falsificado questao06_cat_falsificado.o bib_arqs_q6.o 

resultado:
./cat_falsificado ola.txt
Ola mundo cruel! Ola universo ingrato!

\end



7. Crie um código em C que conta a ocorrência de uma palavra-chave em um arquivo-texto, e escreve o resultado no terminal. Reaproveite as funções já criadas nas questões anteriores. Por exemplo, considerando que o código criado recebeu o nome de 'busca_e_conta':
	$ echo Ola mundo cruel! Ola universo ingrato! > ola.txt
	$ ./busca_e_conta Ola ola.txt
	$ 'Ola' ocorre 2 vezes no arquivo 'ola.txt'.
	$





main:


#include <stdio.h>
#include "bib_arqs.h"

int main(int argc, char *argv[])
{
    char conteudo[100];
    le_arq_texto(argv[1], conteudo); 
    return 0;
}

bib_arqs_q7.c

#include <stdio.h>
#include <string.h>
#include "bib_arqs.h"


void le_arq_texto(char *nome_arquivo, char *conteudo){

    int i = 0;
    int j;
    int ocorrencias = 0;
    char c;

    FILE *beta_leitura;
    beta_leitura = fopen(nome_arquivo,"r");

    if(!beta_leitura){
        printf("Erro ao realizar leitura");
    }

    while((c = getc(beta_leitura)) != EOF){
        conteudo[i] = c;
        i++;
    }
    for (j = 0; j < i; j++) {

       if(conteudo[j] == 'O' || conteudo[j] == 'o')
            if(((conteudo[j] == 'O' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a' ) || (conteudo[j] == 'o' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a')) && (conteudo[j+3] == ' ' || conteudo[j+3] == EOF) && conteudo[j-1] == ' ')
                ocorrencias += 1;


       if(j == 0)
            if(conteudo[j] == 'O' || conteudo[j] == 'o')
                 if(((conteudo[j] == 'O' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a' ) || (conteudo[j] == 'o' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a')) && conteudo[j+3] == ' ')
                    ocorrencias += 1;


       if(j == i-4){
            if(conteudo[j] == 'O' || conteudo[j] == 'o')
                 if(((conteudo[j] == 'O' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a' ) || (conteudo[j] == 'o' && conteudo[j+1] == 'l' && conteudo[j+2] == 'a' )) && conteudo[j-1] == ' ')
                    ocorrencias += 1;
       }

    }
    fclose(beta_leitura);
    printf("'Ola' ocorre %d vezes no arquivo '%s'\n", ocorrencias, nome_arquivo);
}

bib_arqs.h:

int tam_arq_texto(char *nome_arquivo);
void le_arq_texto(char *nome_arquivo, char *conteudo);

terminal:

echo ola Ola colar dolar molar ola SOLar Ola OOola ola Ola> ola.txt
gcc -c questao06_cat_falsificado.c 
gcc -c bib_arqs_q7.c 
gcc -o cat_falsificado questao06_cat_falsificado.o bib_arqs_q7.o

resultado:

./contador_de_ocorrencias ola.txt 
'Ola' ocorre 6 vezes no arquivo 'ola.txt' 
