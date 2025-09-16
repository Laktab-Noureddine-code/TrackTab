import React, { useState } from "react";
import { 
  TextField, 
  InputAdornment, 
  IconButton, 
  Checkbox, 
  FormControlLabel,
  Typography,
  Box
} from "@mui/material";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserData } from "@/redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { config } from "@/config";
import AuthLeftSide from "./AuthLeftSide";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backendUrl = config.backendUrl;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let newErrors = { email: ""};
    let isValid = true;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/login`,
        { ...formData, rememberMe }
      );

      if (data.success && data.user) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUserData(data.user));
        navigate("/");
        toast.success("Logged in successfully");
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Decorative */}
      <AuthLeftSide />

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", color: "#1f2937", mb: 1 }}
            >
              Log in
            </Typography>
            <Typography variant="body1" sx={{ color: "#6b7280" }}>
              Welcome back! Please enter your details.
            </Typography>
          </div>

          <Box sx={{ mb: 3 }}>
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

          {/* Remember + forgot */}
          <div className="flex items-center justify-between mb-6">
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  sx={{
                    color: "#14b8a6",
                    "&.Mui-checked": {
                      color: "#14b8a6",
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  Keep me logged in
                </Typography>
              }
            />
            <a
              href="#"
              className="text-sm text-teal-600 hover:text-teal-500 font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r bg-sidebar cursor-pointer text-white py-3 px-4 rounded-lg focus:ring-2 hover:bg-sidebar/90 transition-all duration-200 font-medium flex items-center justify-center group"
          >
            Sign in
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: "center", 
              color: "#374151",
              mt: 2 
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-teal-600 hover:text-teal-500 font-bold"
            >
              Register
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
