import DashInfo from "../components/DashInfo";
import Navbar from "../components/Navbar";

export default function Dashboard(){
  const isLoggedIn = localStorage.getItem("sessionToken");
  return(
    <div className={`dashboard-page ${!isLoggedIn ? "no-scroll" : ""}`}>
      <Navbar />
      <DashInfo />
    </div>
  )
}