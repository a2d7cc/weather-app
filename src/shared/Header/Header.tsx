import s from "./Header.module.scss";
import HeaderLogo from "../../assets/icons/header-logo.svg?inline";
import ChangeTheme from "../../assets/icons/change-theme.svg?inline";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme"
import { Theme } from "../../context/ThemeContext";

type Props = {};

const options = [
  { value: "city-1", label: "Odessa" },
  { value: "city-2", label: "Kiev" },
  { value: "city-3", label: "Lviv" },
];

const Header = (props: Props) => {
  const {theme, changeTheme} = useTheme();

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const toggleTheme = () => {
    changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };


  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <HeaderLogo />
        </div>
        <div className={s.title}>Rect Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.themeIcon} onClick={toggleTheme}>
          <ChangeTheme />
        </div>
        <div className={s.cityList}>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
