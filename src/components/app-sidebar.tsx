import * as React from "react";
import {
  ArrowLeftRight,
  Banknote,
  Boxes,
  Building2,
  CalendarDays,
  ClipboardList,
  FileCheck,
  FolderKanban,
  Landmark,
  PackageSearch,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Departemen Finansial",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Transaksi",
          url: "/finansial/transaksi",
          icon: ArrowLeftRight,
        },
        {
          title: "Penerimaan & Pengeluaran",
          url: "/finansial/penerimaan-pengeluaran",
          icon: Banknote,
          isActive: true,
        },
        {
          title: "Pengeluaran Operasional",
          url: "/finansial/pengeluaran-operasional",
          icon: ClipboardList,
        },
        {
          title: "Kalender Tagihan",
          url: "/finansial/kalender-tagihan",
          icon: CalendarDays,
        },
      ],
    },
    {
      title: "Departemen Teknis",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Manajemen Proyek",
          url: "/teknis/manajemen-proyek",
          icon: FolderKanban,
        },
        {
          title: "Proyek",
          url: "/teknis/proyek",
          icon: Building2,
        },
        {
          title: "Gudang",
          url: "/teknis/gudang",
          icon: Boxes,
        },
        {
          title: "Pemasok",
          url: "/teknis/pemasok",
          icon: PackageSearch,
        },
        {
          title: "Pekerja",
          url: "/teknis/pekerja",
          icon: Users,
        },
        {
          title: "BAST",
          url: "/teknis/bast",
          icon: FileCheck,
        },
        {
          title: "PBG / SLF / HGB",
          url: "/teknis/pbg-slf-hgb",
          icon: Landmark,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center h-12 shrink-0 gap-2">
          <SidebarTrigger />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">EURASTROY V 1.0</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
