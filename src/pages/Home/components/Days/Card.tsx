import React from 'react'
import { Day } from './Days'
import s from './Days.module.scss'

type Props = {
    day: Day
}

const Card = ({day}: Props) => {
  return (
    <div className={s.card}>
        <div className={s.info}>
            <div className={s.info__day}>{day.day}</div>
            <div className={s.info__date}>{day.day_info}</div>
        </div>
        <div className={s.day__icon}>
            {day.icon}
        </div>
        <div className={s.indicators}>
            <div className={s.indicators__temp_day}>{day.temp_day}</div>
            <div className={s.indicators__temp_night}>{day.temp_night}</div>
            <div className={s.indicators__weather}>{day.weather}</div>
        </div>
    </div>
  )
}

export default Card