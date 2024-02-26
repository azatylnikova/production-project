import { BugButton } from "app/provides/ErrorBoundary"
import { useTranslation } from "react-i18next"

const MainPage = () => {
    const {t} = useTranslation('about')
    return(

        <><BugButton /><p>{t("Главная страница")}</p></>
    )
}

export default MainPage