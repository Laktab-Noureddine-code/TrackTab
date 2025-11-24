import Header from "@/components/Header";
import FinancialCard from "@/components/FinancialCard";
import CreditCard from "@/components/CreditCard";
import BalanceChart from "@/components/BalanceChart";
import TransactionsList from "@/components/TransactionsList";
import SavingGoals from "@/components/SavingGoals";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CreditCard />
          
          <FinancialCard
            title="Total Income"
            amount="$1,200"
            change="+12.45%"
            changeType="positive"
            icon={TrendingUp}
            iconBg="bg-success/10"
          />
          
          <FinancialCard
            title="Total Expense"
            amount="$1,600"
            change="+3.60%"
            changeType="negative"
            icon={TrendingDown}
            iconBg="bg-destructive/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BalanceChart />
          
          <div className="col-span-1 space-y-6">
            <SavingGoals />
          </div>
        </div>

        <TransactionsList />
      </main>
    </div>
  );
};

export default Index;
