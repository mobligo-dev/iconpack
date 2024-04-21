import React from 'react';

const SVG_Forbidden_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 5.5L5.50002 18.4998" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Forbidden_Circle_Linear;
