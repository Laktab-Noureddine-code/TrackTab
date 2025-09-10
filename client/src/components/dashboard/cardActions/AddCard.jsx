import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import AddCardLeft from "./AddCardLeft";
import AddCardRight from "./AddCardRight";

export default function AddCard({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    balance: "",
    type: "USD",
    currency: "USD",
    design: "Gold",
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[90vw] max-h-full lg:min-w-[80vw] lg:min-h-[70vh] max-w-6xl p-0 ">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left side - Card Preview + Slider */}
          <AddCardLeft form={form} />

          {/* Right side - Form */}
          <AddCardRight
            form={form}
            onClose={onclose}
            setForm={setForm}
            onSubmit={onSubmit}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
