import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export interface Route {
    route: string;
    current?: boolean;
}

function BreadCrumb({ routes }: { routes: Route[] }) {
    return (
        <>
            {routes.map((route, index) => (
                <Link
                    href='/'
                    key={index}
                    className={clsx(route.current && 'font-bold')}
                >
                    {route.route} {index < routes.length - 1 && '>'}
                </Link>
            ))}
        </>
    );
}

export default BreadCrumb;
