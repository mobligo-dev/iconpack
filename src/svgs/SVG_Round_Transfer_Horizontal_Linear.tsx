import React from 'react';

const SVG_Round_Transfer_Horizontal_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M17 10L7 10L10.4375 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 14L17 14L13.5625 17" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Round_Transfer_Horizontal_Linear;
