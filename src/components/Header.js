import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Matt Shaver</h1>
                <p>FRONT END,FULL STACK ENGINEER CRAFTING GREAT UI/UX USING WORLD CLASS TECHNOLOGY</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
                <li><button onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
