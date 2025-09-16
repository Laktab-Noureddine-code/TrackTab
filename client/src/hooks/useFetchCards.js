import { config } from "@/config";
import { setCards } from "@/redux/slices/cardsSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function useFetchCards() {
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;
  const backendUrl = config.backendUrl;
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(backendUrl + "/api/card/all");
        if (data.success) {
          dispatch(setCards(data.userCards));
        } else {
          toast.error("cards can't fetch");
        }
      } catch (err) {
        toast.error(err);
      }
    };
    fetchCards();
  }, [dispatch, backendUrl ]);
}

export default useFetchCards;
