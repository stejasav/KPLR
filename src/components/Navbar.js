import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export default function Navbar(){
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('sessionToken');

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleLogOut = ()=>{
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('user');
    toast.success("Logged Out Sucessfully!");
    navigate('/');
  }

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
 
  return(
    <nav>
      <a href="/"><img src="./img/logo1.png" alt="logo" className="logo"/></a>

      <div className={`sidebar ${isSidebarVisible ? "show-sidebar" : ""}`}>
        <p className="close-x-p" onClick={toggleSidebar}><img src="./img/close-x.png" alt="close button" className="close-x"/></p>
        <p><a href="/">Home</a></p>
        <p><a href="/services">Services</a></p>
        <p><a href="/dashboard">Dashboard</a></p>
        <p><a href="/contactus">ContactUs</a></p>
        <p>{isLoggedIn ? (
            <a  href="/" onClick={(e) => { e.preventDefault(); handleLogOut();}}>Sign Out </a>
          ) : (
            <a href="/login" onClick={toggleSidebar}>Login</a>
          )}</p>
      </div>

      <div className="menu">
        <p><a href="/">Home</a></p>
        <p><a href="/services">Services</a></p>
        <p><a href="/dashboard">Dashboard</a></p>
        <p><a href="/contactus">ContactUs</a></p>
      </div>
      
      <div className="register">
        {isLoggedIn ? (
          <button onClick={handleLogOut} className="signup-button">Sign out</button>) : (
            <>
              <a href="/login"><button className="login-button">Login</button></a>
              <a href="/signup"><button className="signup-button">SignUp</button></a>
            </>
          ) }
      </div>
      
      <img src="./img/ham-icon.png" alt="hamburger" className="ham-icon" onClick={toggleSidebar}/>
    </nav>
  )
}