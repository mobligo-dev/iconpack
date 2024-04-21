import React from 'react';

const SVG_Facemask_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M16.5 20.5001L17 15.0001L13.857 13.7429C12.6649 13.266 11.3351 13.266 10.143 13.7429L7 15.0001L7.5 20.5001" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 15L2.5 13" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 15L21.5 13" stroke-linecap="round" stroke-width="1.5" />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" />
        </svg>
    );
};

export default SVG_Facemask_Circle_Linear;
