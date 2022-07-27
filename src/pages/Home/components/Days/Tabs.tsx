import React from "react";
import s from "./Tabs.module.scss";

type Props = {};

const tabs = [
  { value: "Week", active: true },
  { value: "For a 10 days" },
  { value: "Month" },
];

const Tabs = (props: Props) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div key={tab.value} className={tab.active? s.tab__active : s.tab}>{tab.value}</div>
        ))}
      </div>
      <div className={s.btn_reset}>Reset</div>
    </div>
  );
};

export default Tabs;
