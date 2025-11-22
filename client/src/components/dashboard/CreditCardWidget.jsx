import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { format } from "@/helpers/balanceFormat";
import { CardActions } from "./CardActions";
import { SlWallet } from "react-icons/sl";
import { currencies } from "@/data/currencies";
import { cardDesigns } from "@/data/cardDesigns";

export function CreditCardWidget() {
  const { user } = useSelector((state) => state.auth);
  const cards = useSelector((state) => state.cards.cards);
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const currencySymbol = currencies.find(
    (c) => c.value === selectedCard.currency
  ).symbol;
  // Array of 9 different card designs

  // Get the current card design or fallback to default (dark)
  const currentDesign = cardDesigns[selectedCard?.design] || cardDesigns.dark;

  return (
    <Card className="w-full bg-white" noBorder={true}>
      <CardHeader className="pb-2">
        <Tabs defaultValue={selectedCard?.name} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full grid-cols-3">
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
            <div className="flex md:flex-row flex-col gap-2 ">
              {/* Card Details */}
              <div className="flex-1 space-y-4 ">
                <h3 className="text-xl font-semibold px-2 flex items-center gap-4">
                  <SlWallet />
                  Total Balance
                </h3>
                <h1 className="text-3xl  px-2 font-money">
                  {currencySymbol}{" "}
                  {selectedCard?.balance && format(selectedCard?.balance)}
                </h1>
              </div>
              {/* Credit Card with Dynamic Design */}
              <div
                className={`relative h-42 w-70 overflow-hidden shadow-2xl rounded-xl ${currentDesign.background} p-6 ${currentDesign.textColor}`}
              >
                {/* Card Design Elements */}
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${currentDesign.accent1} opacity-80`}
                />
                <div
                  className={`absolute -right-10 -top-2 h-24 w-24 rounded-full shadow-lg bg-gradient-to-br ${currentDesign.accent2} opacity-90`}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <CreditCard className="h-8 w-8" />
                    <div className="flex gap-1">
                      <div className="h-8 w-12 rounded bg-white/20" />
                      <div className="h-8 w-12 rounded bg-white/30" />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium">{user?.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
}
