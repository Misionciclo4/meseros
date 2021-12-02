import React, { Component } from 'react'

import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class ListProductos extends Component {
  state = {
    productos: [],
  }

  componentDidMount = () => {
    this.getProductos()
  }

  async getProductos() {
    const res = await axios.get('http://localhost:4000/api/productos')
    this.setState({ productos: res.data })
  }

  deleteProducto = async (id) => {
    await axios.delete(`http://localhost:4000/api/productos/${id}`)
    this.getProductos()
  }





  render() {
    return (
      <div className="row">
        {this.state.productos.map((producto) => (
          <div className="col-md-4 p-2" key={producto._id}>
            <div className="table">
              <div className="card-header">
                <h5>{producto.title}</h5>
              </div>
              <div className="card-body">
                <p>{producto.description}</p>
                <p>Mesero: {producto.author}</p>
                <p>Mesa: {producto.table}</p>
                <p>{format(producto.date)}</p>
              </div>
              <div className="card-footer">
                <Link
                  className="btn btn-secondary m-1"
                  to={`/edit/${producto._id}`}
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteProducto(producto._id)}
                >
                  Entregado
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
