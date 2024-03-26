/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/config/lib/ClassNames/ClassNames"
import cls from './NavBar.module.scss'
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modal"
import { useCallback, useState } from "react"
import { Button } from "shared/ui/Button"
import { ThemeButton } from "shared/ui/Button/ui/Button"



interface NavBarProps {
    className?: string
}
export const NavBar = ({ className }: NavBarProps) => {

    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false)

    ///////////////// Ссылки при передачи пропсов нужно сохранять
    const onToggleModal = useCallback(()=>{
        setIsAuthModal((prev) => !prev)
    }, [])

    
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          
            <div className={cls.links}>
                <Button 
                    theme={ThemeButton.OUTLINE}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal  isOpen={isAuthModal} onClose={onToggleModal}>

                    afsfasfasfasfasffsfasfasf
                </Modal>
             
            </div>
        </div>
    )
}





