import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { format } from "@/helpers/balanceFormat";
import { CardActions } from "./CardActions";

export function CreditCardWidget() {
  const { user } = useSelector((state) => state.auth);
  const cards = useSelector((state) => state.cards.cards);
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  // Array of 9 different card designs
  const cardDesigns = {
    blue: {
      background: "bg-gradient-to-br from-blue-600 to-blue-800",
      accent1: "from-blue-400 to-cyan-500",
      accent2: "from-blue-700 to-cyan-500",
      textColor: "text-white"
    },
    purple: {
      background: "bg-gradient-to-br from-purple-600 to-pink-600",
      accent1: "from-purple-400 to-pink-500",
      accent2: "from-purple-700 to-pink-500",
      textColor: "text-white"
    },
    orange: {
      background: "bg-gradient-to-br from-orange-500 to-red-500",
      accent1: "from-orange-400 to-red-400",
      accent2: "from-orange-600 to-red-600",
      textColor: "text-white"
    },
    black: {
      background: "bg-gradient-to-br from-gray-800 to-gray-900",
      accent1: "from-gray-600 to-gray-700",
      accent2: "from-gray-700 to-gray-800",
      textColor: "text-white"
    },
    pink: {
      background: "bg-gradient-to-br from-pink-500 to-rose-500",
      accent1: "from-pink-400 to-rose-400",
      accent2: "from-pink-600 to-rose-600",
      textColor: "text-white"
    },
    teal: {
      background: "bg-gradient-to-br from-teal-600 to-cyan-600",
      accent1: "from-teal-400 to-cyan-400",
      accent2: "from-teal-700 to-cyan-700",
      textColor: "text-white"
    },
    light: {
      background: "bg-gradient-to-br from-blue-100 to-indigo-200",
      accent1: "from-blue-300 to-indigo-400",
      accent2: "from-blue-400 to-indigo-500",
      textColor: "text-gray-800"
    },
    green: {
      background: "bg-gradient-to-br from-green-600 to-emerald-600",
      accent1: "from-green-400 to-emerald-400",
      accent2: "from-green-700 to-emerald-700",
      textColor: "text-white"
    },
    dark: {
      background: "bg-gradient-to-br from-slate-800 to-slate-600",
      accent1: "from-red-400 to-orange-500",
      accent2: "from-red-700 to-orange-500",
      textColor: "text-white"
    }
  };

  // Get the current card design or fallback to default (dark)
  const currentDesign = cardDesigns[selectedCard?.design] || cardDesigns.dark;

  return (
    <Card className="w-full" noBorder={true}>
      <CardHeader className="pb-2">
        <Tabs defaultValue={selectedCard?.name} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-sm grid-cols-3">
              {cards.map((card, index) => (
                <TabsTrigger
                  key={index}
                  onClick={() => setSelectedCard(card)}
                  className="cursor-pointer"
                  value={card.name}
                >
                  {card.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <CardActions />
          </div>

          <TabsContent value={selectedCard?.name} className="mt-6">
            <div className="flex md:flex-row flex-col gap-4 ">
              {/* Credit Card with Dynamic Design */}
              <div className={`relative h-48 w-80 overflow-hidden shadow-2xl rounded-xl ${currentDesign.background} p-6 ${currentDesign.textColor}`}>
                {/* Card Design Elements */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${currentDesign.accent1} opacity-80`} />
                <div className={`absolute -right-10 -top-2 h-24 w-24 rounded-full shadow-lg bg-gradient-to-br ${currentDesign.accent2} opacity-90`} />

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
                      {selectedCard?.balance && format(selectedCard?.balance)}
                    </div>
                    <div className="text-sm font-medium">{user?.name}</div>
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