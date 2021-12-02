const { Schema, model } = require('mongoose')

const productoSchema = new Schema(
  {
    title: String,
    description: {
      type: String,
      required: true,
    },
    author: String,
    date:{
    type: Date,
    default: Date.now
    },
    table:String,

  },
  {
    timestamps: true,
  },
)

module.exports = model('Producto', productoSchema)
