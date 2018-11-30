Escreva um código em C para gerar uma onda quadrada de 1 Hz em um pino GPIO do Raspberry Pi.

#include <wiringPi.h>

#include <unistd.h>


wiringPi
int main(){
	
	
	int pin = 4;		
	float val =500000;
	
if(wiringPiSetup()== -1)
		
	return -1;

	
	while(1){
	
		pinMode(pin, OUTPUT);
	
		digitalWrite(pin, LOW);
	
		usleep(val);
	
		digitalWrite(pin, HIGH);
	
		usleep(val);
	
			}

	
			return 0;
				
}


Generalize o código acima para qualquer frequência possível.
#include <wiringPi.h>

#include <unistd.h>

#include <stdio.h>

#include <stdlib.h>
	wiringPi
int main(){
	
	
		int pin = 4;	
	
		float f = 0, t = 0;
	
			if(wiringPiSetup()== -1)
		
			return -1;
	
			printf("Escolha uma frequência:\n");
	
			scanf("%f", &f);

	
			t = (1/(2*f))*1000000;

	
		while(1){
		
			pinMode(pin, OUTPUT);
		
			digitalWrite(pin, LOW);
		
			usleep(t);
		
			digitalWrite(pin, HIGH);
		
			usleep(t);
	
				}

	
				return 0;
						
}
Crie dois processos, e faça com que o processo-filho gere uma onda quadrada, enquanto o processo-pai lê um botão no GPIO, aumentando a frequência da onda sempre que o botão for pressionado. A frequência da onda quadrada deve começar em 1 Hz, e dobrar cada vez que o botão for pressionado. A frequência máxima é de 64 Hz, devendo retornar a 1 Hz se o botão for pressionado novamente.

#include <wiringPi.h>

#include <unistd.h>

#include <stdio.h>

#include <stdlib.h>

#include <string.h>


	wiringPi
int main(){
	
	
		int led = 4, btn = 1, t = 0, tr = 0;
	
		float f = 1, T = 1;
	
		pid_t pid; 
		int fd[2];  	
		pid = fork(); 	
		pipe(fd); 	

	
	
		wiringPiSetup();

	
		if(pid == 0) //cria o processo filho
	
			{ 
		
				while(1)
		
				{
			
				close(fd[1]); 
				printf("Processo filho criado!\n");
			
				read(fd[0], &tr, sizeof(tr)); 		
				printf("Valor de t lido no filho: %d \n", tr);
			
				digitalWrite(led, LOW);
			
				usleep(tr);
			
				digitalWrite(led, HIGH);
			
				usleep(tr);
		}
	}
	
				else 
	
					{
		printf("processo pai criado\n");
		
				while (1)
		
					{
			
					usleep(50000);
			
						if(digitalRead(btn)==1)
			
						{
				
						close(fd[0]); 			
						printf("Valor de t escrito: %d\n", t);
				
				
						f = 2*f;
				
							if(f>64)
					
							f = 1;
				
							T = (1/(2*f))*1000000;
				
							t = (int) T;
				
							write(fd[1], &t, sizeof(t)); 		}
	}
	}
	

	
							return 0;
								
}
