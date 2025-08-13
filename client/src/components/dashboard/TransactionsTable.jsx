import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hotel, Calendar, Coffee, Palette } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Rent an apartment",
    date: "Aug 18, 2021 at 5:16 PM",
    amount: -1200,
    status: "Paid",
    icon: Home,
  },
  {
    id: 2,
    name: "Hotel Hilton",
    date: "Aug 16, 2021 at 10:02 AM",
    amount: -1500,
    status: "Declined",
    icon: Hotel,
  },
  {
    id: 3,
    name: "Booking",
    date: "Aug 11, 2021 at 8:5 PM",
    amount: -1034,
    status: "Paid",
    icon: Calendar,
  },
  {
    id: 4,
    name: "Coffee point",
    date: "Aug 09, 2021 at 9:02 AM",
    amount: -3.48,
    status: "In progress",
    icon: Coffee,
  },
  {
    id: 5,
    name: "Rainbow Room",
    date: "Aug 07, 2021 at 1:25 PM",
    amount: -120.50,
    status: "Paid",
    icon: Palette,
  },
];

export function TransactionsTable() {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case "Declined":
        return <Badge className="bg-error text-error-foreground">{status}</Badge>;
      case "In progress":
        return <Badge className="bg-info text-info-foreground">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Last transactions</CardTitle>
        <Button variant="ghost" className="text-muted-foreground">
          View all
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name of transactions</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <transaction.icon className="h-5 w-5" />
                    </div>
                    {transaction.name}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                <TableCell className="text-right font-medium">
                  ${Math.abs(transaction.amount).toLocaleString()}
                </TableCell>
                <TableCell>{getStatusBadge(transaction.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}