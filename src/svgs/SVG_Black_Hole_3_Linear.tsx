import React from 'react';

const SVG_Black_Hole_3_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <path d="M12 10C17 10 16.6 22 9 22" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke-linecap="round" stroke-width="1.5" />
            <path d="M14 12C14 17 2 16.6 2 9" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Black_Hole_3_Linear;
