import React, { useState} from "react";
import cls from "./SideBar.module.scss";
import { ThemeSwitches } from "shared/ui/ThemeSwitches";
import { useTranslation } from "react-i18next"; 
import { Button } from "shared/ui/Button";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import { LangSwitches } from "shared/ui/LangSwitches";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";



interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation()
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
 

        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>{t('Открыть')}</Button>
            <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/'}>{t('Главная')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
            <div className={cls.switchers}>
                <ThemeSwitches />
                <LangSwitches />
            </div>
        </div>    
    );
};
