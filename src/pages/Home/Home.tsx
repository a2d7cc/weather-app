import React from "react";
import s from "./Home.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisInfo from "./components/ThisInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Tabs from "./components/Days/Tabs";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.top_block}>
        <ThisDay />
        <ThisInfo />
      </div>
        <Days />
    </div>
  );
};

export default Home;

