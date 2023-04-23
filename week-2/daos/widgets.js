const Widgets = require('../models/widgets');

module.exports = {};
  
module.exports.create = async (widget) => {
    return await Widgets.create(widget);
};

module.exports.getById = async (id) => {
  const widget = await Widgets.findOne({_id: id}).lean();
  return widget;
};

//TODO: add method to update widget

//TODO: add method to remove widget
