import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { month: "Jan", Food: 1200, Transport: 800, Shopping: 600, Bills: 1500 },
  { month: "Feb", Food: 1400, Transport: 750, Shopping: 800, Bills: 1600 },
  { month: "Mar", Food: 1100, Transport: 900, Shopping: 700, Bills: 1450 },
  { month: "Apr", Food: 1300, Transport: 850, Shopping: 900, Bills: 1550 },
  { month: "May", Food: 1250, Transport: 800, Shopping: 650, Bills: 1480 },
  { month: "Jun", Food: 1350, Transport: 920, Shopping: 750, Bills: 1620 }
];

export const DissectionChart = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Expense Dissection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveBar
            data={data}
            keys={["Food", "Transport", "Shopping", "Bills"]}
            indexBy="month"
            margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
            padding={0.2}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={["hsl(var(--expense-start))", "hsl(var(--expense-end))", "hsl(var(--income-start))", "hsl(var(--income-end))"]}
            borderRadius={4}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: (value) => `$${value}`
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            animate={true}
            motionConfig="gentle"
          />
        </div>
      </CardContent>
    </Card>
  );
};