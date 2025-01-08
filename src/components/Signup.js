import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    try {
      const response = await fetch('https://staging.kplr.in/Onboarding/CreateUserId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password
        })
      });
      
      const data = await response.json();
      
      if (data.status === 'User Generated') {
        setSuccess('Account created successfully!');
        toast.success("Account created successfully!");
        setTimeout(() => navigate('/login'), 1000);
      } else {
        setError('Registration failed');
        toast.error("Registration failed");
      }
      setIsLoading(false);
    } catch (err) {
      setError('Network error');
      toast.error("Signup failed.");
    }
  };

  return(
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}> 
        <h1>Signup</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input id="name" type="text" placeholder="Name" name="name" className="input-field" value={formData.name} onChange={handleChange} required/>
        
        <input id="email" type="email" placeholder="Email" name="email" className="input-field" value={formData.email} onChange={handleChange} required/>
        
        <input id="password" type="password" placeholder="Password" name="password" className="input-field" value={formData.password} onChange={handleChange} required />
        
        <button type="submit" className="submit-btn">{isLoading?"Loading...":"Sign Up"}</button>
        <p>Already have an account? <a className="log-in-btn" href="/login">Log In</a></p>
      </form>
    </div>
  )
}