import clsx from 'clsx';
import React from 'react';

export interface Route {
    route: string;
    current?: boolean;
}

function BreadCrumb({ routes }: { routes: Route[] }) {
    return (
        <>
            {routes.map((route, index) => (
                <h1
                    key={index}
                    className={clsx(route.current && 'font-bold')}
                >
                    {route.route} {index < routes.length - 1 && '>'}
                </h1>
            ))}
        </>
    );
}

export default BreadCrumb;
