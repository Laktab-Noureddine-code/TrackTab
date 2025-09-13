import React, { useState } from "react";
import { 
  TextField, 
  InputAdornment, 
  IconButton,
  Typography,
  Box
} from "@mui/material";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "@/config";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/redux/slices/authSlice";
import AuthLeftSide from "./AuthLeftSide";
axios.defaults.withCredentials = true;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { backendUrl } = config;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (formData.name && formData.email && formData.password) {
        const { data } = await axios.post(
          `${backendUrl}/api/auth/register`,
          formData
        );
        if (data.success) {
          dispatch(setIsLoggedIn(true));
          navigate("/");
          toast.success("Registration successful!");
        } else {
          toast.error(data.message || "Registration failed. Please try again.");
        }
      } else {
        toast.error("Please fill all the fields.");
      }
    } catch (err) {
      console.error("Registration error:", err);
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
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover fieldset": {
                    borderColor: "#9ca3af",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#14b8a6",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280",
                  "&.Mui-focused": {
                    color: "#14b8a6",
                  },
                },
              }}
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
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover fieldset": {
                    borderColor: "#9ca3af",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#14b8a6",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280",
                  "&.Mui-focused": {
                    color: "#14b8a6",
                  },
                },
              }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover fieldset": {
                    borderColor: "#9ca3af",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#14b8a6",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280",
                  "&.Mui-focused": {
                    color: "#14b8a6",
                  },
                },
              }}
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
              mt: 2 
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