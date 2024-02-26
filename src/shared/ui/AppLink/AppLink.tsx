import React, {  FC } from "react";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import cls from "./AppLink.module.scss"
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'pmamary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        to,
        className,
        children, 
        theme = AppLinkTheme.PRIMARY} = props
    return (
        <Link to={to} className={classNames(cls.AppLink, {[cls[theme]]: true}, [className] )}>
            {children}

        </Link>
    )
}
