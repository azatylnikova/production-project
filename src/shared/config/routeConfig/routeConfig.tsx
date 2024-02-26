import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NoFoundPage } from "pages/NoFoundPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
    MAIN = 'main',
    ABOUT='about',
    NOT_FOUND = 'not_found'
}

export const RoutePath : Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',

    ///// Последний
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeCongig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    }, 
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NoFoundPage/>
    }
}