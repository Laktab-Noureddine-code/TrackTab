import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Figma",
    amount: "$199",
    date: "June 30, 2024",
    time: "10:24 AM",
    status: "Pending",
    statusColor: "warning",
    icon: "🎨",
    iconBg: "bg-purple-100",
  },
  {
    id: 2,
    name: "Dribbble",
    amount: "$20",
    date: "June 30, 2024",
    time: "09:15 AM",
    status: "Success",
    statusColor: "success",
    icon: "🏀",
    iconBg: "bg-pink-100",
  },
  {
    id: 3,
    name: "UpLabs",
    amount: "$49",
    date: "June 30, 2024",
    time: "08:45 AM",
    status: "Pending",
    statusColor: "warning",
    icon: "📱",
    iconBg: "bg-blue-100",
  },
  {
    id: 4,
    name: "Paypal Payment",
    amount: "-$60",
    date: "June 29, 2024",
    time: "05:30 PM",
    status: "Success",
    statusColor: "success",
    icon: "💳",
    iconBg: "bg-green-100",
  },
  {
    id: 5,
    name: "Youtube Premium",
    amount: "+$600",
    date: "June 28, 2024",
    time: "02:10 PM",
    status: "Success",
    statusColor: "success",
    icon: "▶️",
    iconBg: "bg-red-100",
  },
  {
    id: 6,
    name: "Netflix Premium",
    amount: "-$20",
    date: "June 28, 2024",
    time: "11:20 AM",
    status: "Success",
    statusColor: "success",
    icon: "🎬",
    iconBg: "bg-red-100",
  },
  {
    id: 7,
    name: "Spotify Premium",
    amount: "$60",
    date: "June 27, 2024",
    time: "09:45 AM",
    status: "Canceled",
    statusColor: "destructive",
    icon: "🎵",
    iconBg: "bg-orange-100",
  },
];

const TransactionsList = () => {
  return (
    <Card className="col-span-1 md:col-span-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Latest Transactions</CardTitle>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background">
              <option>June 2024</option>
            </select>
            <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background">
              <option>All Affiliate</option>
            </select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Recipient Name</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium">Date & Time</th>
                <th className="pb-3 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${transaction.iconBg} flex items-center justify-center text-lg`}
                      >
                        {transaction.icon}
                      </div>
                      <span className="font-medium">{transaction.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-semibold">{transaction.amount}</td>
                  <td className="py-4 text-sm text-muted-foreground">
                    <div>{transaction.date}</div>
                    <div>{transaction.time}</div>
                  </td>
                  <td className="py-4 text-right">
                    <Badge
                      variant="secondary"
                      className={
                        transaction.statusColor === "success"
                          ? "bg-success/10 text-success hover:bg-success/20"
                          : transaction.statusColor === "warning"
                          ? "bg-warning/10 text-warning hover:bg-warning/20"
                          : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsList;
