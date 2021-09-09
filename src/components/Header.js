import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import bgImage from './bg2.jpg'

function Header(props) {
  const submitDishType= props.submitDishType;
  const submitHealthLabel= props.submitHealthLabel;

    return (
        <div className="header">
          <nav className="navbar">
              <div className="navbar-container">
                  <div className="navbar-brand">
                      <img src="/hamburger.svg"/>
                      <Link to="/" className="navbar-brand-name"> findRecipes</Link>
                  </div>
                  <div className="navbar-nav">
                      <select className="nav-select" onChange={submitHealthLabel}>
                          <option>vegetarian</option>
                          <option>vegan</option>
                          <option>paleo</option>
                          <option>dairy-free</option>
                          <option>gluten-free</option>
                          <option>wheat-free</option>
                          <option>low-sugar</option>
                          <option>egg-free</option>
                      </select>
                  </div>
              </div>
          </nav>
          <div className="search-section">
            <img src={bgImage}/>
            <h1>BRING SOUL TO THE RECIPE</h1>
            <div className="search-container">
                <img src="/search-icon.svg" />
                <input className="search-bar" placeholder="Search your favourite food recipe.."
                  onKeyDown={submitDishType}   
                />
            </div>
          </div>
        </div>
    )
}

export default Header