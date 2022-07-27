import React from "react";
import s from "./ThisDay.module.scss";
import Sun from "../../../../assets/icons/sun.svg?inline";

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topBlock__wrapper}>
          <div className={s.temp}>20</div>
          <div className={s.day}>Today</div>
        </div>
        <Sun />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.time}>
          Time: <span>18:47</span>
        </div>
        <div className={s.city}>
          City: <span>Odessa</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
