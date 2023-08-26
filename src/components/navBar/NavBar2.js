import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/img/Logo.png"

const Navbar2 = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">

                                    <Link className="navbar-brand" to ='/'>
                                    <img src={Logo} width={60} className='logo1'/>
                                    </Link>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/plataforma/Playstation 2"} >Playstation 2</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/plataforma/Xbox"}>Xbox</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/plataforma/Nintendo"}>Nintendo</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-6 d-flex justify-content-end  align-items-center">
                            <CartWidget/>
                        </div>        
            </div>
        </div>
        
            
    )
}

export default Navbar2