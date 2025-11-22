import React, { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import AddCardLeft from "./AddCardLeft";
import AddCardRight from "./AddCardRight";
import { X } from "lucide-react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCard({ open, onClose, onSubmit }) {

  const [form, setForm] = useState({
    name: "",
    balance: "",
    type: "Credit",
    currency: "USD",
    design: "blue",
  });

  const handleFormSubmit = (formData) => {
    // Validate form data
    if (!formData.name.trim()) {
      alert("Please enter a card name");
      return;
    }

    if (!formData.balance || parseFloat(formData.balance) < 0) {
      alert("Please enter a valid balance");
      return;
    }

    // Call the parent's submit handler
    onSubmit(formData);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      balance: "",
      type: "Credit",
      currency: "USD",
      design: "blue",
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", backgroundColor: "#0d1f2b" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <X />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <p className="text-lg">Add New Card</p>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="flex flex-col lg:flex-row h-full bg-gray-50">
        <AddCardLeft form={form} setForm={setForm}  />
        <AddCardRight
          form={form}
          setForm={setForm}
          onSubmit={handleFormSubmit}
          onClose={handleClose}
          
        />
      </div>
    </Dialog>
  );
}
