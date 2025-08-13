import { Home, BarChart3, FolderOpen, User, Settings, LogOut, Crown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "Category", url: "/category", icon: FolderOpen },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };

  return (
    <Sidebar className="border-none bg-sidebar">
        <div className="flex items-center gap-2 px-6 py-4">

          {!collapsed && (
            <span className="text-lg font-semibold text-sidebar-foreground">constant</span>
          )}
        </div>
      <SidebarContent className="bg-sidebar">
        {/* Brand */}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive: navIsActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-3 text-sidebar-foreground transition-colors ${
                          isActive(item.url) || navIsActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-sidebar">
        {/* Pro Version Card */}
        {/* {!collapsed && (
          <Card className="mx-4 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 border-none">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Pro version</span>
              </div>
              <p className="text-xs text-white/90 mb-3">
                Just click and go PRO version
              </p>
              <Button 
                size="sm" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Upgrade
              </Button>
            </CardContent>
          </Card>
        )} */}

        {/* Logout */}
        <div className="px-4 pb-4">
          <SidebarMenuButton asChild>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
            >
              <LogOut className="h-5 w-5" />
              {!collapsed && <span className="font-medium">Logout</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}