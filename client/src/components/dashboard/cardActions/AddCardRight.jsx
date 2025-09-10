import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import React from "react";

function AddCardRight({ form, onClose, setForm, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };
  return (
    <div className="flex-1  bg-gray-50 p-8 flex flex-col justify-between">
      <DialogHeader>
        <DialogTitle className=" text-2xl">Add New Card</DialogTitle>
        <DialogDescription className="text-gray-600">
          Fill in the details to add a new card.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6 flex-1">
        <div>
          <label className="block mb-1">Name</label>
          <Input
            className="bg-white text-black"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Balance</label>
          <Input
            className="bg-white text-black"
            name="balance"
            type="number"
            value={form.balance}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Type</label>
          <Input
            className="bg-white text-black"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Currency</label>
          <Select
            onValueChange={(val) => handleSelect("currency", val)}
            value={form.currency}
          >
            <SelectTrigger className="bg-white text-black">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="MAD">MAD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="pt-6 flex gap-4">
          <Button
            type="submit"
            className="bg-sidebar text-white rounded-xl px-6 py-2 cursor-pointer"
          >
            Add Card
          </Button>
          <Button
            onClick={onClose}
            className="text-white bg-gray-500 cursor-pointer rounded-xl px-6 py-2"
          >
            Cancel
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
}

export default AddCardRight;
