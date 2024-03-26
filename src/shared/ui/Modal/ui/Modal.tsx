import React, { useState, useEffect, ReactNode, useRef, useCallback } from "react";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import cls from './Modal.module.scss'
import { Portal } from "shared/ui/Portal/ui/Portal";


interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?:boolean,
    onClose?: () => void
}


export const Modal = (props:ModalProps) => {

    const ANIMATION_DELAY = 300;

    const {className, children, isOpen, onClose} = props;

    const [isClosing, setIsClosing] = useState(false)

    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHAndler = useCallback(() => {
        if(onClose){
            setIsClosing(true)
            //// Если модальное окно демонтируется из дом дерева
            timeRef.current = setTimeout(()=>{
                onClose() 
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    },[onClose])


    ////// !!Новые ссылки
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHAndler()
        }
    }, [closeHAndler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(()=>{

        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return ()=>{
            clearTimeout(timeRef.current),
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened] : isOpen,
        [cls.isClosing] : isClosing
    }
    return(
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHAndler}>
                    <div className= {classNames(cls.content, {[cls.contentOpened]: isOpen})} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}