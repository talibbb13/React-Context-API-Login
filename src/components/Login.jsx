import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser([username, password])
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Username"
      />
      <input
        className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
