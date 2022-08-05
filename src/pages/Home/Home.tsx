import React, { useEffect } from "react";
import s from "./Home.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisInfo from "./components/ThisInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Tabs from "./components/Days/Tabs";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { useSelector } from "react-redux";
import {selectCurrentWeatherData} from "../../store/selectors"

type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const {weather} = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'))
  }, [])

  return (
    <div className={s.home}>
      <div className={s.top_block}>
        <ThisDay weather={weather} />
        <ThisInfo />
      </div>
        <Days />
    </div>
  );
};

export default Home;

