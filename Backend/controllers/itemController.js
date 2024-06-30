const axios = require('axios');

async function items(req,res){
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/item.json');
    res.send(JSON.stringify(response.data.data));
}
module.exports = {items}