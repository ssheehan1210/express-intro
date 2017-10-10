const express = require('express');
const app = express(); // app is an object with a bunch of methods to build a server



app.get('/', (req, res) => { // req = request; res = response
	res.send('Hi I am the information the server has sent to the client');
})

app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/yakuza', (req, res) => {
	console.log(req);
	res.send('*Majima flies in and kicks you with his break-dance style*');
	console.log('Hey wait can you see this too?'); // appears in terminal
})

app.get('/charizo', (req, res) => {
	res.send('I am thirsty');
})



app.listen(3000, () => {
	console.log('I am listening on port 3000'); // 'node index.js' on terminal to run
})


