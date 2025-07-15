import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import companyLogo from "@/assets/company_logo.png";
import { Bell, ListCheck, MessageCircle, Settings2 } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Layout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <img className="h-8 m-4" src={companyLogo} alt="Company" />
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Cari..."
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <Settings2 className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-6 py-2 bg-gray-200 h-10 w-8 rounded-lg flex justify-center items-center font-medium">
                RU
              </div>
              <ListCheck size={20} className="text-gray-500" />
              <MessageCircle size={20} className="text-gray-500" />
              <Bell size={20} className="text-gray-500" />
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-2 me-4">
              <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center font-medium"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">Alex</p>
                <p className="text-xs font-light">Finance</p>
              </div>
            </div>
          </header>
          <div className="p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
