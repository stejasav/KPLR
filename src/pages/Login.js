import LoginComp from "../components/LoginComp";
import Navbar from "../components/Navbar";

export default function Login(){
  return(
    <div className="login-page">
      <Navbar />
      <LoginComp />
    </div>
  )
}