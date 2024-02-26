
import React from 'react';




export const MainPageasync = React.lazy(() => import('./MainPage'));
// export const MainPageasync = React.lazy(() => new Promise(resolve => {
//     setTimeout( () => resolve(import('./MainPage')), 1000)
// }));
