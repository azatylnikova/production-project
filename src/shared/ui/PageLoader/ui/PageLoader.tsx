
import { classNames } from "shared/config/lib/ClassNames/ClassNames";

import cls from "./PageLoade.module.scss"
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
    className?: string
}
export const PageLoader = ({className}:PageLoaderProps) => {
    return(
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        
        </div>
    )
}