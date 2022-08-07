import React from 'react'
import Nav from './Nav'
import './css/home.css'
import Footer from './Footer'
import MediaQuery from 'react-responsive'
import Global from './Globalstyles';
const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      border: '1px solid black',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'

    }}>
      <Global image="images/bg2.png"></Global>
      <div className="container text-center  position-relative">
        <p className="intro-line">Hi all, I am</p>
        <p className=" btn-shine">Yash Nerkar</p>
        <div className='gitmain'>
          <div className="git">></div>
          <div className="git"><span>Full-Stack-Developer</span></div>
        </div>


        <div className="container mt-3">
          <p className="comment">//Check out my github profile</p>
          <p><span className="const">const </span><span className="github">githubLink</span> <span className="text-light"> = </span><a href="https://github.com/yash-png"><span className="github-link ">"https://github.com/yash-png"</span></a></p>
        </div>
      </div>
      <MediaQuery minWidth={993}>
        <Footer />
      </MediaQuery>
    </div>
  )
}

export default Home