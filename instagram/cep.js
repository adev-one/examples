const axios = require('axios');

const cep = 58064370;

axios
  .get(`https://viacep.com.br/ws/${cep}/json/`)
  .then(res => {
    console.log(res.data);

    const { logradouro, bairro, localidade, uf } = res.data;
    console.log(`${logradouro}, ${bairro} - ${localidade}/${uf}`)
  })
  .catch(error => {
    console.error(error);
  });