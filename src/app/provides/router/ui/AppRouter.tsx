
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeCongig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader";

export const AppRouter = () => {
    return (
     
        <Routes>
            {Object.values(routeCongig).map(({ element, path }) => (
                <Route key={path} element={(
                    <Suspense fallback={<PageLoader/>}> 
                        <div className="page-wrapper">
                            {element} 
                        </div>
                    </Suspense>
                )} path={path} />
            ))}
        </Routes>
    );
};
