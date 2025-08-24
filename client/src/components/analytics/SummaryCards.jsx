import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

const miniChartData = [
  {
    id: "trend",
    data: [
      { x: "1", y: 45 },
      { x: "2", y: 52 },
      { x: "3", y: 48 },
      { x: "4", y: 61 },
      { x: "5", y: 55 },
      { x: "6", y: 67 },
      { x: "7", y: 73 }
    ]
  }
];

const MiniLineChart = ({ color }) => (
  <div className="h-16 w-24">
    <ResponsiveLine
      data={miniChartData}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      colors={[color]}
      lineWidth={2}
      isInteractive={false}
    />
  </div>
);

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">$47,324.68</p>
            <p className="text-xs text-green-600">+12.5% from last month</p>
          </div>
          <MiniLineChart color="hsl(var(--income-start))" />
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">$12,456.32</p>
            <p className="text-xs text-red-600">+8.2% from last month</p>
          </div>
          <MiniLineChart color="hsl(var(--expense-start))" />
        </CardContent>
      </Card>
    </div>
  );
};