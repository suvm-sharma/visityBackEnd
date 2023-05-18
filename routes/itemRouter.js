const express = require('express');

const app = express();
const itemController = require('../controller/itemController');

const router = express();

router.post('/createItem', itemController.createItem);
router.get('/getAllItems', itemController.getAllItems);

router
  .route('/:id')
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
