import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Car, Home, Utensils, Gamepad2, Heart, Plane, Shirt } from "lucide-react";

const categories = [
  { name: "Shopping", amount: 2420, icon: ShoppingCart, color: "bg-blue-500" },
  { name: "Transportation", amount: 1350, icon: Car, color: "bg-green-500" },
  { name: "Housing", amount: 3200, icon: Home, color: "bg-purple-500" },
  { name: "Food & Dining", amount: 850, icon: Utensils, color: "bg-orange-500" },
  { name: "Entertainment", amount: 650, icon: Gamepad2, color: "bg-pink-500" },
  { name: "Healthcare", amount: 420, icon: Heart, color: "bg-red-500" },
  { name: "Travel", amount: 1800, icon: Plane, color: "bg-indigo-500" },
  { name: "Clothing", amount: 730, icon: Shirt, color: "bg-yellow-500" },
];

const Category = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Categories</h1>
          <div className="flex gap-4">
            <Select defaultValue="august">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="august">August</SelectItem>
                <SelectItem value="july">July</SelectItem>
                <SelectItem value="june">June</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2021">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-2xl font-bold">${category.amount.toLocaleString()}</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${Math.min((category.amount / 3500) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;