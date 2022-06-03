const router = require('express').Router();
const Item = require('../models/ItemModel');


router.route('/').get((req, res) => {
  Item.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const prix = Number(req.body.prix);
  const date = Date.parse(req.body.date);

  const newItem = new Item({
    name,
    description,
    prix,
    date,
  });

  newItem.save()
  .then(() => res.json('item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.username;
      item.description = req.body.description;
      item.prix = Number(req.body.duration);
      item.date = Date.parse(req.body.date);

      item.save()
        .then(() => res.json('item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;