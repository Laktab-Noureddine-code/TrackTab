import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AddCard from "./cardActions/AddCard.jsx";
import axios from "axios";
import { config } from "@/config.js";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "@/redux/slices/cardsSlice.js";

export function CardActions() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const handleAddCard = async (formData) => {
    axios.defaults.withCredentials = true;
    const backendUrl = config.backendUrl;

    try {
      // Here you would typically make an API call to save the card
      // await api.addCard(formData);
      if (cards.find((c) => c.name === formData.name)) {
        alert("name exists");
      } else {
        const { data } = await axios.post(backendUrl + "/api/card/add", {
          name: formData.name,
          balance: formData.balance,
          type: formData.type,
          currency: formData.currency,
          design: formData.design,
        });
        if (data.success) {
          dispatch(addCard(data.card));
          setIsAddOpen(false);
        } else {
          console.log("error");
        }
      }
      // Close the dialog
    } catch (error) {
      console.error("Error adding card:", error);
      alert("Failed to add card. Please try again.");
    }
  };

  const handleOpenDialog = () => {
    setIsAddOpen(true);
  };

  const handleCloseDialog = () => {
    setIsAddOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleOpenDialog}
          >
            ➕ Add Card
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log("Update Card")}
          >
            ✏️ Update
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log("Delete Card")}
          >
            🗑️ Delete
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log("Download Info")}
          >
            ⬇️ Download
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddCard
        open={isAddOpen}
        onClose={handleCloseDialog}
        onSubmit={handleAddCard}
      />
    </>
  );
}
