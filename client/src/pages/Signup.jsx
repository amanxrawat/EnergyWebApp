import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/SignUp.css";
import apiRequest from "../lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/auth/signup", {
        fullname: formData.fullname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const handleGoogleSignUpClick = () => {
    const googleSignUpDiv =
      document.getElementsByClassName("googleSignUpDiv")[0];
    if (googleSignUpDiv) {
      googleSignUpDiv.click(); // Simulate click on Google Sign-Up button
    }
  };

  const handleCredentialResponse = (response) => {
    // Handle Google Sign-In response here
  };

  useEffect(() => {
    const initializeGoogleSignUp = () => {
      window.google.accounts.id.initialize({
        client_id:
          "835859117984-tjdbra27sv18gbls6vgbi225vmi3bvpt.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      const googleSignUpDiv =
        document.getElementsByClassName("googleSignUpDiv")[0];
      if (googleSignUpDiv) {
        window.google.accounts.id.renderButton(googleSignUpDiv, {
          theme: "outline",
          size: "large",
        });
      } else {
        console.error("Google Sign-Up div not found");
      }
    };

    if (window.google) {
      initializeGoogleSignUp();
    } else {
      window.addEventListener("google-loaded", initializeGoogleSignUp);
    }

    return () => {
      window.removeEventListener("google-loaded", initializeGoogleSignUp);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center  p-6">
      <div className="container mx-auto flex flex-col lg:flex-row w-full max-w-6xl bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Left Section - Join Us */}
        <div className="flex-1 flex items-center justify-center lg:justify-start p-8 lg:p-12 bg-[#3b5998] text-white">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 drop-shadow-lg">
              Join Us Today!
            </h2>
            <p className="text-lg mb-8 text-gray-200 drop-shadow-sm">
              Create an account to get started.
            </p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white/30 backdrop-blur-lg m-10 p-8 rounded-lg shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Create your account
            </h2>

            {message && (
              <p className="text-red-500 mb-4 text-sm font-semibold">
                {message}
              </p>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                name="fullname"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 shadow-lg"
                placeholder="Enter Full Name"
                required
                value={formData.fullname}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="username"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 shadow-lg"
                placeholder="Enter Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />

              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 shadow-lg"
                placeholder="Enter Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300 shadow-lg"
                placeholder="Enter Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />

              <div className="text-center mt-4">
                <p className="text-gray-800 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={handleLoginClick}
                    className="text-blue-400 hover:text-white transition-all duration-200"
                  >
                    Login
                  </button>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>

            {/* Social Sign-Up */}
            {/* <div className="flex justify-center items-center mt-6">
              <p className="text-white text-sm">Or sign up with:</p>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/512120/google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/303153/facebook-3-logo.svg" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/303206/twitter-3-logo.svg" alt="Twitter" className="w-6 h-6" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
