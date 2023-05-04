const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const details = require('./data/details.json')
app.use(cors());

app.get('/', (req, res) => {
	res.send('Dragon is running')
});

app.get('/categories', (req, res)=>{
	res.send(categories);
})

app.get('/details', (req, res) =>{
	res.send(details)
})

app.get('/details/:id', (req, res) =>{
	const id = req.params.id;
	console.log(id);
	const selectedNews = details.find( n => n.id == id);
	console.log(selectedNews)
	res.send(selectedNews);
})

app.listen(port, () => {
	console.log(`Dragon API is running on port: ${port}`)
})
