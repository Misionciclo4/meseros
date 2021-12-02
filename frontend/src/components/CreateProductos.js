import React, { Component } from 'react'
import axios from 'axios'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateProductos extends Component {
  state = {
    users: [],
    selectedUser: '',
    title: '',
    content: '',
    table: '',
    date: new Date(),
    editing: false,
    _id: '',
  }

  componentDidMount = async () => {
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username,
    })

    if (this.props.match.params.id) {
      const res = await axios.get(
        'http://localhost:4000/api/productos/' + this.props.match.params.id,
      )
      this.setState({
        title: res.data.title,
        table: res.data.table,  
        description: res.data.description,
        selectedUser: res.data.author,
        date: new Date(res.data.date),
        editing: true,
        _id: this.props.match.params.id,
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const newProducto = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      table: this.state.table,
      author: this.state.selectedUser,
    }
    if (this.state.editing) {
      await axios.put(
        'http://localhost:4000/api/productos/' + this.state._id,
        newProducto,
      )
    } else {
      await axios.post('http://localhost:4000/api/productos', newProducto)
    }
    window.location.href = '/'
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangeDate = (date) => {
    this.setState({ date })
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Crear Pedido</h4>

          {/* select user */}
          <div className="form-group">
            <select
              className="form-control"
              name="selectedUser"
              onChange={this.onInputChange}
              value={this.state.selectedUser}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <br />

          {/* Titulo */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Producto:"
              name="title"
              onChange={this.onInputChange}
              value={this.state.title}
              required
            />
          </div>
          <br />

          {/* Contenido */}
          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              placeholder="Contenido:"
              onChange={this.onInputChange}
              value={this.state.description}
              required
            ></textarea>
          </div>
          <br />
          {/* mesa */}
          <div className="from group">
            <textarea
              name="table"
              className="form-control"
              placeholder="mesa"
              onChange={this.onInputChange}
              value={this.state.table}
              required
            ></textarea>
          </div>

          {/* Fecha */}
          <div className="form-group">
            <Datepicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
              value={this.state.date}
            />
          </div>
          <br />

          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    )
  }
}
