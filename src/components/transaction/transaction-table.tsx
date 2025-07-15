import { Download, Plus, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "../ui/table";

export default function TransactionTable() {
  return (
    <>
      <div className="py-2 pb-0 flex justify-between gap-4 m-0">
        <div className="flex gap-0.5 text-sm text-white items-center">
          <button className="bg-[#3a82f6] px-8 py-2 rounded-tl-xl">
            Semua Transaksi
          </button>
          <button className="bg-gray-300 text-gray-400 px-8 py-2">
            Dibayar
          </button>
          <button className="bg-gray-300 text-gray-400 px-8 py-2">
            Terkonfirmasi
          </button>
          <button className="bg-gray-300 text-gray-400 px-8 py-2">
            Menunggu
          </button>
          <Button size="sm" className="bg-green-600 text-white ml-2">
            <Plus className="w-4 h-4 mr-1" /> Buat Transaksi
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" /> Export
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-1" /> Import
          </Button>
        </div>
      </div>
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#1B2738] text-white">
                <TableRow>
                  <TableHead className="text-white">Nama Barang</TableHead>
                  <TableHead className="text-white">Pemasok</TableHead>
                  <TableHead className="text-white">Proyek</TableHead>
                  <TableHead className="text-white">Kode Akun</TableHead>
                  <TableHead className="text-white">Kategori</TableHead>
                  <TableHead className="text-white">Karyawan</TableHead>
                  <TableHead className="text-white">Penerima</TableHead>
                  <TableHead className="text-white">Harga / unit</TableHead>
                  <TableHead className="text-white">Jumlah</TableHead>
                  <TableHead className="text-white">Satuan</TableHead>
                  <TableHead className="text-white">Total Bayar</TableHead>
                  <TableHead className="text-white">Tanggal Bayar</TableHead>
                  <TableHead className="text-white">Dokumen</TableHead>
                  <TableHead className="text-white">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2].map((row) => (
                  <TableRow key={row}>
                    <TableCell>Besi Beton Ulir D16</TableCell>
                    <TableCell>CV Bulana Makarya</TableCell>
                    <TableCell>PT Alex Estate</TableCell>
                    <TableCell>4.3.2</TableCell>
                    <TableCell>4.3.2.1</TableCell>
                    <TableCell>Alex Sanbayev</TableCell>
                    <TableCell>BCA 134432...</TableCell>
                    <TableCell>178.000 Rp</TableCell>
                    <TableCell>150</TableCell>
                    <TableCell>pcs</TableCell>
                    <TableCell className="font-bold text-black">
                      26.700.000 Rp
                    </TableCell>
                    <TableCell>25.03.2025</TableCell>
                    <TableCell>
                      <span className="inline-flex gap-1 text-gray-400">
                        📄📄📄
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex gap-2 text-gray-400">
                        ⚙️ ❌ ✏️
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
