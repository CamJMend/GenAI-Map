import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addProduct from '../../assets/images/addproduct.svg'
import listproduct from '../../assets/images/listproduct.svg'


const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to={'/addaitool'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={addProduct} alt="add product icon" style={{width: '30px', height: '30px'}}/>
                    <p>Add AI Tool</p>
                </div>
            </Link>
            <Link to={'/listaitools'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={listproduct} alt="list product icon" style={{width: '30px', height: '30px'}}/>
                    <p>List Database</p>
                </div>
            </Link>
            <Link to={'/updateaitool'} style={{textDecoration: 'none'}}>
                <div className="sidebar-item">
                    <img src={listproduct} alt="list product icon" style={{width: '30px', height: '30px'}}/>
                    <p>List Database</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar