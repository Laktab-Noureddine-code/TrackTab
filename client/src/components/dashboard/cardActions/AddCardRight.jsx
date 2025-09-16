import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import { currencies } from "@/data/currencies";

function AddCardRight({ form, setForm, onSubmit, onClose }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (name) => (event) => {
    setForm((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // Basic validation
    if (!form.name.trim()) {
      toast.error("Please enter a card name");
      return;
    }

    if (
      !form.balance ||
      isNaN(parseFloat(form.balance)) ||
      parseFloat(form.balance) < 0
    ) {
      toast.error("Please enter a valid balance (must be a positive number)");
      return;
    }

    // Format the form data
    const formattedData = {
      ...form,
      name: form.name.trim(),
      balance: parseFloat(form.balance),
    };

    // Call the submit handler
    onSubmit(formattedData);
  };

  const cardTypes = [
    { value: "Credit", label: "Credit Card" },
    { value: "Debit", label: "Debit Card" },
    { value: "Prepaid", label: "Prepaid Card" },
    { value: "Business", label: "Business Card" },
  ];

  return (
    <div className="flex-1 bg-white p-8 flex flex-col justify-between">
      <Box>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1f2937" }}
        >
          Add New Card
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280", mb: 4 }}>
          Fill in the details below to add a new payment card to your account.
        </Typography>

        <Paper elevation={0} sx={{ p: 0 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Card Name */}
              <Box>
                <TextField
                  fullWidth
                  label="Card Name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Personal Card, Business Card"
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7280", mt: 0.5, display: "block" }}
                >
                  Choose a name to easily identify this card
                </Typography>
              </Box>

              {/* Initial Balance */}
              <Box>
                <TextField
                  fullWidth
                  label="Initial Balance"
                  name="balance"
                  type="number"
                  inputProps={{
                    step: "0.01",
                    min: "0",
                  }}
                  value={form.balance}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7280", mt: 0.5, display: "block" }}
                >
                  Enter the current balance or credit limit
                </Typography>
              </Box>

              {/* Card Type */}
              <FormControl fullWidth variant="outlined">
                <InputLabel id="card-type-label">Card Type</InputLabel>
                <Select
                  labelId="card-type-label"
                  id="card-type-select"
                  value={form.type}
                  label="Card Type"
                  onChange={handleSelectChange("type")}
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  {cardTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Currency */}
              <FormControl fullWidth variant="outlined">
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                  labelId="currency-label"
                  id="currency-select"
                  value={form.currency}
                  label="Currency"
                  onChange={handleSelectChange("currency")}
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  {currencies.map((currency) => (
                    <MenuItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </form>
        </Paper>
      </Box>

      {/* Footer - Note: The main action buttons are in the AppBar */}
      <Box sx={{ pt: 3, borderTop: "1px solid #e5e7eb", mt: 4 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="outlined"
            onClick={onClose}
            fullWidth
            sx={{
              color: "#6b7280",
              borderColor: "#d1d5db",
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{
              backgroundColor: "#1d4ed8",
              "&:hover": {
                backgroundColor: "#0d1f2b",
              },
            }}
          >
            Add Card
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default AddCardRight;
