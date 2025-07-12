import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <div className="font-bold text-xl">Curriculum Compass</div>
      <div>
        {/* User/account menu placeholder */}
        <button className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">U</button>
      </div>
    </header>
  );
};

export default Header; 