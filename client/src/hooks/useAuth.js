import { config } from "@/config";
import {
  setIsLoggedIn,
  setLoadingUser,
  setUserData,
} from "@/redux/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useAuth = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const { backendUrl } = config;

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(setLoadingUser(true));
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/me`);
        if (data.success && data.user) {
          dispatch(setUserData(data.user));
          dispatch(setIsLoggedIn(true));
          dispatch(setLoadingUser(false));
        } else {
          dispatch(setIsLoggedIn(false));
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message 
        );
        // User is not authenticated or token is invalid
        dispatch(setIsLoggedIn(false));
        dispatch(setUserData(null));
      }
    };

    fetchUserData();
  }, [dispatch, backendUrl]);
};

export default useAuth;
