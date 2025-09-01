import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To redirect after login
import houseImage from '../assets/house_img.jpg';
import logo from '../assets/logo_rentpal.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    console.log('Logging in with:', { email, password });
    // Redirect to the dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-page-container">
        <main className="login-container">
            <div className="login-form-section">
                <div className="form-wrapper">
                    <img src={logo} alt="RentPal Logo" className="logo" />
                    <h1 className="welcome-title">Welcome to RentPal</h1>
                    <p className="welcome-subtitle">Login to your account</p>
                    <div className="tabs">
                        <button className="tab-button active">Login</button>
                        <button className="tab-button">Sign Up</button>
                    </div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
            <div className="login-image-section">
                <img src={houseImage} alt="Modern living room" />
            </div>
        </main>
    </div>
  );
}

export default LoginPage;