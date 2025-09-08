import { config } from "@/config";
import { setIsLoggedIn, setLoadingUser, setUserData } from "@/redux/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuth = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const { backendUrl } = config;

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(setLoadingUser(true))
      try {
        const { data } = await axios.get(`${backendUrl}/api/auth/me`);
        if (data.success && data.user) {
          dispatch(setUserData(data.user));
          dispatch(setIsLoggedIn(true));
          dispatch(setLoadingUser(false))
        } else {
          dispatch(setIsLoggedIn(false));
        }
      } catch (error) {
        console.log("Auth check failed:", error.response?.data?.message || error.message);
        // User is not authenticated or token is invalid
        dispatch(setIsLoggedIn(false));
        dispatch(setUserData(null));
      }
    };
    
    fetchUserData();
  }, [dispatch, backendUrl]);
};

export default useAuth;