import { useTranslation } from "react-i18next";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";
import cls from "./LangSwitches.module.scss";

interface LangSwitchesProps {
  className?: string;
}
export const LangSwitches = ({ className }: LangSwitchesProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={classNames(cls.LangSwitches, {}, [className])}
            theme={ThemeButton.CLEARL}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
