const { io } = require('../index');


// Mensajes de Socket: here we got the client events
io.on('connection', client => {
    console.log('Cliente conectado..!!!');
  
    // client.on('event', data => {  });
    client.on('disconnect', () => {
      console.log('Cliente desconectado..!!!');
    });
  
    client.on('mensaje', (payload) => {
      console.log('Mensaje recibido:', payload);
  
      // mensaje a todos los clientes
      io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });
  });