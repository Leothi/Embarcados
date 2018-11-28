1. Quais são as vantagens e desvantagens em utilizar:

(a) fork?
Vantagem: Fork tem um espaço de memória próprio e não tem problema de região crítica.
Desvasntagem: Fork gasta muito processamento e mais lento

(b) threads?
Vanatagem: Mais rápida e menos processamento
Desvantagem: Compartilha os dados e espaço de memória, podendo dá problema em regiões críticas.
2. Quantas threads serão criadas após as linhas de código a seguir? Quantas coexistirão? Por quê?

(a)

```C
void* funcao_thread_1(void *arg);
void* funcao_thread_2(void *arg);

int main (int argc, char** argv)
{
	pthread_t t1, t2;
	pthread_create(&t1, NULL, funcao_thread_1, NULL);
	pthread_create(&t2, NULL, funcao_thread_2, NULL);
	pthread_join(t1, NULL);
	pthread_join(t2, NULL);
	return 0;
}
```
R: São criadas duas threads, essas executam suas funções de forma paralela e logo após se juntam.
(b)
```C
void* funcao_thread_1(void *arg);
void* funcao_thread_2(void *arg);

int main (int argc, char** argv)
{
	pthread_t t1, t2;
	pthread_create(&t1, NULL, funcao_thread_1, NULL);
	pthread_join(t1, NULL);
	pthread_create(&t2, NULL, funcao_thread_2, NULL);
	pthread_join(t2, NULL);
	return 0;
}
```
R: São criadas duas threads, porém essas executam suas funções de forma sequencial.

3. Apresente as características e utilidades das seguintes funções:

(a) `pthread_setcancelstate()`

#include <pthread.h>
int pthread_setcancelstate(int state, int *oldstate);

O pthread_setcancelstate () define o estado de cancelabilidade do chamando thread para o valor dado no estado . O anterior
O estado de cancelabilidade do encadeamento é retornado no buffer apontado por oldstate . O argumento de estado deve ter um dos seguintes
       
valores:

       PTHREAD_CANCEL_ENABLE
              O encadeamento é cancelável. Este é o cancelabilidade padrão
              estado em todos os novos threads, incluindo o thread inicial. o
              O tipo de cancelabilidade do encadeamento determina quando um
              thread responderá a um pedido de cancelamento.

       PTHREAD_CANCEL_DISABLE
              O encadeamento não é cancelável. Se uma solicitação de cancelamento for
              recebido, ele é bloqueado até que a capacidade de cancelamento seja ativada.
(b) `pthread_setcanceltype()`
 
 #include <pthread>
 int pthread_setcanceltype(int type, int *oldtype);

O pthread_setcanceltype () define o tipo de cancelabilidade dochamando thread para o valor dado em type . O anterior O tipo de cancelabilidade do encadeamento é retornado no buffer apontado para por oldtype . O argumento type deve ter um dos seguintes valores:

       PTHREAD_CANCEL_DEFERRED
              Uma solicitação de cancelamento é adiada até o próximo telefonema
              uma função que é um ponto de cancelamento (veja pthreads (7) ).
              Este é o tipo de cancelabilidade padrão em todos os novos tópicos,
              incluindo o thread inicial.

       PTHREAD_CANCEL_ASYNCHRONOUS
              O segmento pode ser cancelado a qualquer momento. (Normalmente, será
              ser cancelado imediatamente após receber um pedido de cancelamento,
              mas o sistema não garante isso.

       A operação set-and-get executada por cada uma dessas funções é
       atômica com relação a outros segmentos no processo chamando o mesmo
       função.
No sucesso, essas funções retornam 0; no erro, eles retornam um valor diferente de zero número do erro.

(b) `pthread_setcanceltype()`

(DICA: elas são relacionadas à função pthread_cancel().)
