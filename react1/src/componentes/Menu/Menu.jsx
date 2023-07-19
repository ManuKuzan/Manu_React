import React from 'react'

export const Menu = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <button onClick={props.onClick} className="btn btn-outline-success" type="button">{props.SesionIniciada}</button>
      </form>
    </div>
  </nav>
  )
}
