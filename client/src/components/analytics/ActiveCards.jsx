import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export const ActiveCards = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Active Cards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative bg-gradient-expense p-4 rounded-lg ">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs opacity-80">Balance</p>
              <p className="text-lg font-bold">$8,764.32</p>
            </div>
            <CreditCard className="h-6 w-6" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-80">Card Number</p>
              <p className="font-mono">•••• •••• •••• 4582</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Expires</p>
              <p className="text-sm">12/27</p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-income p-4 rounded-lg text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs opacity-80">Balance</p>
              <p className="text-lg font-bold">$2,147.89</p>
            </div>
            <CreditCard className="h-6 w-6" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-80">Card Number</p>
              <p className="font-mono">•••• •••• •••• 7293</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Expires</p>
              <p className="text-sm">08/28</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};