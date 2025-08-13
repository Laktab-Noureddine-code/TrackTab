import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Download,
  Share,
  Eye,
} from "lucide-react";

export function UserWelcome() {
  return (
    <div className="space-y-4 bg-gray-300 -mt-3">
      {/* User Welcome */}
      <Card noBorder={true}>
        <CardContent className="" >
          <div className="flex flex-col items-center text-center justify-center gap-3">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://i.pinimg.com/736x/46/73/51/467351f4053889c931e22194ce4a7381.jpg" />
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <h3 className="font-semibold text-xl">Jerome Bell</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income & Expenses Cards */}
      <div className="grid grid-cols-1 border">
        <div>
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Income</p>
                <p className="text-2xl font-bold">$62,569</p>
              </div>
              <ArrowUp className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-error text-error-foreground">
          <CardContent className="">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Expenses</p>
                <p className="text-2xl font-bold">$24,486</p>
              </div>
              <ArrowDown className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
