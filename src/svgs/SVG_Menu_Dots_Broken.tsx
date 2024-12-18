import React from 'react';

const SVG_Menu_Dots_Broken = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Menu_Dots_Broken;
