import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correctUsername = "Neeraj";
  const correctPassword = "yourpassword"; // Change this to your actual password

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      navigate("/admin");
    } else {
      alert("Invalid credentials!"); 
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-10 py-10">
      <h2 className="text-4xl font-bold text-secondary">
        This page is only for Neeraj{" "}
      </h2>
      <div className="flex gap-4 justify-center items-center">
        <p className="text-2xl font-semibold text-primary">
          You can return to the portfolio by clicking here
        </p>
        <button className="btn btn-outline btn-accent" onClick={() => navigate("/")}>
          Back to portfolio
        </button>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl font-bold ">For Admin only</h2>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={handleLogin} className="btn btn-outline btn-secondary w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
