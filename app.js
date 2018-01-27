var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');

app.use(express.static(__dirname + '/nodejs'));
app.get('/', function (req,res) { 
	res.sendFile(__dirname + '/index.html');
});

var board = new five.Board({
	repl:false
});

board.on('ready', function () {
	var speed, commands, motors;
	led_01 = new five.Led(4);
	led_02 = new five.Led(5);
	led_03 = new five.Led(6);
	led_04 = new five.Led(7);
	led_05 = new five.Led(13);
	led_06 = new five.Led(12);
	led_07 = new five.Led(11);
	led_08 = new five.Led(10);
	led_09 = new five.Led(9)
	led_10 = new five.Led(8);
	
	sensor = new five.Sensor('A1');


	
	commands = null;
	led_01.on();
	led_02.on();
	led_03.on();
	led_04.on();
	led_05.on();
	led_06.on();
	led_07.on();
	led_08.on();
	led_09.on();
	led_10.on();
	
//	led_01.blink(1000);
//	led_02.blink(1000);
//	led_03.blink(1000);
//	led_04.blink(1000);
//	led_05.blink(1000);
//	led_06.blink(1000);
//	led_07.blink(1000);
//	led_08.blink(1000);
//	led_09.blink(1000);
//	led_10.blink(1000);
	
	console.log('Arranco')

	var on_01 = true;
	var on_02 = true;
	var on_03 = true;
	var on_04 = true;
	var on_05 = true;
	var on_06 = true;
	var on_07 = true;
	var on_08 = true;
	var on_09 = true;
	var on_10 = true;

	var blink = true;

	io.on('connection', function (socket) {
		socket.on('led_01', function (){
			if (on_01){
				led_01.off();
				on_01=false;
			} else {
				led_01.on();
				on_01=true;
			}
			socket.broadcast.emit('cambio', ['btn_01',on_01])
			socket.emit('cambio', ['btn_01',on_01])
			console.log('Cambio a led_01')
		});
		socket.on('led_02', function (){
			if (on_02){
				led_02.off();
				on_02=false;
			} else {
				led_02.on();
				on_02=true;
			}
			socket.broadcast.emit('cambio', ['btn_02',on_02])
			socket.emit('cambio', ['btn_02',on_02])
			console.log('Cambio a led_02')
		});
		socket.on('led_03', function (){
			if (on_03){
				led_03.off();
				on_03=false;
			} else {
				led_03.on();
				on_03=true;
			}
			socket.broadcast.emit('cambio', ['btn_03',on_03])
			socket.emit('cambio', ['btn_03',on_03])
			console.log('Cambio a led_03')
		});
		socket.on('led_04', function (){
			if (on_04){
				led_04.off();
				on_04=false;
			} else {
				led_04.on();
				on_04=true;
			}
			socket.broadcast.emit('cambio', ['btn_04',on_04])
			socket.emit('cambio', ['btn_04',on_04])
			console.log('Cambio a led_04')
		});
		socket.on('led_05', function (){
			if (on_05){
				led_05.off();
				on_05=false;
			} else {
				led_05.on();
				on_05=true;
			}
			socket.broadcast.emit('cambio', ['btn_05',on_05])
			socket.emit('cambio', ['btn_05',on_05])
			console.log('Cambio a led_05')
		});
		socket.on('led_06', function (){
			if (on_06){
				led_06.off();
				on_06=false;
			} else {
				led_06.on();
				on_06=true;
			}
			socket.broadcast.emit('cambio', ['btn_06',on_06])
			socket.emit('cambio', ['btn_06',on_06])
			console.log('Cambio a led_06')
		});
		socket.on('led_07', function (){
			if (on_07){
				led_07.off();
				on_07=false;
			} else {
				led_07.on();
				on_07=true;
			}
			socket.broadcast.emit('cambio', ['btn_07',on_07])
			socket.emit('cambio', ['btn_07',on_07])
			console.log('Cambio a led_07')
		});
		socket.on('led_08', function (){
			if (on_08){
				led_08.off();
				on_08=false;
			} else {
				led_08.on();
				on_08=true;
			}
			socket.broadcast.emit('cambio', ['btn_08',on_08])
			socket.emit('cambio', ['btn_08',on_08])
			console.log('Cambio a led_08')
		});
		socket.on('led_09', function (){
			if (on_09){
				led_09.off();
				on_09=false;
			} else {
				led_09.on();
				on_09=true;
			}
			socket.broadcast.emit('cambio', ['btn_09',on_09])
			socket.emit('cambio', ['btn_09',on_09])
			console.log('Cambio a led_09')
		});
		socket.on('led_10', function (){
			if (on_10){
				led_10.off();
				on_10=false;
			} else {
				led_10.on();
				on_10=true;
			}
			socket.broadcast.emit('cambio', ['btn_10',on_10])
			socket.emit('cambio', ['btn_10',on_10])
			console.log('Cambio a led_010')
		});
		socket.on('estado', function (){
			socket.emit('cambio', ['btn_01',on_01])
			socket.emit('cambio', ['btn_02',on_02])
			socket.emit('cambio', ['btn_03',on_03])
			socket.emit('cambio', ['btn_04',on_04])
			socket.emit('cambio', ['btn_05',on_05])
			socket.emit('cambio', ['btn_06',on_06])
			socket.emit('cambio', ['btn_07',on_07])
			socket.emit('cambio', ['btn_08',on_08])
			socket.emit('cambio', ['btn_09',on_09])
			socket.emit('cambio', ['btn_10',on_10])
		});


		socket.on('stop', function (){
			if (blink){
				led_10.stop();
				blink = false;
			}
			else{
				led_10.blink(1000);
				blink = true;
			}
		});
		socket.on('off', function (){
			led_10.off();  // to shut it off (stop doesn't mean "off")
		});
		socket.on('on', function (){
			led_10.on(); // to turn on, but not blink
		});
		
		sensor.on('change', function() {
			//console.log(this.scaleTo(0,10));
			socket.emit('pote', this.scaleTo(0,10))
		});

	});
});
		
