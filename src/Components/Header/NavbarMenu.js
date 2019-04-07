import React from 'react'

export const NavbarMenu = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-sm navbar-light bg-gris navbar-dark">
      <div className="container mt_63">


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsMenu"
                aria-controls="navbarsMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>


        <div className="collapse navbar-collapse" id="navbarsMenu">
          <ul className="margin_top_6 navbar-nav ml-auto bg-gris navbar-dark color_navbar">
            <li className="nav-item2">
              <a data-toggle="modal" data-target="#exampleModalScrollable" href="" className="nav-link btn navbar-btn"
                 id="btn-alta">Ayuda</a>
            </li>
            <li className="nav-item2">
              <a data-toggle="modal" data-target="#exampleModalScrollable2" href="" className="nav-link btn navbar-btn"
                 id="btn-alta">Acerca de</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  )

}