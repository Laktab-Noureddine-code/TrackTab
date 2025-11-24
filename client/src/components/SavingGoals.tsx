import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp } from "lucide-react";

const SavingGoals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Saving Goals</CardTitle>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Meaningful Keyboard</p>
              <p className="text-sm text-muted-foreground">Goal: $1,000</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">$350</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Add Money
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-foreground to-foreground/90 text-background hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <div className="w-1 h-6 bg-secondary rounded-full"></div>
              <div className="w-1 h-6 bg-primary rounded-full"></div>
            </div>
            <span className="text-lg font-bold">moneko</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Unlock Premium Features</h3>
            <p className="text-sm opacity-90">
              Get access to advanced analytics, custom reports, and priority support.
            </p>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Upgrade Plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SavingGoals;
