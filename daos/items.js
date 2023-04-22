const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  let result;

  itemsModel.items.forEach( (item) => {
    if(item.id === itemId) {
      result = item;
      return result;
    }
  }, result);

  return result;
}

module.exports.deleteById = async (itemId) => {
  itemsModel.items.forEach( (item, index)  => {
    if(item.id === itemId) {
      itemsModel.items.splice(index, 1);
    }
  });
}

module.exports.updateById = async (itemId, newObj) => {
  itemsModel.items.forEach( (item, index) => {
    if(item.id === itemId) {
      newObj['id'] = item.id 
      itemsModel.items[index] =  newObj;
    }
  });
  return itemsModel.items;
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}