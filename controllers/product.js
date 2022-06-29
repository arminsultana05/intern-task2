const Product = require ('../model/Product')
exports.addProduct = async (req, res) => {
  try {
    const newProducr = new Product(req.body);
    await  newProducr.save();

    res.status(200).json({ message: 'Product added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price,  quantity } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'User not found' });
    }
    product.name = name?name:product.name;
    product.description = description ? description : product.description ;
    product.price = price ? price : product.price ;
    product.quantity = quantity ? quantity: product.quantity ;

    await product.save();

    res.status(200).json({ message: 'Product upadetd successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.getDeleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    // [{}, {}, {}]
    const products = await  Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    // {}
    // const user = await User.findOne({ _id: req.params.id });
    const product = await  Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

