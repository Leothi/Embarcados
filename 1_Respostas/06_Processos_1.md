. Como se utiliza o comando ps para:
(a) Mostrar todos os processos rodando na máquina?
> `ps -e` ou `ps -A`

(b) Mostrar os processos de um usuário?
> `ps -u usuario` ou `ps --user usuario` ou `ps -U usuario`

(c) Ordenar todos os processos de acordo com o uso da CPU?
> Para ordernar todos os processos em ordem crescente `ps -e --sort=pcpu` Para ordem 
decrescente, `ps -e --sort=-pcpu`.

(d) Mostrar a quanto tempo cada processo está rodando?
> A flag `--sort=cputime` pode ser incluída para mostrar o tempo em ordem crescente.

2. De onde vem o nome fork()?
> Do inglês bifurcação ou ramificação. Esse nome é dado porque ao usarmos o comando fork, podemos criar um processo filho de um processo pai.

3. Quais são as vantagens e desvantagens em utilizar:

(a) system()?
> Vantagens: Permite executar um comando dentro de um programa (sub-processo). É mais simples.
Desvantagens: Depende muito do sistema operacional, dando muita brecha para possíveis falhas de execução. Não é indicado para a maioria dos casos.

(b) fork() e exec()?
> Vantagens: É mais robusto.
Desvantagens: Um pouco mais complexo; não há uma função que crie e execute um novo processo em um único passo. É necessário escolher corretamente o a função da família de `exec()` em caso de uso de argumentos.

4. É possível utilizar o exec() sem executar o fork() antes?
> Sim, no entanto o processo que estiver em execução no momento será alterado pelo `exec()`, sem criar um novo processo.

5. Quais são as características básicas das seguintes funções:

(a) execp()?
> Executa o processo no diretório corrente, sem ser necessário colocar o caminho do programa.

(b) execv()?
```C

int execv(const char *path, char *const argv[]);
```

A lista de argumentos é passada como um vetor de ponteiros.

(c) exece()?
> Aceita um argumento adicional.

(d) execvp()?
> ```C

int execvp(const char *file, char *const argv[]);
```  

Recebe argumentos como vetor de ponteiros e aceita caminhos relativos, pois 
procura no diretório corrente (current path).

(e) execve()?
> ```C

int execve(const char *filename, char *const argv[], char *const envp[]);
```  

Essa função recebe o programa a ser executado, que pode ser um binário ou um script; o vetor de
 argumentos e o vetor de configurações para o ambiente do programa.


(f) execle()?
> ```C

int execle(const char *path, const char *arg, ..., (char *) NULL,
char * const envp[]);
```  

Essa função recebe o caminho do programa a executar, os argumentos como uma lista e o vetor 
para variáveis de ambiente.
