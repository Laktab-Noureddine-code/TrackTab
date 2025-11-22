import { Layout } from "@/components/Layout";
import { CreditCardWidget } from "@/components/dashboard/CreditCardWidget";
import { ExInc } from "@/components/dashboard/ExInc";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { MoneyFlowChart } from "@/components/dashboard/MoneyFlowChart";

const Index = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-2">
        {/* Top Section */}
        <div className="flex flex-col gap-2">
          <div className="">
            <CreditCardWidget />
          </div>
          <div className="">
            <TransactionsTable />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2">
          <div className="lg:col-span-2">
            <ExInc />
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
