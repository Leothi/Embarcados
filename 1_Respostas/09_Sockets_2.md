1.a 

#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>

#define linhas 60
#define colunas 60

void preencher(long int a[linhas][colunas], long int b[linhas][colunas]);
void somar(long int a[linhas][colunas], long int b[linhas][colunas], long int res[linhas][colunas]);

int main ()
{
	long int a[linhas][colunas],b[linhas][colunas],res[linhas][colunas];
	int i,j;

	preencher(a,b);

	somar(a,b,res);
	
	for(i=0;i<linhas;i++){
		for (j = 0; j < colunas; j++)
		{
			printf("%ld ",res[i][j]);
		}

		printf("\n");
	}


	
	return 0;
}

void preencher(long int a[linhas][colunas], long int b[linhas][colunas]){

	int i,j;

	for (i = 0; i < linhas; i++)
	{
		for (j = 0; j < colunas; j++)
		{
			srandom(i+j+1);
			a[i][j] = random()%10;
			b[j][i] = random()%10;
		}
	}
}


void somar(long int a[linhas][colunas], long int b[linhas][colunas],long int res[linhas][colunas]){

	int i,j;

	for (i = 0; i < linhas; i++)
	{
		for (j = 0; j < colunas; j++)
		{
			res[i][j] = a[i][j] + b[i][j];
		}
	}
}

2 - servidor - local

	
#include <stdio.h>
	
#include <stdlib.h>
	
#include <unistd.h>
	
#include <string.h>
	
#include <sys/socket.h>
	
#include <sys/un.h>
	
#include <signal.h>

	

char socket_name[50];

	int socket_id;

	void sigint_handler(int signum);

	void print_client_message(int client_socket);
	
void end_server(void);


	int main (int argc, char* const argv[])
{
	
		struct sockaddr socket_struct;

	
	if (argc < 2)
	{
		
		puts("   Este programa cria um servidor local ");
		
		puts("   no caminho especificado pelo usuario.");
		
		puts("   Para permitir que o cliente comunique-se");
		
		puts("   com este servidor, o servidor deve ser");
		
		puts("   executado inicialmente com um caminho definido,");
		
		puts("   e o cliente devera ser executado em outra");
		
		puts("   janela ou em outra aba do terminal, utilizando");
		
		puts("   o mesmo caminho. O servidor escreve na tela");
		
		puts("   todo texto enviado pelo cliente. Se o cliente");
		
		puts("   transmitir o texto \"sair\", o servidor se");
		
		puts("   encerra. Se o usuario pressionar CTRL-C,");
		
		puts("   o servidor tambem se encerra.");
		
		puts("   encerra.");
		
		puts("   Modo de Uso:");
		
	printf("      %s <caminho_do_socket>\n", argv[0]);
		
	printf("   Exemplo: %s /tmp/socket1\n", argv[0]);
		
	exit(1);
	
	}
	
	else
		
	strcpy(socket_name, argv[1]);


	
	fprintf(stderr, "Definindo o tratamento de SIGINT... ");
	
	signal(SIGINT, sigint_handler);
	
	fprintf(stderr, "Feito!\n");
	
	
	fprintf(stderr, "Abrindo o socket local... ");
	
	socket_id = socket(PF_LOCAL, SOCK_STREAM, 0);
	
	fprintf(stderr, "Feito!\n");

	
	fprintf(stderr, "Ligando o socket ao endereco local \"%s\"... ", socket_name);
	
	socket_struct.sa_family = AF_LOCAL;
	
	strcpy(socket_struct.sa_data, socket_name);
	
	bind(socket_id, &socket_struct, sizeof(socket_struct));
	
	fprintf(stderr, "Feito!\n");

	
	fprintf(stderr, "Tornando o socket passivo (para virar um servidor)... ");
	
	listen(socket_id, 10);
	
	fprintf(stderr, "Feito!\n");

	
	while(1)
	
	{
		
	struct sockaddr cliente;
		
	int socket_id_cliente;
		
	socklen_t cliente_len;

		
	fprintf(stderr, "Aguardando a conexao de um cliente... ");
		
	socket_id_cliente = accept(socket_id, &cliente, &cliente_len);
		
	fprintf(stderr, "Feito!\n");

		
	fprintf(stderr, "Obtendo a informacao transmitida pelo cliente...");
		
	print_client_message(socket_id_cliente);
		
	fprintf(stderr, "Feito!\n");

		
	fprintf(stderr, "Fechando a conexao com o cliente... ");
		
	close(socket_id_cliente);
		
	fprintf(stderr, "Feito!\n");
	
	}
	
	return 0;
	
}
	

