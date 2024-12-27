import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the username and password match "admin" and "admin"
    if (formData.email === "admin" && formData.password === "admin") {
      // If credentials are correct, proceed to the dashboard
      console.log("Logged in:", formData);
      navigate("/dashboard");
      // Redirect to dashboard or perform other logic here
    } else {
      // If credentials are incorrect, display an error message
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login w-full h-screen bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl mb-8 text-center font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Show the error message if the credentials are incorrect */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="p-3 w-full rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
