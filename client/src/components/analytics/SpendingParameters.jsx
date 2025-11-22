import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const parameters = [
  { label: "Food Budget", current: 1250, total: 1500, percentage: 83 },
  { label: "Transportation", current: 680, total: 800, percentage: 85 },
  { label: "Entertainment", current: 320, total: 500, percentage: 64 },
  { label: "Shopping", current: 750, total: 1000, percentage: 75 },
  { label: "Utilities", current: 420, total: 600, percentage: 70 }
];

const CircularProgress = ({ percentage, label, current, total }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="hsl(var(--expense-start))"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{percentage}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">${current}/${total}</p>
      </div>
    </div>
  );
};

export const SpendingParameters = () => {
  return (
    <Card className="bg-gradient-card shadow-analytics hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spending Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {parameters.map((param) => (
            <CircularProgress
              key={param.label}
              percentage={param.percentage}
              label={param.label}
              current={param.current}
              total={param.total}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};