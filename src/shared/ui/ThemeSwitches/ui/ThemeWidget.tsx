import React from "react";
import cls from "./ThemeWidget.module.scss"
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import { Theme, UseTheme } from "app/provides/ThemeProveder";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Button } from "../../Button";
import { ThemeButton } from "../../Button/ui/Button";

interface ThemeWidgetProps {
    className?: string
}
export const ThemeSwitches = ({className}:ThemeWidgetProps) => {

    const { theme, toggleTheme } = UseTheme();
    
    return(
        <div className={classNames(cls.ThemeWidget, {}, [className])}>
            <Button theme={ThemeButton.CLEARL} onClick={toggleTheme}>
                {theme === Theme.DARK ?  <DarkIcon/> : <LightIcon/>}  
            </Button>
        
        </div>
    )
}