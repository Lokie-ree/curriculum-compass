import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  // TODO: Add responsive sidebar and Sheet logic
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r p-4">
          <nav className="flex flex-col gap-4">
            {/* Navigation links placeholder */}
            <a href="/dashboard" className="font-medium">Dashboard</a>
            <a href="/documents" className="font-medium">My Documents</a>
            <a href="/chat" className="font-medium">AI Assistant</a>
          </nav>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      {/* TODO: Add Sheet for mobile navigation */}
    </div>
  );
};

export default AppLayout; 