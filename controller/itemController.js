const Items = require('../model/itemModel');

exports.getIndex = (req, res) => {
  res.render('index');
};

exports.createItem = async (req, res) => {
  console.log(req.body);
  try {
    const newItem = await Items.create({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
    });

    res.status(201).json({
      status: 'Success',
      data: {
        newItem,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();

    res.status(200).json({
      status: 'Success',
      result: items.length,
      data: {
        items,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: {
        item,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Items.findByIdAndDelete(req.params.id);
    console.log(item);

    res.status(200).json({
      status: 'Success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};
