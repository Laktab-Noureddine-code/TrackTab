import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "@/config";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserData } from "@/redux/slices/authSlice";
import AuthLeftSide from "./AuthLeftSide";
axios.defaults.withCredentials = true;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dispatch = useDispatch();
  const backendUrl = config.backendUrl;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/register`,
        formData
      );
      console.log("Registration response:", data);
      if (data.success) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUserData(data.user));
        navigate("/");
        toast.success("Registration successful!");
      } else {
        toast.error(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AuthLeftSide />

      {/* Right side - Register form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", color: "#1f2937", mb: 1 }}
            >
              Create Account
            </Typography>
            <Typography variant="body1" sx={{ color: "#6b7280" }}>
              Get started with your free account today.
            </Typography>
          </div>

          <Box sx={{ mb: 3 }}>
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User className="text-gray-400 w-5 h-5" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail className="text-gray-400 w-5 h-5" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className="text-gray-400 w-5 h-5" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "#9ca3af" }}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r bg-sidebar hover:bg-sidebar/90 text-white py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 font-medium flex items-center justify-center group"
          >
            Create Account
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#374151",
              mt: 2,
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 hover:text-teal-500 font-bold"
            >
              Log in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;
