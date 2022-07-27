import s from "./PopUp.module.scss";
import { Item } from "../../pages/Home/components/ThisInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisInfo/ThisDayItem";
import Wind from "../../assets/icons/wind.svg?inline";
import Temperature from "../../assets/icons/temperature.svg?inline";
import Precipitation from "../../assets/icons/precipitation.svg?inline";
import Pressure from "../../assets/icons/pressure.svg?inline";
import Sun from "../../assets/icons/sun.svg?inline";

type Props = {};

const items: Item[] = [
  {
    icon: <Temperature />,
    name: "Temperature",
    description: "20 - warm",
  },
  {
    icon: <Pressure />,
    name: "Pressure",
    description: "765mm - normal pressure",
  },
  {
    icon: <Precipitation />,
    name: "Precipitation",
    description: "Without precipitation",
  },
  {
    icon: <Wind />,
    name: "Wind",
    description: "3 m/s western- light wind",
  },
];

const PopUp = (Props: Props) => {
  return (
    <>
    <div className={s.blur}></div>
    <div className={s.popup}>
      <div className={s.day}>
        <div className={s.day__temp}>20°</div>
        <div className={s.day__name}>Среда</div>
        <div className={s.img}>
          <Sun />
        </div>
        <div className={s.day__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.day__city}>
          Время: <span>Санкт-Петербург</span>
        </div>
      </div>
      <div className={s.thisInfo__items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.name} item={item} />
        ))}
      </div>
      <div className={s.close}>
          x
      </div>
    </div>
  </>
  );
};

export default PopUp;
