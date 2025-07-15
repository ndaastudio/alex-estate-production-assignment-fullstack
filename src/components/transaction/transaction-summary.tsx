import {
  Banknote,
  CircleDollarSign,
  CreditCard,
  FileText,
  Filter,
  LineChart,
  SlidersHorizontal,
  Users,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import InfoRow from "./info-row";
import { Progress } from "../ui/progress";

export default function TransactionSummary() {
  return (
    <>
      <div>
        <div className="flex gap-0.5 text-sm text-white">
          <button className="bg-[#3a82f6] px-8 py-2 rounded-tl-xl">
            Pengeluaran
          </button>
          <button className="bg-gray-300 text-gray-400 px-8 py-2">
            Pendapatan
          </button>
          <button className="bg-gray-300 text-gray-400 px-8 py-2 rounded-tr-xl">
            Buat Proyek
          </button>
        </div>
        <Card className="w-full p-4">
          <CardContent className="grid grid-cols-4 gap-6 text-[13px] text-gray-700">
            <div className="space-y-3">
              <InfoRow
                icon={FileText}
                label="Total Kontrak"
                value="5.278.000.000 Rp"
              />
              <InfoRow
                icon={CreditCard}
                label="Telah Dibayar Klien"
                value="320.000.000 Rp"
              />
              <InfoRow
                icon={Banknote}
                label="Total Pengeluaran Langsung"
                value="3.680.000.000 Rp"
              />
              <InfoRow
                icon={Users}
                label="Total Laba Kotor"
                value="1.598.000.000 Rp"
              />
            </div>

            <div className="space-y-3">
              <InfoRow
                icon={Wallet}
                label="Saldo Klien"
                value="1.598.000.000 Rp"
              />
              <InfoRow
                icon={Wallet}
                label="Saldo Perusahaan"
                value="5.278.000.000 Rp"
              />
              <InfoRow
                icon={Wallet}
                label="Total Saldo"
                value="6.876.000.000 Rp"
              />
              <InfoRow
                icon={Wallet}
                label="Saldo di Bank"
                value="6.870.000.000 Rp"
              />
            </div>

            <div className="space-y-3">
              <InfoRow
                icon={CircleDollarSign}
                label="Selisih Saldo"
                value="0 Rp"
              />
              <InfoRow
                icon={SlidersHorizontal}
                label="Dipilih Berdasarkan Jumlah"
                value="7.560.000.000 Rp"
              />
              <InfoRow
                icon={Filter}
                label="Filter Jumlah Dipilih"
                value="12.600.000.000 Rp"
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 mb-2">
                <LineChart className="w-4 h-4 text-gray-500" />
                <span className="text-[12px] text-gray-600">
                  Volume Terselesaikan
                </span>
              </div>
              <Progress
                value={25}
                className="h-2 bg-gray-200 [&>[data-state]]:bg-[#22C55E]"
              />
              <div className="mt-1 text-sm text-gray-700 font-semibold">
                1.319.500.000 Rp{" "}
                <span className="float-right text-xs font-normal">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
