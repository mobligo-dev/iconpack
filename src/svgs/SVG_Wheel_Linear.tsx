import React from 'react';

const SVG_Wheel_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <circle cx="12" cy="12" r="6" stroke-width="1.5" />
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <path d="M6 12L10 12" stroke-linecap="round" stroke-width="1.5" />
            <path d="M14 12L18 12" stroke-linecap="round" stroke-width="1.5" />
            <path d="M9 17.1963L11 13.7322" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13 10.2681L15 6.80396" stroke-linecap="round" stroke-width="1.5" />
            <path d="M15 17.1963L13 13.7322" stroke-linecap="round" stroke-width="1.5" />
            <path d="M11 10.2681L9 6.80396" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Wheel_Linear;
