import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreditCardWidget() {
  return (
    <Card className="w-full" noBorder={true}>
      <CardHeader className="pb-2">
        <Tabs defaultValue="universal" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-sm grid-cols-3">
              <TabsTrigger value="universal">Universal card</TabsTrigger>
              <TabsTrigger value="silver">Silver</TabsTrigger>
              <TabsTrigger value="platinum">Platinum</TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <TabsContent value="universal" className="mt-6">
            <div className="flex md:flex-row flex-col gap-4 ">
              {/* Credit Card */}
              <div className="relative h-48 w-80 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-600 p-6 text-white">
                {/* Card Design Elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-red-400 to-orange-500 opacity-80" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <CreditCard className="h-8 w-8" />
                    <div className="flex gap-1">
                      <div className="h-8 w-12 rounded bg-white/20" />
                      <div className="h-8 w-12 rounded bg-white/30" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 font-mono text-lg tracking-wider">
                      5986 4855 7856 4956
                    </div>
                    <div className="text-sm font-medium">Jerome Bell</div>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex-1 space-y-4 ">
                <div className="relative inline-block">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 50"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="2"
                  >
                    <ellipse cx="100" cy="25" rx="98" ry="23" />
                  </svg>
                  <span className="relative text-2xl font-bold text-slate-800 px-6">
                    $102,456
                  </span>
                </div>

                <div className="rounded-lg max-w-md">
                  <div className="">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4  border-gray-200">
                      <span className="text-sm font-medium text-gray-600"></span>
                      <span className="text-sm font-medium text-gray-600 text-center">
                        July
                      </span>
                      <span className="text-sm font-medium text-gray-600 text-center">
                        August
                      </span>
                    </div>

                    {/* Data Rows */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-4 py-1">
                        <span className="text-sm text-gray-600">Available</span>
                        <span className="text-sm font-medium text-center">
                          $31,213
                        </span>
                        <span className="text-sm font-medium text-center">
                          $82,456
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-1">
                        <span className="text-sm text-gray-600">
                          Credit limit
                        </span>
                        <span className="text-sm font-medium text-center">
                          $12,000
                        </span>
                        <span className="text-sm font-medium text-center">
                          $20,000
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-1">
                        <span className="text-sm text-gray-600">
                          Credit used
                        </span>
                        <span className="text-sm font-medium text-center">
                          $10,000
                        </span>
                        <span className="text-sm font-medium text-center">
                          $0.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="silver">
            <div className="text-center text-muted-foreground">
              Silver card details coming soon...
            </div>
          </TabsContent>

          <TabsContent value="platinum">
            <div className="text-center text-muted-foreground">
              Platinum card details coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
}
