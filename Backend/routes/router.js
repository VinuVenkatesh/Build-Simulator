const router = require('express').Router();
const championController = require('../controllers/championController');
const itemController = require('../controllers/itemController')
router.get("/champion/:name",championController.specificChampion);
router.get("/champions",championController.allChampionNames);
router.get("/items",itemController.items);
module.exports = router;