import { classNames } from "shared/config/lib/ClassNames/ClassNames"
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"



interface NavBarProps {
    className?: string
}
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    )
}





