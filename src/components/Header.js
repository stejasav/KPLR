import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <button className="finance-control-btn">
        Finance control Platform
      </button>
      <h1>
        Expert Guidance to Optimize Your
        <br></br>
        Financial Growth and Security
      </h1>
      <p className="gap">
        Our expert guidance will optimize your financial portfolio and lay the
        foundation
      </p>
      <p>for a secure and prosperous future</p>
      <div className="start">
        <button
          className="get-started-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Started
        </button>
        <button
          className="try-demo-btn "
          onClick={() => {
            navigate("/login");
          }}
        >
          Try Demo
        </button>
      </div>
      <img
        src="./img/animation1.gif"
        alt="animated gif"
        className="animated-gif"
      />
    </header>
  );
}
