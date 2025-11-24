import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "January", income: 800, expense: 650 },
  { month: "February", income: 600, expense: 700 },
  { month: "March", income: 900, expense: 750 },
  { month: "April", income: 850, expense: 800 },
  { month: "May", income: 950, expense: 700 },
  { month: "June", income: 1000, expense: 850 },
];

const BalanceChart = () => {
  return (
    <Card className="col-span-1 md:col-span-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Balance Analytics</CardTitle>
          <div className="flex items-center gap-4">
            <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background">
              <option>January - June</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-muted-foreground">Expense</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`$${value}`, ""]}
            />
            <Legend />
            <Bar
              dataKey="income"
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
              name="Income"
            />
            <Bar
              dataKey="expense"
              fill="hsl(var(--secondary))"
              radius={[8, 8, 0, 0]}
              name="Expense"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BalanceChart;
