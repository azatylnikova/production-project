import { classNames } from "shared/config/lib/ClassNames/ClassNames"
import cls from './NoFoundPage.module.scss'
import { useTranslation } from "react-i18next"

interface NoFoundPageProps {
    className?: string
}
export const NoFoundPage = ({className}:NoFoundPageProps) => {

    const { t } = useTranslation()
    return(
        <div className={classNames(cls.NoFoundPage, {}, [className])}>
            {t( 'Старница не найдена')}
        
        </div>
    )
}