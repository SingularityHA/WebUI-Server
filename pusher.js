var sys = require('sys');
var net = require('net');
var mqtt = require('mqtt');
 
var io  = require('socket.io').listen(5000);
client = mqtt.createClient(1883, '172.25.119.224');
 
io.sockets.on('connection', function (socket) {
  socket.on('subscribe', function (data) {
    console.log('Subscribing to '+data.topic);
    client.subscribe(data.topic);
  });
  socket.on('command', function(data) {
	console.log(data);
  });

});


client.on('message', function(topic, message) {
	io.sockets.emit(topic, message);
}); 
