const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;