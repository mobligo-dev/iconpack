import React from 'react';

const SVG_Confounded_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M8 12L10 10.5L8 9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 12L14 10.5L16 9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 16L14.6667 15L13.3333 16L12 15L10.6667 16L9.33333 15L8 16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Confounded_Circle_Linear;
