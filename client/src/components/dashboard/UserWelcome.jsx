import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Download,
  Share,
  Eye,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useSelector } from "react-redux";

export function UserWelcome() {
  const {user} = useSelector((state) => state.auth);
  const incomes = useSelector((state) => state.incomes.incomes).reduce(
    (acc, item) => acc + item.amount,
    0
  );
  console.log(user)

  return (
    <div className="space-y-1">
      {/* User Welcome */}
      <Card noBorder={true} className="bg-white">
        <CardContent className="">
          <div className="flex flex-col items-center text-center justify-center gap-1">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user?.profile}/>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <h3 className="font-semibold text-xl">{user?.name}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income & Expenses Cards */}
      <div className="grid grid-cols-1 space-y-1">
        <div className="absolute right-1">
          <DropdownMenu className="">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="mr-2 h-4 w-4" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Card className="bg-success text-success-foreground">
          <CardContent className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-green-100 rounded-full text-success">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm">Income</p>
                <p className="text-xl font-bold">${incomes}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-error text-error-foreground">
          <CardContent className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-red-100 rounded-full text-success">
                <TrendingDown className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm">Expenses</p>
                <p className="text-xl font-bold">$24,486</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
