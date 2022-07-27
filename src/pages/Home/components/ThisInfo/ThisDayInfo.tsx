import React  from "react";
import s from "./ThisDayInfo.module.scss";
import Cloud from "../../../../assets/images/cloud.png"
import Wind from '../../../../assets/icons/wind.svg?inline'
import Temperature from '../../../../assets/icons/temperature.svg?inline'
import Precipitation from '../../../../assets/icons/precipitation.svg?inline'
import Pressure from '../../../../assets/icons/pressure.svg?inline'
import ThisDayItem from "./ThisDayItem";



type Props = {};

export interface Item {
  icon: JSX.Element,
  name: string,
  description: string,
}

const items: Item[] = [
  {
    icon: <Temperature />,
    name: 'Temperature',
    description: '20 - warm'
  },
  {
    icon: <Pressure />,
    name: 'Pressure',
    description: '765mm - normal pressure'
  },
  {
    icon: <Precipitation />,
    name: 'Precipitation',
    description: 'Without precipitation'
  },
  {
    icon: <Wind />,
    name: 'Wind',
    description: '3 m/s western- light wind'
  },
]

const ThisDayInfo = (props: Props) => {
  return (
    <div className={s.thisInfo}>
      <div className={s.thisInfo__items}>
        {items.map((item:Item) => 
          <ThisDayItem key={item.name} item={item}/>
          )}
      </div>
      <img className={s.thisInfo__image} src={Cloud} alt="Cloud Image" />
    </div>
  );
};

export default ThisDayInfo;
