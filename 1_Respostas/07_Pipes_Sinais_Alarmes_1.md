1. Quantos pipes serão criados após as linhas de código a seguir? Por quê?

(a)
```C
int pid;
int fd[2];
pipe(fd);
pid = fork();
```
um pipe, porque ele definiu o tamanho do array "fd[2]" de tamanho 2.

(b)
```C
int pid;
int fd[2];
pid = fork();
pipe(fd);
```
Nenhum porque o pipe foi executado depois da criação do processo.

2. Apresente mais cinco sinais importantes do ambiente Unix, além do `SIGSEGV(emitido em caso de violação da segmentação: tentativa de acesso)`, `SIGUSR1(primeiro sina disponivel, utilizao em cmunicação entre processos)`, `SIGUSR2(comunicação interprocessos que é outro sinal disponivelao usuário)`, `SIGALRM(relógio: é emitido um sinal quando o relogio para)` e `SIGINT(interrupção: manda um sinal quando aperta ctrl+c)`. Quais são suas características e utilidades?
1- SIGKILL(Destruição):“arma absoluta” para matar os 
processos.Não pode ser ignorada, tampouco interceptada (existe ainda o SIGTERM para uma morte mais “suave” para
processos).
2- SIGCLD,Morte de um filho: Enviado ao pai pela terminaçãp de um processo filho.
3- SIGSYS: Argumento incorreto de uma chamada de sistema
4-  SIGIOT: Problemas de instrução de entrada/saída, emitido quando da erro material dependente da implementação.
5- SIGEMT: Problemas de instrução no emulador: emitido em caso de erro material depedente da implementação.

3. Considere o código a seguir:

```C
#include <signal.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

void tratamento_alarme(int sig)
{
	system("date");
	alarm(1);
}

int main()
{
	signal(SIGALRM, tratamento_alarme);
	alarm(1);
	printf("Aperte CTRL+C para acabar:\n");
	while(1);
	return 0;
}
```

Sabendo que a função `alarm()` tem como entrada a quantidade de segundos para terminar a contagem, quão precisos são os 
alarmes criados neste código? De onde vem a imprecisão?Este é um método confiável para desenvolver aplicações em tempo real?
Muito preciso em 1 segundo. A precisão vem do relógio que está no processo date, se for em 1 segundo, acredito que sim.
