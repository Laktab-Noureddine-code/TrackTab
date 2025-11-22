import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Income",
    color: "hsl(var(--income-start))",
    data: [
      { x: "Mon", y: 320 },
      { x: "Tue", y: 280 },
      { x: "Wed", y: 450 },
      { x: "Thu", y: 380 },
      { x: "Fri", y: 520 },
      { x: "Sat", y: 290 },
      { x: "Sun", y: 180 },
    ],
  },
  {
    id: "Expenses",
    color: "hsl(var(--expense-start))",
    data: [
      { x: "Mon", y: 180 },
      { x: "Tue", y: 220 },
      { x: "Wed", y: 340 },
      { x: "Thu", y: 290 },
      { x: "Fri", y: 420 },
      { x: "Sat", y: 380 },
      { x: "Sun", y: 150 },
    ],
  },
];

export const IncomeVsExpenses = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Income vs Expenses
        </CardTitle>
        <p className="text-sm text-muted-foreground">Last 7 days</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="monotoneX"
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
              format: (value) => `$${value}`,
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionConfig="gentle"
          />
        </div>
      </CardContent>
    </Card>
  );
};
