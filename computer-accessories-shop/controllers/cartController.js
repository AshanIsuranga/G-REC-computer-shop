const User = require('../models/User');
const Gpu = require('../models/Gpu');
const Monitor = require('../models/Monitor');
const Motherboard = require('../models/Motherboard');
const Processor = require('../models/Processor');

exports.getCart = async (req, res) => {
  try {
    const user = req.user;

    // Combine all cart items into a single array
    const allCartItems = [
      ...user.gpusCart,
      ...user.monitorsCart,
      ...user.motherboardsCart,
      ...user.processorsCart
    ].filter(item => item); // Remove any undefined or null items

    // Calculate the grand total
    const grandTotal = allCartItems.reduce((total, item) => {
      return total + (item.price * item.amount);
    }, 0);

    res.render('cart', {
      allCartItems,
      grandTotal,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { itemId, category } = req.params;
    const user = req.user;

    console.log(`Adding item ${itemId} from category ${category} to cart for user ${user._id}`);

    let itemModel;
    switch (category) {
      case 'gpus':
        itemModel = Gpu;
        break;
      case 'monitors':
        itemModel = Monitor;
        break;
      case 'motherboards':
        itemModel = Motherboard;
        break;
      case 'processors':
        itemModel = Processor;
        break;
      default:
        console.log(`Invalid category: ${category}`);
        return res.status(400).json({ error: 'Invalid category' });
    }

    const selectedItem = await itemModel.findById(itemId);

    if (!selectedItem) {
      console.log(`Item not found: ${itemId}`);
      return res.status(404).json({ error: 'Item not found' });
    }

    const cartItem = {
      itemId: selectedItem._id,
      name: selectedItem.name,
      amount: 1,
      price: selectedItem.price,
    };

    user[`${category}Cart`].push(cartItem);

    await user.save();

    console.log(`Item added successfully: ${JSON.stringify(cartItem)}`);
    res.status(200).json({ message: 'Item added to cart successfully', cartItem });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};