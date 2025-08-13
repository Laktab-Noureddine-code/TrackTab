import { Layout } from "@/components/Layout";
import { CreditCardWidget } from "@/components/dashboard/CreditCardWidget";
import { UserWelcome } from "@/components/dashboard/UserWelcome";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { MoneyFlowChart } from "@/components/dashboard/MoneyFlowChart";

const Index = () => {
  return (
    <Layout>
      <div className="">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 ">
            <CreditCardWidget />
          </div>
          <div>
            <UserWelcome />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <TransactionsTable />
          </div>
          <div>
            <MoneyFlowChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;