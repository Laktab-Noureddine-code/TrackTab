import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinancialCardProps {
  title: string;
  amount: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  iconBg?: string;
}

const FinancialCard = ({
  title,
  amount,
  change,
  changeType,
  icon: Icon,
  iconBg = "bg-muted",
}: FinancialCardProps) => {
  const isPositive = changeType === "positive";

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", iconBg)}>
            <Icon className="h-5 w-5" />
          </div>
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{amount}</p>
          <Badge
            variant="secondary"
            className={cn(
              "text-xs",
              isPositive
                ? "bg-success/10 text-success hover:bg-success/20"
                : "bg-destructive/10 text-destructive hover:bg-destructive/20"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {change} vs last month
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialCard;
