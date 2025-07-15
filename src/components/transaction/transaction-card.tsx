import { Progress } from "@radix-ui/react-progress";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import InfoRow from "./info-row";
import {
  AlertTriangle,
  CreditCard,
  DollarSign,
  FileText,
  Users,
  Wallet,
} from "lucide-react";

export default function TransactionCard() {
  return (
    <>
      <Card className="max-w-xs w-full shadow-md rounded-xl overflow-hidden">
        <CardHeader className="bg-[#1B2738] rounded-t-xl px-4 py-3">
          <CardTitle className="text-white text-sm font-semibold leading-5">
            PT Amadeus Rock Reality
          </CardTitle>
        </CardHeader>

        <CardContent className="px-4 space-y-3">
          <div className="flex justify-between text-[10px] font-semibold text-[#4B5563]">
            <span>Kontrak</span>
            <span>002-08/IV/MBI-2024</span>
          </div>

          <div className="flex justify-between text-[9px] font-normal text-[#9CA3AF]">
            <span>Mulai / Selesai</span>
            <span>25.03.2024 - 25.08.2024</span>
          </div>

          <div className="pt-2">
            <div className="flex justify-between text-[9px] font-normal text-[#6B7280] mb-1">
              <span>BAST</span>
              <span>70%</span>
            </div>
            <Progress
              value={70}
              className="h-1.5 bg-[#D1D5DB] [&>[data-state]]:bg-[#22C55E]"
            />
          </div>

          <div className="flex justify-between text-[9px] font-normal text-[#6B7280] mt-2 mb-3">
            <span>Total - Berlalu - Tersisa</span>
            <div className="flex space-x-3 font-semibold text-[#9CA3AF]">
              <span>180</span>
              <span className="text-[#6B7280]">80</span>
              <span>100</span>
            </div>
          </div>

          <div className="space-y-2 text-[10px] font-normal text-[#6B7280]">
            <InfoRow
              icon={DollarSign}
              label="Total Nilai"
              value="278.000.000 Rp"
            />
            <InfoRow
              icon={CreditCard}
              label="Telah Dibayar"
              value="180.000.000 Rp"
            />
            <InfoRow
              icon={FileText}
              label="Pengeluaran Awal"
              value="180.000.000 Rp"
            />
            <InfoRow icon={Users} label="Laba Kotor" value="96.000.000 Rp" />
            <InfoRow icon={Wallet} label="Saldo" value="-98.000.000 Rp" />
            <InfoRow icon={AlertTriangle} label="Denda Hari Ini" value="0 Rp" />
            <InfoRow
              icon={AlertTriangle}
              label="Denda per Hari"
              value="278.000 Rp"
              disabled
            />
            <InfoRow
              icon={AlertTriangle}
              label="Denda Maksimal"
              value="27.900.000 Rp"
              disabled
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
