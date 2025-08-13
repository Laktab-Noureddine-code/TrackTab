import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <header className="flex h-16 items-center border-b bg-card px-6">
            <SidebarTrigger className="mr-4 text-xl cursor-pointer " />
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          </header>
          <div className="p-2">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}