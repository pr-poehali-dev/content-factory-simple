import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: "LayoutDashboard", label: "Дашборд" },
    { path: "/planner", icon: "Calendar", label: "Планировщик" },
    { path: "/content", icon: "FileText", label: "Контент" },
    { path: "/integrations", icon: "Plug", label: "Интеграции" },
    { path: "/analytics", icon: "BarChart3", label: "Аналитика" },
    { path: "/settings", icon: "Settings", label: "Настройки" },
  ];

  return (
    <div className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Rocket" className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">ContentHub</span>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="User" className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Иван Петров</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">ivan@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
