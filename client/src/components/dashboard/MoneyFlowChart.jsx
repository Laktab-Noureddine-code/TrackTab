import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "expenses",
    label: "expenses",
    value: 20,
    color: "#da5856",
  },
  {
    id: "income",
    label: "income",
    value: 136,
    color: "#0d1f2b",
  },
];

export function MoneyFlowChart() {
  return (
    <div className="">
      <Card noBorder={true} className="bg-white">
        <div className="flex justify-between ">
          <h3 className="mb-4 text-xl text-gray-700 font-semibold">
            Money flow
          </h3>
        </div>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Select defaultValue="aug">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aug">Aug</SelectItem>
                <SelectItem value="jul">Jul</SelectItem>
                <SelectItem value="jun">Jun</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <div className="h-80  w-full">
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            colors={{ datum: "data.color" }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
