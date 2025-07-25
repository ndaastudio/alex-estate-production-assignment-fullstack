import TransactionCard from "@/components/transaction/transaction-card";
import TransactionSummary from "@/components/transaction/transaction-summary";
import TransactionTable from "@/components/transaction/transaction-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FadeContent from "@/components/ui/fade-content";

function Transaction() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Departemen Finansial</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Transaksi</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="space-y-4">
          <div className="flex gap-4">
            <TransactionCard />
            <TransactionCard />
          </div>
          <TransactionSummary />
          <TransactionTable />
        </div>
      </FadeContent>
    </>
  );
}

export default Transaction;
