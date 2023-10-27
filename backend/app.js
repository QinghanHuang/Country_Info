const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// 启用CORS中间件
const cors = require('cors');

app.use(cors()); 



app.get('/all', (req, res) => {
  axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    });
});

app.get('/name/:name', (req, res) => {
    const countryName = req.params.name;
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
  
    axios.get(apiUrl)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.status(500).json({ error: `Failed to fetch data for country: ${countryName}` });
      });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
