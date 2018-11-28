1.Especifique algumas portas importantes pré-definidas para o protocolo TCP/IP.

20/TCP	FTP (File Transfer protocol - Protocolo de transferência de arquivo), 25/TCP,UDP	SMTP (Simple Mail Transfer Protocol - Protocolo simples de envio de e-mail), 80/TCP	HTTP (HyperText Transfer Protocol), 995/TCP	POP3 sobre SSL (transmissão segura), 53/TCP,UDP	DNS (Sistema de nome de domínio).

fonte: https://pt.wikipedia.org/wiki/Lista_de_portas_dos_protocolos_TCP_e_UDP

2.Com relação a endereços IP, responda:

(a) Qual é a diferença entre endereços IP externos e locais?

Quando ocorrer uma conexão de um computador à uma rede de internet, este computador vai ser identificado por um IP (protocolo de internet). Assim podemos dizer que o IP local seria o endereço do computador na rede local e o IP externo é o do computador na internet onde é aquele que pode ser "visto" por qualquer computador ligado na Internet.

(b) Como endereços IP externos são definidos? Quem os define?

Todos os IPs da Internet externos podem ser divididos em 3 clases que são a classe A (16.777.256 IPs consecutivos), classe B (65.536 IPs consecutivos) e classe C (256 IPs consecutivos). O IANA que definiu os endereços internos e endereços externos.

(c) Como endereços IP locais são definidos? Quem os define?

Assim como IP externos, os IP locais são divididos em 3 classes que são a classe A (10.0.0.0 a 10.255.255.255), para a classe B (172.16.0.0 a 172.31.255.255 e 169.254.0.0 a 169.264.255.255) foram reservados 16 faixas, já a classe C (192.168.0.0 a 192.168.255.255) é destinado para redes pequenas devido ao fato de possuirem no máximo 256 IPs. 

(d) O que é o DNS? Para que ele serve?

DNS(servidor de nomes de domínio) transforma nomes de domínio em endereços de IP. Na Internet, toda vez que você usa um nome de domínio, o serviço DNS precisa transformar o nome no endereço IP correspondente. Por exemplo, o nome de domínio www.reskit.com pode ser transformado em 178.145.135.6.

fonte: https://www.microsoft.com/brasil/windowsxp/pro/usando/artigos/config_tcpip.mspx

3.Com relação à pilha de protocolos TCP/IP, responda:

(a) O que são suas camadas? Para que servem?

As camadas são niveis de protocolo, utilizadas para tratamento de dados na rede.

(b) Quais são as camadas existentes? Para que servem?

Existe a camada de acesso a rede, camada de internet, camada de aplicação e camada de transpote. A primeira camada citada é referente a forma que especifica os dados que devem ser encaminhados, a segunda camada citada é referente a fornecer o pacote de dados, a terceira camada citada é responsavel pelo agrupamento dos dados aos padrões de rede e a ultima camada citada é a que gerencia o encaminhamento e a transmissão de dados.

(c) Quais camadas são utilizadas pela biblioteca de sockets?

Camada de transporte.

(d) As portas usadas por servidores na função bind() se referem a qual camada?

Camada de aplicação.

(e) Os endereços usados por clientes na função connect() se referem a qual camada?

Camada de acesso a rede.

4.Qual é a diferença entre os métodos GET e POST no protocolo HTTP?

O método GET é utilizado para passar parâmetros de configuração e identificação de páginas web por meio da URL, o método POST é utilizado em formulários e seu nome se refere devido os dados serem passados por um "envelope", post. 
