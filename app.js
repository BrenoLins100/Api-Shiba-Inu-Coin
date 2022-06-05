/* Example in Node.js ES6 using request-promise */
const express = require('express');
const app = express();

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': process.env.API_KEY
  },
  json: true,
  gzip: true
};

const PORT = process.env.PORT || 8877;

app.get('/',(req,res)=>{
  res.json({
    msg: 'ok'
  })
})

app.get('/shib',(req,res)=>{

  rp(requestOptions).then(response => {
  
    const dados = response.data
  
    dados.map((x)=>{
      if(x.symbol == 'SHIB'){
        console.log(x.name)
        res.json(
          x
        )
      }
    })

  }).catch((err) => {
    console.log('API call error:', err.message);
  });

  
})

app.listen(PORT, ()=>{
    //console.log('Porta'+PORT)
});

