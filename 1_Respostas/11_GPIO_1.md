1.Apresente 5 sistemas operacionais suportados pelo Raspberry Pi, e algumas de suas características.

Raspbian: Raspbian é uma variante do Debian baseada no ARM hard-float criado para rodar no Raspberry, basicamente contém o ambiente de desktop, sendo assim possível de considerar como um "sistema operacional padrão" do computador da Raspberry Foundation. Possui diversos softwares de desenvolvimento, ferramentas de acesso à Internet, controle sobre o hardware da placa. Ideal para quem está inicializando na utilização da placa.

Ubuntu: É a distribuição Linux mais conhecida e difundida no mundo, existem diversas versões do sistema que são compatíveis com o Raspberry. A utilização do Ubunto é ideal para o usuário que pretende fazer do Raspberry um PC.

OSMC: é um sistema operacional que transformar o Raspberry em um media center, da ao computador acesso a canais via Internet e uma série de recursos que permitem a reprodução de áudio de vídeo com qualidade. Basicamente, você transforma o Raspberry Pi em uma Apple TV caseira.

	Recalbox: O Recalbox conta com suporte a emulação de uma grande quantidade de consoles clássicos como Atari, Master System, Mega Drive, Nintendinho, Super Nintendo, Playstation e etc, até de games de MS-DOS, como o Doom original. 

	Pidora: O Pidora trata-se de uma versão compatível com o Raspberry e que promove acesso a uma série de apps presentes nas distros da Red Hat, além de navegador de Internet, suíte de escritório e apps gerais, como os encontrados no Ubuntu. Um recurso bem interessante do Pidora é o chamado modo Headless, que permite configurar o sistema operacional em Raspberrys sem monitor. O processo de acesso e uso é feito via rede, por outro computador, e pode significar um modo facilitado de usar o Raspberry na falta de um monitor dedicado.


  Fonte: http://www.techtudo.com.br/listas/noticia/2016/09/cinco-sistemas-operacionais-para-usar-no-raspberry-pi.html

2.Apresente as formas de instalação de sistemas operacionais para o Raspberry Pi.

Primeiro entra no site do Raspberry e lá seleciona a imagem (.iso) do SO desejado para só depois da conclusão do download passar para o cartão SD e assim para o Raspberry onde ele mesmo já reconhece e faz todas as demais configurações e instalações.

3.Apresente 3 formas de desenvolvimento de software para o Raspberry Pi.

Através da compilação de programa pelo proprio prompt da rasp, bibliotecas disponibilizadas, mapeamento dos pinos I/O em linguagem C.

4.Apresente 3 formas de acesso remoto ao Raspberry Pi.

SSH, onde através do IP do computador é possível acessar o terminal de outro computador (Raspberry Pi). Staxtx, onde é possível carregar a interface gráfica do raspberry no notebook utilizado para assim usar a interface da Raspberry através de uma conexão SSH. Qemu, é um emulador que serve para rodar sistemas operacionais diferentes no seu computador.

5.Apresente as formas possíveis de compilação de código em C para o Raspberry Pi.

É possível usar o notebook para escrever o códdigo e passar para o Raspberry (compila e executa). É possível escrever, compilar e executar pelo próprio Raspberry. E por fim escrever e compilar pelo notebook e depois apenas executar no Raspberry.

6.Apresente as formas possíveis de compilação de código em Python para o Raspberry Pi.

sudo python exp.py

As regras para compilação do código em C são normalmente iguais para a compilação do código em python.
