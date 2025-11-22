import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShoppingCart, Car, Coffee, Zap, Music } from "lucide-react";

const transactions = [
  {
    id: 1,
    icon: ShoppingCart,
    description: "Amazon Purchase",
    category: "Shopping",
    date: "Dec 15",
    amount: -67.50,
  },
  {
    id: 2,
    icon: Car,
    description: "Uber Ride",
    category: "Transportation",
    date: "Dec 14",
    amount: -24.80,
  },
  {
    id: 3,
    icon: Coffee,
    description: "Starbucks",
    category: "Food & Dining",
    date: "Dec 14",
    amount: -12.45,
  },
  {
    id: 4,
    icon: Zap,
    description: "Electricity Bill",
    category: "Bills",
    date: "Dec 13",
    amount: -156.78,
  },
  {
    id: 5,
    icon: Music,
    description: "Spotify Premium",
    category: "Entertainment",
    date: "Dec 12",
    amount: -9.99,
  },
];

export const TransactionsTable = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => {
              const IconComponent = transaction.icon;
              return (
                <TableRow key={transaction.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell className="text-muted-foreground">{transaction.category}</TableCell>
                  <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                  <TableCell className="text-right font-mono">
                    <span className={transaction.amount < 0 ? "text-red-600" : "text-green-600"}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};