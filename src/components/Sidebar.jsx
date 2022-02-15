import { BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPlus } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
      flex flex-col shadow-lg bg-white text-gray-900
      dark:bg-gray-900 dark:text-white">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPlus size="28" />} />
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
