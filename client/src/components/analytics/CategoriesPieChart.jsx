import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "Food & Dining", value: 35, color: "hsl(var(--expense-start))" },
  { id: "Transportation", value: 20, color: "hsl(var(--expense-end))" },
  { id: "Shopping", value: 25, color: "hsl(var(--income-start))" },
  { id: "Bills & Utilities", value: 15, color: "hsl(var(--income-end))" },
  { id: "Entertainment", value: 5, color: "hsl(var(--accent))" }
];

export const CategoriesPieChart = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-68">
          <ResponsivePie
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            innerRadius={0.4}
            padAngle={2}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            colors={{ datum: "data.color" }}
            borderWidth={2}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            animate={true}
            motionConfig="gentle"
          />
        </div>
        
        
      </CardContent>
    </Card>
  );
};