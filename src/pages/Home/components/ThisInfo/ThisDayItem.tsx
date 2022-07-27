import React from 'react'
import s from "./ThisDayInfo.module.scss";
import { Item } from './ThisDayInfo'

type Props = {
    item: Item
}

const ThisDayItem = ({item}: Props) => {
  return (
    <div className={s.item}>
        <div className={s.indicator__icon}>{item.icon}</div>
        <div className={s.indicator__name}>{item.name}</div>
        <div className={s.indicator__description}>{item.description}</div>
    </div>
  ) 
}

export default ThisDayItem