import { ActiveCards } from "@/components/analytics/ActiveCards";
import { CategoriesPieChart } from "@/components/analytics/CategoriesPieChart";
import { DissectionChart } from "@/components/analytics/DissectionChart";
import { IncomeVsExpenses } from "@/components/analytics/IncomeVsExpenses";
import { InvestmentsChart } from "@/components/analytics/InvestmentsChart";
import { SpendingParameters } from "@/components/analytics/SpendingParameters";
import { SummaryCards } from "@/components/analytics/SummaryCards";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { Layout } from "@/components/Layout";

const Analytics = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6 bg-background min-h-screen">
        {/* Top Section - Summary Cards */}
        <SummaryCards />

            <IncomeVsExpenses />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="">
            <ActiveCards />
          </div>
          <div className="">
            <CategoriesPieChart />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1  gap-6">
          <div className="">
            <TransactionsTable />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-1">
            <DissectionChart />
          </div>
          {/* <div className="lg:col-span-1">
            <InvestmentsChart />
          </div> */}
          <div className="lg:col-span-1">
            <SpendingParameters />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
