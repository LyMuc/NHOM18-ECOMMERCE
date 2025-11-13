import React from "react";
import { Link } from "react-router-dom";

/*
Reusable tile for account actions
Props:
- to: string (route path)
- title: string
- icon: ReactNode (24-48px recommended)
*/
const AccountFeature = ({ to, title, icon }) => {
  return (
    <Link
      to={to}
      className="group block border rounded-lg bg-white px-8 py-8 text-center shadow-sm hover:shadow transition-colors hover:border-rose-500"
    >
      <div className="mx-auto mb-3 h-10 w-10 text-gray-800 group-hover:text-rose-500">
        {/* If icon is an SVG that inherits currentColor, this will tint it */}
        <div className="h-full w-full [color:currentColor]">{icon}</div>
      </div>
      <div className="font-medium text-gray-800 group-hover:text-rose-500">{title}</div>
    </Link>
  );
};

export default AccountFeature;
