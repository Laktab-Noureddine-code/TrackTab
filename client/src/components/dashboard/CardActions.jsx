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

export function CardActions() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleAddCard = async()=>{
    
  }
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
            onClick={() => setIsAddOpen(true)}
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
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddCard}
      />
    </>
  );
}
