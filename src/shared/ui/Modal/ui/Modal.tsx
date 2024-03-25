import React, { useState, useEffect, ReactNode } from "react";
import { classNames } from "shared/config/lib/ClassNames/ClassNames";
import cls from './Modal.module.scss'
interface ModalProps {
    className?: string,
    children?: ReactNode
}
export const Modal = (props:ModalProps) => {

    const {className, children} = props;
    return(
        <div className={classNames(cls.Modal, {}, [className])}>
        <div className={cls.overlay}>
        <div className= {cls.content}>
            {children}
        </div>
        </div>
        </div>
    )
}