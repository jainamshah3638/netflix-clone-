import React, { useEffect, useState } from 'react'
import '../css/nav.css'

function Nav() {
 const [show,setShow] = useState(false)

useEffect( () => {
    window.addEventListener('scroll' , () => {
        if(window.scrollY > 100) {
            setShow(true)
        } else setShow(false)
    });
    return () => {
        window.removeEventListener('scroll')
    }
},[])

    return (
        <div className={`nav ${ show && 'nav-black'}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"  className="nav-logo" alt="netflix" /> 
     <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' className="nav-avatar"></img>
        </div>
    )
}

export default Nav
