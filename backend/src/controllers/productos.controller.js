const productosControl = {}
const Producto = require('../models/Producto')

productosControl.getProductos = async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
}
productosControl.createProducto = async (req, res) => {
  const { title, description, date, author,table } = req.body

  const newProducto = new Producto({
    title,
    description,
    table,
    date,
    author
  });
  await newProducto.save()
  res.json({ message: 'producto guardado' })
}
productosControl.getProducto = async (req, res) => {
  const producto = await Producto.findById(req.params.id); 
  res.json(producto)
}
  productosControl.updateProducto =  async (req, res) => {
    const{title, description, author,table} = req.body;
    await Producto.findOneAndUpdate(req.params.id, {
      title,
      author,
      description,
      table

    })
  res.json({ message: 'producto actualizado' })

  }

productosControl.deleteProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ message: 'producto eliminado' })

}

module.exports = productosControl
