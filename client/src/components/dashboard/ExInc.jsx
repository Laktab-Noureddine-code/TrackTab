import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

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
  BanknoteArrowDown,
  BanknoteArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "@/helpers/balanceFormat";

export function ExInc() {
  const { user } = useSelector((state) => state.auth);
  const incomes = useSelector((state) => state.incomes.incomes).reduce(
    (acc, item) => acc + item.amount,
    0
  );
  console.log(user);

  return (
    <div className="space-y-1">
      {/* User Welcome */}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-success text-success-foreground bg-white rounded-md p-3 ">
            <div className="flex items-center justify-between gap-3 ">
              <div className="flex items-center gap-3">
                <BanknoteArrowDown size={30} className="rounded-icon" />
                <p className="text-sm font-semibold">Total Income</p>
              </div>
              <Link
                to="/incomes"
                className="p-1 border border-gray-100 rounded-sm"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="mt-4">
              <p className="text-3xl font-money font-[500]">
                ${format(incomes)}
              </p>
            </div>

            {/* compare incomes month */}
            <div className="flex items-center gap-1 mt-2 text-xs">
              <span className="flex p-[1px] items-center text-xs bg-green-50 text-green-500 rounded-sm border border-green-600">
                <IoTrendingUp className="text-green-800" />
                15.35%
              </span>
              <p className="">vs last month</p>
            </div>
          </div>
          <div className="bg-success text-success-foreground bg-white rounded-md p-3 ">
            <div className="flex items-center justify-between gap-3 ">
              <div className="flex items-center gap-3">
                <BanknoteArrowUp size={30} className="rounded-icon" />
                <p className="text-sm font-semibold">Total Expenses</p>
              </div>
              <Link
                to="/Expense"
                className="p-1 border border-gray-100 rounded-sm"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="mt-5">
              <p className="text-3xl font-money font-[500]">
                ${format(incomes)}
              </p>
            </div>
            {/* compare expenses month */}
            <div className="flex items-center gap-1 mt-2 text-xs">
              <span className="flex p-[1px] items-center text-xs bg-red-50 text-red-500 rounded-sm border border-red-600">
                <IoTrendingDown className="text-red-800" />
                1.35%
              </span>
              <p className="">vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
