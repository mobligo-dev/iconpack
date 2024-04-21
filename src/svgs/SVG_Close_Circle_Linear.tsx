import React from 'react';

const SVG_Close_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M14.5 9.49999L9.5 14.5M9.49998 9.49997L14.5 14.4999" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Close_Circle_Linear;
