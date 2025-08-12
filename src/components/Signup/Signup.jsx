import React, { useState } from "react";
import { motion } from "framer-motion";
import googleLogo from "../../assets/google-logo.png";
import githubLogo from "../../assets/github-logo.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return !/\d/.test(name);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 8;
    
    if (!hasUpperCase) return "Password must contain at least one uppercase letter";
    if (!hasLowerCase) return "Password must contain at least one lowercase letter";
    if (!hasMinLength) return "Password must be at least 8 characters long";
    
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors as user types
    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    // Validate name (no digits)
    if (!validateName(formData.name)) {
      errors.name = "Name should not contain numbers";
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate password
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      errors.password = passwordError;
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
    setError("");
    setMessage("");
  
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        if (data.error === "Email already registered") {
          throw new Error("Email already registered. Please use a different email.");
        } else {
          throw new Error(data.error || "Signup failed");
        }
      }
  
      setMessage("Signup successful! Redirecting...");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      
      setTimeout(() => {
        window.location.href = "/login"; // Redirect to login page
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return "";
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    if (strength < 2) return "Weak";
    if (strength < 4) return "Medium";
    return "Strong";
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case "Weak": return "text-red-400";
      case "Medium": return "text-yellow-300";
      case "Strong": return "text-green-400";
      default: return "";
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white px-4 py-8 sm:px-6 md:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.8 + 0.2
              }}
              animate={{ 
                x: [null, Math.random() * window.innerWidth], 
                y: [null, Math.random() * window.innerHeight] 
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-black/20 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10"
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Create Account</h1>
          <p className="text-sm sm:text-base text-white/60 mt-2">Join us and start your journey</p>
        </motion.div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 sm:p-3 mb-4 sm:mb-6 rounded-lg bg-green-500/20 border border-green-500/40"
          >
            <p className="text-green-300 text-xs sm:text-sm">{message}</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 sm:p-3 mb-4 sm:mb-6 rounded-lg bg-red-500/20 border border-red-500/40"
          >
            <p className="text-red-300 text-xs sm:text-sm">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {[
            { 
              label: "Full Name", 
              name: "name", 
              type: "text", 
              placeholder: "John Doe", 
              error: validationErrors.name 
            },
            { 
              label: "Email Address", 
              name: "email", 
              type: "email", 
              placeholder: "name@example.com", 
              error: validationErrors.email 
            },
            { 
              label: "Password", 
              name: "password", 
              type: "password", 
              placeholder: "••••••••", 
              error: validationErrors.password 
            },
            { 
              label: "Confirm Password", 
              name: "confirmPassword", 
              type: "password", 
              placeholder: "••••••••", 
              error: validationErrors.confirmPassword 
            },
          ].map((input, index) => (
            <motion.div 
              className="space-y-1"
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <label htmlFor={input.name} className="text-xs sm:text-sm font-medium text-white/70 block text-left">{input.label}</label>
              <div className="relative">
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  className="w-full p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                  required
                />
                {input.error && (
                  <p className="mt-1 text-xs text-red-300">{input.error}</p>
                )}
                {input.name === "password" && formData.password && (
                  <div className="mt-1 flex items-center">
                    <span className="text-xs mr-2">Strength:</span>
                    <span className={`text-xs ${getPasswordStrengthColor(getPasswordStrength(formData.password))}`}>
                      {getPasswordStrength(formData.password)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full p-3 sm:p-4 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-xs sm:text-sm">Creating your account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </motion.button>
        </form>

        <div className="my-4 sm:my-6 flex items-center">
          <div className="flex-grow h-px bg-white/10"></div>
          <span className="px-3 text-xs text-white/40 font-medium">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-white/10"></div>
        </div>

        <div className="flex space-x-2 sm:space-x-4">
          <motion.button
            className="flex items-center justify-center flex-1 p-2 sm:p-3 bg-white/5 border border-white/10 text-white rounded-lg transition-all hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <img src={googleLogo} alt="Google Logo" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">Google</span>
          </motion.button>
          <motion.button
            className="flex items-center justify-center flex-1 p-2 sm:p-3 bg-white/5 border border-white/10 text-white rounded-lg transition-all hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <img src={githubLogo} alt="GitHub Logo" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">GitHub</span>
          </motion.button>
        </div>

        <motion.p 
          className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Already have an account? <a href="/login" className="text-blue-300 font-medium hover:underline">Sign in</a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;