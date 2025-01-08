import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginComp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://staging.kplr.in/Onboarding/UserLogin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "User logged in" && data.SessionToken) {
        localStorage.setItem("sessionToken", data.SessionToken);
        localStorage.setItem("user", formData.email);
        setSuccess("Logged In successfully!");
        toast.success("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else if (data.status === "UserCredential Incorrect or Does not exist") {
        setError("Invalid username or password");
        toast.error("Invalid username or password.");
      } else {
        setError("Login failed");
        toast.error("Login failed.");
      }
      setIsLoading(false);
    } catch (err) {
      setError("Login failed");
      toast.error("Login failed.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("sessionToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          className="input-field"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          {isLoading ? "Loading..." : "Log In"}
        </button>
        <p>
          Don't have an account?{" "}
          <a className="log-in-btn" href="/signup">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
