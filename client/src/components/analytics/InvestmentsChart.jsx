import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { investment: "Stocks", value: 15420, growth: "+12.5%" },
  { investment: "Bonds", value: 8650, growth: "+4.2%" },
  { investment: "Crypto", value: 5230, growth: "+28.7%" },
  { investment: "Real Estate", value: 25000, growth: "+6.8%" },
  { investment: "ETFs", value: 12500, growth: "+9.3%" }
];

export const InvestmentsChart = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Investments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveBar
            data={data}
            keys={["value"]}
            indexBy="investment"
            margin={{ top: 20, right: 30, bottom: 80, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={["hsl(var(--income-start))"]}
            borderRadius={6}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: (value) => `$${(value / 1000).toFixed(0)}k`
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            animate={true}
            motionConfig="gentle"
          />
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {data.map((item) => (
            <div key={item.investment} className="text-center">
              <p className="text-xs font-medium">{item.investment}</p>
              <p className="text-xs text-green-600">{item.growth}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};