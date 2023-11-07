import { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import ProfileA from "./ProfileA/ProfileA";
import { getAllBrands } from "../../store/BrandActions";
import {useDispatch, useSelector} from "react-redux";
import ProductsLabel from "./ProductsLabel/ProductsLabel.jsx";
import DashboardLabel from "./DashboardLabel/DashboardLabel.jsx";
import {getAllSneakers} from "../../store/SneakersActions.jsx";
import logo from "../../images/logo.png";

const tabs = [
  { label: "Dashboard", icon: <DashboardRoundedIcon />, component: DashboardLabel },
  { label: "Товары", icon: <SellRoundedIcon />, component: ProductsLabel },
  { label: "Покупки", icon: <CreditCardIcon />, component: ProductsLabel },
  { label: "Персонал", icon: <GroupRoundedIcon />, component: ProductsLabel },
  { label: "Аналитика", icon: <BarChartRoundedIcon />, component: ProductsLabel },
  { label: "Настройки", icon: <SettingsRoundedIcon />, component: ProductsLabel },
];

export const AdminPage = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Товары");
  const sneakers = useSelector((state)=> state.originalSneakers)



  const renderComponent = (label) => {
    const tab = tabs.find((tab) => tab.label === label);
    if (tab) {
      const Component = tab.component;
      return <Component />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(getAllBrands)
    dispatch(getAllSneakers)
  }, [dispatch,sneakers]);
  return (
    <>
      <div className={styles.main}>
        <header className={styles.navbarBlock}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="LOGO" />
              <p className=" font-medium  text-xl hidden xl:flex">
                SneackerShop ADMIN
              </p>
            </div>
            <div className={styles.buttons}>
              {tabs.map((tab) => (
                  <a
                      key={tab.label}
                      onClick={() => setActiveTab(tab.label)}
                      className={tab.label === activeTab ? `${styles.active} ${styles.tab}` : styles.tab}
                  >
                    {tab.icon}
                    <p>{tab.label}</p>
                  </a>
              ))}
            </div>
            <ProfileA />
            {/* <div className={styles.profile}>
              <div className="flex rounded-full bg-gray-500 w-10 h-10"></div>
              <div className=" hidden xl:flex">Исаев Руслан</div>
              <KeyboardArrowDownRoundedIcon />
            </div> */}
          </nav>
        </header>
        {renderComponent(activeTab)}
      </div>
    </>
  );
};
