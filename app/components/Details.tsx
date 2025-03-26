import clsx from 'clsx';
import React from 'react';

function Details({ current, summary }: { current?: boolean; summary: string }) {
    return (
        <details
            className={clsx(
                'relative inline-flex items-center cursor-pointer ',
                current && 'font-bold',
            )}
        >
            <summary className='flex items-center gap-8 '>
                {summary} <span className='arrow'></span>
            </summary>
        </details>
    );
}

export default Details;
