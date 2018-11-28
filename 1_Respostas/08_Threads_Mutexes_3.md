1. Apresente as características e utilidades das seguintes funções:

(a) `popen()`

A função popen () abre um processo criando um pipe, forking e invocando o shell. Como um tubo é, por definição, unidirecional,o argumento de tipo pode especificar somente leitura ou escrita, não ambos; 
O fluxo resultante é correspondentemente somente leitura ou somente gravação.
O argumento do comando é um ponteiro para uma cadeia terminada com nulo contendo uma linha de comando do shell. Este comando é passado para / bin / sh 
usando o sinalizador -c ; interpretação, se houver, é executada pelo shell.
O argumento type é um ponteiro para uma string terminada em null que deve conter a letra 'r' para leitura ou a letra 'w' para escrevendo. Desde o glibc 2.9, este argumento pode incluir adicionalmente letra 'e', ​​que faz com que a bandeira close-on-exec ( FD_CLOEXEC ) seja definido no descritor de arquivo subjacente; veja a descrição do O_CLOEXEC flag in open (2) por razões por que isso pode ser útil.

No sucesso, retorna um ponteiro para um fluxo aberto que pode ser usado para ler ou escrever no tubo; se o fork(2) ou pipe(2) chamar falhar, ou se a função não pode alocar memória, NULL é retornado.

(b) `pclose()`
A função pclose () espera que o processo associado termine e retorna o status de saída do comando conforme retornado por wait4 (2).

No sucesso, retorna o status de saída do comando; se wait4 (2) retornar um erro ou algum outro erro for detectado, -1 será devolvida.

(c) `fileno()`
int fileno(FILE *stream);

A função fileno () deve retornar o descritor de arquivo inteiro associado ao fluxo apontado pelo fluxo .

Após a conclusão bem-sucedida, fileno () deve retornar o valor inteiro do descritor de arquivo associado ao fluxo . Caso contrário, o valor -1 será retornado e erro definido para indicar o erro.

2. Quais são as vantagens e desvantagens em utilizar:

(a) `popen()?`
Popen é uma classe que permite a você rodar qualquer programa.
(b) `exec()?`
exec perimite rodar apenas um pedaço.
