import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'

class Main extends React.Component {
  render() {
    let close = (
        <div
            className="close"
            onClick={() => {
            this.props.onCloseArticle()
        }}></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout
        ? {
            display: 'flex'
        }
        : {
            display: 'none'
        }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro'
          ? 'active'
          : ''} ${this.props.articleTimeout
              ? 'timeout'
              : ''}`}
          style={{
          display: 'none'
        }}>
            <h2 className="major">Intro</h2>
            <span
              className="image main"
              style={{
              textAlign: 'center'
            }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '53%',
                  padding: '8px',
                  borderRadius: '100%'
                }}
                src={pic01}
                alt="Portrait Shot of Matt."/>
            </span>
            <h3>Transforming What It Means To Be An Engineer</h3>
            <p>
              Matt is a polymath whose biggest strength is comboing beginner, mid - expert level skills. He is also
              a lifelong learner and loves innovating with technology. Matt loves to push the boundaries of what is possible when it comes to website,
              app development, coding and problem solving. His passion/long term goal is solving very complex real world problems with like-minded people from 
              many different backgrounds using digital means. Matt also values personal growth, personal freedom, challenges and 
              putting in the teamwork that is needed for great success. Matt also values STEM, diversity. Some of the real world challenges Matt is interested in contributing to solutions for are: climate change, creating hyperefficient economies, civilization advancement, AI governance, and ending poverty, 
            </p>
            <h3>Some Of The Technology That Matt Uses:</h3>
	    <h3>Web3: Solidity, Rust, +a lot more</h3>
	    <h3>AI,ML</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>jQuery</li>
              <li>ES6+</li>
              <li>Wordpress</li>
              <li>PHP</li>
              <li>Shopify</li>
              <li>Funnel Systems</li>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>Apollo</li>
              <li>GraphQL</li>
              <li>Python</li>
              <li>RStudio</li>
              <li>UI/UX</li>
              <li>Figma</li>
            </ul>
            {close}
          </article>
          <article
              id="work"
              className={`${this.props.article === 'work'
              ? 'active'
              : ''} ${this.props.articleTimeout
                  ? 'timeout'
                  : ''}`}
              style={{
              display: 'none'
          }}>
            <h2 className="major">Work</h2>
            <div className="image main">
              <a href="https://crwn-clothing-prodapp.herokuapp.com">
                <img src="https://res.cloudinary.com/dwe1hxicg/image/upload/c_scale,w_600/v1593372728/Portfolio/crwn-clothing-preview_lnlyg4.jpg" alt="A glimpse of Crwn Clothing App."/>
              </a>
            </div>
            <h3>CRWN CLOTHING APP</h3>
            <p>
              The Crwn Clothing App was built using ReactJS, Redux, SCSS, CSS Grid, Flexbox, 
              Styled Components, Redux Saga, Stripe, React Hooks, Firebase.
              <br/><br/>
              This fully responsive app's features include a Test Stripe integration, Google Auth Sign In,
              Email/Password Sign In, Shopping Cart, Data Fetching/Storing with Firebase + More.
              <br/><br/>
              The app is located in a Github Repo with a master, relese, development branch. 
              <br/><br/>
              The release, development branches are automatically deployed to seperate Heroku instances when new commits are pushed to release, development. 
            </p>
            <a href="https://crwn-clothing-prodapp.herokuapp.com/">
              <h3>Visit Crwn Clothing App</h3>
            </a>
            <a href="https://github.com/mattShaverWebCreator/crwn-clothing">
              <h3>Visit Crwn Clothing App on Github</h3>
            </a>
            <div className="image main">
              <a href="https://carolinas.aaa.com/membership/">
                  <img src={pic02} alt="A glimpse of AAA site."/>
              </a>
            </div>
            <h3>AAA</h3>
            <p>
              AAA is a privately held non-profit national member association and service
              organization with over 58 million members in the United States and Canada. 
              <br/><br/>
              Matt worked in AAA Carolina's Marketing Department as a Front End Engineer for roughly 11 months. 
              <br/><br/>
              Matt, another engineer were in charge of creating, testing, updating Wordpress Pages, Landing Pages,
              Wordpress Themes, Wordpress Plug-ins(ACF, Yoast SEO, CPT UI + More) using HTML, CSS, PHP, JS, jQuery, Flexbox, Bootstrap 4, 
              Polyfills, Adobe XD, Photoshop. 
              <br/><br/>
              Matt utilized Javascript, Git, Typescript, jQuery, ReactJS, CSS Grid, GraphQL, Apollo and more while working on AAA Carolinas
              marketing projects. 
              <br/><br/>
              Slack was the primary communications tool that Matt used when communicating with other team members.
              Wrike was the project management solution that Matt and the rest of the team used. 
            </p>
            <a href="https://carolinas.aaa.com/membership/">
              <h3>Visit AAA</h3>
            </a>
            <div className="image main">
              <a href="https://camelcitygoods.com">
                <img src={pic04} alt="A glimpse of Camel City Goods site."/>
              </a>
            </div>
            <h3>
              CAMEL CITY GOODS
            </h3>
            <p>
              Camel City Goods is a retail brand that was born in Winston Salem, NC via the
              Airtype agency. Matt developed their Shopify website while working for the
              Airtype agency a few years ago using technologies such as Liquid, HTML, CSS,
              jQuery, Javascript, JSON, Gulp, Git.
            </p>
            <a href="https://camelcitygoods.com">
                <h3>Visit Camel City Goods</h3>
            </a>
            <div className="image main">
                <a href="https://ddn.com">
                  <img src={pic05} alt="A glimpse of the DDN website."/>
                </a>
            </div>
            <h3>
              DDN
            </h3>
            <p>
              DDN is America's largest Private Storage Provider. They are headquartered in
              Chatsworth, California. Matt worked on several templates and created new UI
              functionality, components for their Wordpress, Bootstrap Website.
            </p>
            <a href="https://ddn.com">
              <h3>Visit DDN</h3>
            </a>
            <div className="image main">
              <a href="https://razzafrazza.github.io/AIA/">
                  <img src={pic06} alt="A glimpse of the AIA website."/>
              </a>
            </div>
            <h3>AMERICAN INSTITUTE OF ARCHITECTS</h3>
            <p>
              Based in Washington, D.C. the AIA has been the leading professional membership
              association for licensed architects, emerging professionals, and allied partners
              since 1857. Matt created the American Institute of Architect's Single Page
              Application using HTML, CSS, jQuery, SVGS.
            </p>
            <a href="https://razzafrazza.github.io/AIA/">
              <h3>Visit AIA</h3>
            </a>
            {close}
          </article>
          <article
            id="about"
            className={`${this.props.article === 'about'
            ? 'active'
            : ''} ${this.props.articleTimeout
                ? 'timeout'
                : ''}`}
            style={{
            display: 'none'
          }}>
            <h2 className="major">About</h2>
            <span
              className="image main"
              style={{
              textAlign: 'center'
            }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '53%',
                  padding: '8px',
                  borderRadius: '100%'
                }}
                src={pic01}
                alt="Portrait Shot of Matt."/>
            </span>
            <h3>THE BEGINNING</h3>
            <p>
              Matt developed his first website in middle school after his favorite online games at
              the time were blocked by the school's IT Administrator. The website he created was a
              way for himself, classmates to circumvent this block. He took his first
              freelance assignment as a web developer while he was in highschool using HTML, CSS, Image Maps, Wordpress. 
              He became better at HTML, CSS partially due to the popularity of the social media website Myspace and the
              online game, social media site called Neopets.
            </p>
            <p>
              Both Myspace, Neopets allowed users to create custom profiles using HTML, CSS.
              Matt took on some freelance work building custom Myspace, Neopets layouts for other users. Matt
              also launched his first Wordpress blog that was a news aggregate for the affairs
              of Tiger Woods. Matt studied Internet Marketing during high school and thought
              this would be an easy site to rank on Google due to the large number of google searches for Tiger Woods. He was right.
            </p>
            <p>
              Since then Matt has spent a ton of time teaching himself as well as learning through experience:
              comp sci fundamentals, programming + much more. He has completed online courses through MITx, freeCodeCamp, Udemy 
              and more.  
            </p>
            <p>
              Matt has since went on to work as part of start-up, agency and corporate
              based teams working with B2B, B2C companies in several industries including:
            </p>
            <ul>
              <li>Health</li>
              <li>Marketing</li>
              <li>Finance</li>
              <li>Food</li>
              <li>Coaching</li>
              <li>Construction</li>
              <li>Tourism</li>
              <li>Humanitarian</li>
              <li>Beauty</li>
              <li>Fine Jewelry, Apparel</li>
            </ul>
            <p>Not only that, Matt has helped entrepreneurs define their personal brands through their
               websites, marketing strategies.
               Matt is currently selectively interested in new roles or projects.
            </p>
            <h3>INNOVATION, PASSION</h3>
            <p>
              Matt believes that if he doesn't learn something new on any given day, then that day
              is a failure. Matt believes in honesty, integrity in all aspects of life.</p>
            <p>
              Matt is great at managing multiple responsibilities, time management, naturally independant, 
              and constantly seeking new challenges.
            </p>
            <p>
              Matt stays on top of the latest trends in Engineering, Development, Design #reactamsterdam
              Matt is someone you can count on to put in the hard work required for success.
            </p>
            {close}
          </article>
          <article
            id="contact"
            className={`${this.props.article === 'contact'
            ? 'active'
            : ''} ${this.props.articleTimeout
                ? 'timeout'
                : ''}`}
            style={{
            display: 'none'
          }}>
            <h2 className="major">Contact</h2>
            <form id="contact" name="contact" method="post" netlify data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="contact" value="contact"/>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <button type="submit">Send Message</button>
                </li>
                <li>
                  <input type="reset" name="reset" value="Reset"/>
                </li>
              </ul>
            </form>
            <ul className="icons">
              <li>
                <a href="https://linkedin.com/in/mattliveshere" className="icon fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mattshaver.webcreator"
                  className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/mattShaverWebCreator" className="icon fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
            {close}
          </article>
      </div>
      )
    }
}
Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired
}
export default Main
