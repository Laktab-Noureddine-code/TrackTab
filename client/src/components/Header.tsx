import { Search, Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const navItems = [
    { name: "Overview", active: true },
    { name: "My Card", active: false },
    { name: "Transaction", active: false },
    { name: "Goals", active: false },
    { name: "Investment", active: false },
    { name: "Settings", active: false },
  ];

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <div className="w-1 h-6 bg-secondary rounded-full"></div>
              <div className="w-1 h-6 bg-primary rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-foreground">moneko</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <nav className="flex items-center justify-between">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                className={item.active ? "bg-primary text-primary-foreground" : ""}
              >
                {item.name}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>1 June - 30 June 2024</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
