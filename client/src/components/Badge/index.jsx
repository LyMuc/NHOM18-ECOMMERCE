import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaBoxOpen, FaTruck, FaCog } from "react-icons/fa";
import { MdPending } from "react-icons/md";


const Badge = (props) => {
  const getStatusStyles = () => {
    switch (props.status) {
      case "pending":
        return "bg-yellow-500 text-white";
      case "confirm":
        return "bg-blue-500 text-white";
      case "processing":
        return "bg-orange-500 text-white";
      case "shipped":
        return "bg-purple-500 text-white";
      case "delivered":
        return "bg-green-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusIcon = () => {
    switch (props.status) {
      case "pending":
        return <MdPending size={13} />;
      case "confirm":
        return <FaBoxOpen size={13} />;
      case "processing":
        return <FaCog size={13} />;
      case "shipped":
        return <FaTruck size={13} />;
      case "delivered":
        return <IoMdCheckmark size={13} />;
      default:
        return null;
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center gap-1 py-1 px-4 rounded-full text-[11px] capitalize ${getStatusStyles()}`}
    >
      {getStatusIcon()}
      {props.status}
    </span>
  );
};

export default Badge;
