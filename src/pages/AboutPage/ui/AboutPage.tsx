import { useTranslation } from "react-i18next"

const AboutPage = () => {
    const {t} = useTranslation('about')
    return(

        // eslint-disable-next-line react/react-in-jsx-scope
        <p>{t('О сайте')}</p>
    )
}

export default AboutPage
