import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, ArrowUpRight, ArrowDownLeft, TrendingUp } from "lucide-react";

const CreditCard = () => {
  return (
    <Card className="col-span-1 md:col-span-2 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="h-4 w-4" />
              <span>Total Balance</span>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-foreground">$65,264</p>
              <Badge
                variant="secondary"
                className="bg-success/10 text-success hover:bg-success/20"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                +9.01% vs last month
              </Badge>
            </div>
            <div className="flex gap-3 pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Transfer
              </Button>
              <Button variant="outline">
                <ArrowDownLeft className="h-4 w-4 mr-2" />
                Request
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Bank</p>
                    <p className="font-semibold text-lg">AmazBank</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/40"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm tracking-wider font-mono">
                      1987 1987 7654 2376
                    </p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80">Card Holder Name</p>
                      <p className="font-semibold text-sm">AKHMAD MAARIZ</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">Expired Date</p>
                      <p className="font-semibold text-sm">10/28</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl italic">VISA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditCard;