void sigint_handler(int signum)
{
	
	fprintf(stderr, "\nRecebido o sinal CTRL+C... vamos desligar o servidor!\n");
	
	end_server();

	}


	void print_client_message(int client_socket)
{
    
	int recebendo_cliente;
	
	int length;
	
	char* text;

   
	 while(!recebendo_cliente){
	
	fprintf(stderr, "\nMensagem enviada pelo cliente tem ");
	
	read(client_socket, &length, sizeof (length));
	
	fprintf(stderr, "%d bytes.", length);
	
	text = (char*) malloc (length);
	
	read(client_socket, text, length);
	
	fprintf(stderr,"\n\n   Mensagem = %s\n\n", text);
	
	free (text);

   
	 if (!strcmp(text, "fim"))
        recebendo_cliente = 1;

    
	printf("%d\n",recebendo_cliente);
	
		if (!strcmp(text, "fim"))
	{
		
	fprintf(stderr, "Cliente pediu para o servidor fechar.\n");
		
	end_server();
	
	}
    
	sleep(1);
   
	 }
		
}
	

void end_server(void)
{
	
	fprintf(stderr, "Apagando \"%s\" do sistema... ", socket_name);

	unlink(socket_name);
	
	fprintf(stderr, "Feito!\n");
	
	fprintf(stderr, "Fechando o socket local... ");
	
	close(socket_id);
	
	fprintf(stderr, "Feito!\n");
	
	exit(0);

}


1.b
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>

#define linhas 60
#define colunas 60

struct name_matrizes
{
	long int a[linhas][colunas];
	long int b[linhas][colunas];
	long int c[linhas][colunas];
}typedef matrizes;

matrizes args_threads;

void preencher(long int a[linhas][colunas], long int b[linhas][colunas]);
void mostrar(long int matriz[linhas][colunas]);

void* soma_1(void *v)
{
	int i,j;

	for (i=0;i<(linhas/3);i++)
	{
		for (j=0;j<colunas;j++)
		{
			args_threads.c[i][j] = args_threads.a[i][j] + args_threads.b[i][j];
		}
	}

	return NULL;
}

void* soma_2(void *v)
{
	int i,j;

	for (i=(linhas/3);i<(2*linhas/3);i++)
	{
		for (j=0;j<colunas;j++)
		{
			args_threads.c[i][j] = args_threads.a[i][j] + args_threads.b[i][j];
		}
	}

	return NULL;
}

void* soma_3(void *v)
{
	int i,j;

	for (i=(2*linhas/3);i<linhas;i++)
	{
		for (j=0;j<colunas;j++)
		{
			args_threads.c[i][j] = args_threads.a[i][j] + args_threads.b[i][j];
		}
	}

	return NULL;
}


int main ()
{
	int i,j;
	pthread_t thread_id[3];
	

	preencher(args_threads.a,args_threads.b);

	pthread_create(&thread_id[0],NULL,&soma_1,NULL);
	pthread_create(&thread_id[1],NULL,&soma_2,NULL);
	pthread_create(&thread_id[2],NULL,&soma_3,NULL);
	pthread_join(thread_id[0],NULL);
	pthread_join(thread_id[1],NULL);
	pthread_join(thread_id[2],NULL);

	/*
	mostrar(args_threads.a);
	printf("\n");
	mostrar(args_threads.b);
	printf("\n");
	mostrar(args_threads.c);
	printf("\n");
	*/
	
	return 0;
}

void preencher(long int a[linhas][colunas], long int b[linhas][colunas]){

	int i,j;

	for (i = 0; i < linhas; i++)
	{
		for (j = 0; j < colunas; j++)
		{
			srandom(i+j+1);
			a[i][j] = random()%10;
			b[j][i] = random()%10;
		}
	}
}

void mostrar(long int matriz[linhas][colunas]){
	int i,j;

	for(i=0;i<linhas;i++){
		for (j = 0; j < colunas; j++)
		{
			printf("%ld ",matriz[i][j]);
		}

		printf("\n");
	}
}
