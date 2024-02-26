
import { classNames } from "shared/config/lib/ClassNames/ClassNames";

import  "./Loader.scss"

interface PageLoaderProps {
    className?: string
}
export const Loader = ({className}:PageLoaderProps) => {
    return(
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}