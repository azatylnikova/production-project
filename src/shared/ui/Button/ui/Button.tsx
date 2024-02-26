/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ButtonHTMLAttributes } from "react";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import cls from "./Button.module.scss"

export enum ThemeButton {
 // eslint-disable-next-line no-unused-vars
 CLEARL = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return(
        <button type ='button' className={classNames(cls.Button, {[cls[theme]]: true}, [className])} 

            {...otherProps}
        >
            {children}
        
        </button>
    )
}