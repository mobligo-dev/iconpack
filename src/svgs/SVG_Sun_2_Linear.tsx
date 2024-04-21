import React from 'react';

const SVG_Sun_2_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke-width="1.5" />
            <path d="M12 2V4" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 20V22" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4 12L2 12" stroke-linecap="round" stroke-width="1.5" />
            <path d="M22 12L20 12" stroke-linecap="round" stroke-width="1.5" />
            <path d="M19.7778 4.22217L17.5558 6.25375" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4.22217 4.22217L6.44418 6.25375" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.44434 17.5557L4.22211 19.7779" stroke-linecap="round" stroke-width="1.5" />
            <path d="M19.7778 19.7778L17.5558 17.5555" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Sun_2_Linear;
