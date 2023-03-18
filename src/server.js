const express = require('express');
const port = 3001;


const app = express();

const cors = require('cors');

app.use(cors());

const axios = require('axios')

app.get('/values', async(req, res, next)=>{
    const {symbol} = req.query;
    if(!symbol ) return res.status(422).send('parametros sao obrigatorios');

    try{
        const response = await axios.get(`http://localhost:8080/gpaevg-nota/api/v1/itemnota/produto/${symbol}`);
        res.json(response.data);
    }catch(err){
        console.log(err.message);
        res.status(500).json(err.response ? err.response.data : err.message)
    }

})


app.listen(port);
console.log('Servidor iniciado...')