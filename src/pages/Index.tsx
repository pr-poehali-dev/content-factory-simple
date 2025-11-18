import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
