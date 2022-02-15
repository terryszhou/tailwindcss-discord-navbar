import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 
      flex flex-col shadow-lg bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<BsGearFill size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);
