import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "./Cards/Cards";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import WeeklyActivity from "./WeeklyAcktivity/WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics/ExpenseStatistics";
import QuickTransfer from "./QuickTransfer/QuickTransfer";
import BalanceHistory from "./BalanceHistory/BalanceHistory";
const Main = () => {
  return (
    <div className=" lg:grid grid-cols-headerGrid ">
      <Sidebar />
      <div className="h-[100vh] pb-10 overflow-y-scroll ">
        <Cards/>
        {/* <RecentTransactions />
        <WeeklyActivity />
        <ExpenseStatistics />
        <QuickTransfer />
        <BalanceHistory /> */}
      </div>
    </div>
  );
};

export default Main;
