// Leonardo de Holanda Bonifácio - leohb2@gmail.com

// Bibliotecas
var Blynk = require('blynk-library'); // blynk
var Gpio = require('onoff').Gpio; // gpio
var sensorLib = require('/usr/lib/node_modules/node-dht-sensor'); //DHT11

// Pinos
var rele = new Gpio (4, 'out'); // saída para relé
var soil = new Gpio (27, 'in'); // entrada umidade do solo
var agua = new Gpio (22, 'in'); // entrada sensor água

// Variaveis Globais
var sensorType = 11; // 11 for DHT11, 22 for DHT22 and AM2302
var sensorPin  = 17;  // GPIO para DHT
var modo;

// Auth code e setup Blynk
var AUTH = '2e761a728xxxx989ec73940d680850';

///////////////////////////////////////////////////////////////////////////////////////////

// Conectando Blynk
var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient() // primeira opção UnB
});
//var blynk = new Blynk.Blynk(AUTH);  // segunda opção

// Pinos app Blynk (necessário estar depois da conexão com blynk)
var v1 = new blynk.VirtualPin(1); // LED água
var v2 = new blynk.VirtualPin(2); // botao rele
var v6 = new blynk.VirtualPin(6); // LED soil
var v0 = new blynk.VirtualPin(0); // Seletor de Modo

// Se conectado, enviar mensagem e sincronizar relé com botão virtual
blynk.on('connect', function() {
	console.log('');
	console.log('');
	console.log('');
	console.log("---Blynk pronto. Automação de jardinagem--- ");
	blynk.syncVirtual(2);  
	blynk.syncVirtual(0);
});

// Inicialização
sensorLib.initialize(sensorType, sensorPin);
 
// Timers para funções
setInterval(LeituraDHT, 10000); // Leitura DHT a cada 10s
setInterval(regar, 1000); // Verificar regar a cada 1 s
setInterval(LeituraAgua,1000); // Leitura água a cada 1 s

/////////////////////////////////////////////////////////////////////////////////////////

// Definição de Modo
v0.on('write',function(param2){
	modo = param2;
});

// Função Leitura DHT
function LeituraDHT(){
    var readout = sensorLib.read();
    blynk.virtualWrite(3, readout.temperature.toFixed(1)); // V3 para temp
    blynk.virtualWrite(4, readout.humidity.toFixed(1));	// V4 para humi
    
    console.log('Temperatura:', readout.temperature.toFixed(1) + 'C');
    console.log('Humidade:   ', readout.humidity.toFixed(1)    + '%');
}

// Função para Regar
function regar(){
	var leitura = soil.readSync();
	// Modo Automático
	if(modo == 1){
		console.log('');
		console.log('----------Modo Automático Ativado----------');
		// Solo Seco	
		if(leitura > 0){
			blynk.virtualWrite(6, 0); // DESLIGA LED			
			rele.writeSync(0);
			blynk.virtualWrite(2,1);
			console.log('Bomba:       Ligada');
			console.log('Umidade:     Seco'); 
		}
		// Solo Molhado
		if (leitura == 0){
			blynk.virtualWrite(6, 1023); // LIGA LED
			rele.writeSync(1);
			blynk.virtualWrite(2,0);
			console.log('Bomba:       Desligada');
			console.log('Umidade:     Molhado'); 
			}
	}
	// Modo Manual
	if(modo ==2){
		console.log('');
		console.log('----------Modo Manual Ativado----------');
		blynk.syncVirtual(0);
		// Leitura do sensor e ativação do LED
		if(leitura > 0){
			blynk.virtualWrite(6, 0); // DESLIGA LED
			console.log('Umidade:     Seco'); 
		}
		if (leitura == 0){
			blynk.virtualWrite(6, 1023); // LIGA LED
			console.log('Umidade:     Molhado'); 
		}		
		v2.on('write', function(param1) {		
			// Bomba ligada
			if(param1 == 1){
				rele.writeSync(0); 
			}
			// Bomba desligada
			else{
				rele.writeSync(1); 
			}
		});
	}
	// Modo não-definido
	if(modo ==0){
		console.log('Selecione o modo de operação');
	}
}

// Função Nível Água
function LeituraAgua(){
	var leituraagua = agua.readSync();
	if (leituraagua ==0){
		console.log('Água:        Cheio');
		blynk.virtualWrite(1, 1023); // LIGA LED		
	}
	if (leituraagua == 1){
		console.log('Água:        Vazio');
		blynk.virtualWrite(1, 0); // DESLIGA LED		
	}
}
