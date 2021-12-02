import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegacion extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          BAKERY MANAGEMENT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            /* aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" */
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Pedidos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Crear Pedidos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="user">
                  Crear Meseros
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="login">
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
