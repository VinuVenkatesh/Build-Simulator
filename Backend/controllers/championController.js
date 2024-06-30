const axios = require('axios');
require('dotenv').config();


async function specificChampion(req,res){
    const response = await axios.get(process.env.CHAMPION_URL + '/'+ req.params.name + '.json');
    res.send(JSON.stringify(response.data.data));
}

async function allChampionNames(req,res){
    const response = await axios.get(process.env.CHAMPION_URL +'.json');
    const championData = response.data.data;
    const championList = Object.keys(championData);
    res.send(JSON.stringify(championList))
}

module.exports = {
    specificChampion,
    allChampionNames

}