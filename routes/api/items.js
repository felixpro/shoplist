const express = require('express');
const router = express.Router();


// Item Model
const Item = require('../../models/Item')

// @route Get api/items
// @desc  Het All Items
// @access Public

router.get('/', (req, res) =>{
  Item.find()
  .sort({date: -1})
  .then(items => res.json(items))
})

// @route Post api/items
// @desc  Post All Items
// @access Public

router.post('/', (req, res) =>{
  const newItem = new Item({
    name: req.body.name
  })

  newItem.save()
  .then(item => res.json(item))
})


// @route Post api/items
// @desc  Delete All Items
// @access Public

router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(() => res.json({success: false}))
})






module.exports = router;
