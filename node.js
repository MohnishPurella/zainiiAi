const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:30020'); // Use the port you've set in Unreal Engine

ws.on('open', function open() {
  console.log('connected');
  // ws.send('Hello Server!');
  
  // Register to Remote Control Preset
  const registerPayload = {
    "MessageName": "preset.register",
    "Parameters": {
        "PresetName": "Mypreset" // Replace with your preset name
    }
  };
  ws.send(JSON.stringify(registerPayload));

});


ws.on('message', function incoming(data) {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);

  // Here is where you would add the code to handle incoming messages from the server.
  // For example, you might update the text displayed by your MetaHuman avatar.
  console.log('received: %s', data);
});
