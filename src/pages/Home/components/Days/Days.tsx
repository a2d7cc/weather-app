import React from "react";
import s from "./Days.module.scss";
import Sun from "../../../../assets/icons/sun.svg?inline";
import SmallRain from "../../../../assets/icons/small-rain.svg?inline";
import SmallRainSun from "../../../../assets/icons/small-rain-sun.svg?inline";
import Rain from "../../../../assets/icons/rain.svg?inline";
import MainlyCloudy from "../../../../assets/icons/mainly-cloudy.svg?inline";

import Card from "./Card";
import Tabs from "./Tabs";

type Props = {};

export interface Day {
  day: string;
  day_info: string;
  icon: JSX.Element;
  temp_day: string;
  temp_night: string;
  weather: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon: <Sun />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon: <SmallRainSun />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon: <SmallRain />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon: <MainlyCloudy />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon: <Rain />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon: <Sun />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "Облачно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon: <Sun />,
      temp_day: "+18",
      temp_night: "+15",
      weather: "Облачно",
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card key={day.day_info} day={day} />
        ))}
      </div>
    </>
  );
};

export default Days;
