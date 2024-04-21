import React from 'react';

const SVG_Point_On_Map_Perspective_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787M21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213M21.1213 21.1213C21.1213 21.1213 21.1213 21.1213 21.1213 21.1213ZM21.1213 10.8787C20.2426 10 18.8284 10 16 10L8 10C5.17157 10 3.75736 10 2.87868 10.8787M21.1213 10.8787C21.1213 10.8787 21.1213 10.8787 21.1213 10.8787ZM2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213M2.87868 10.8787C2.87868 10.8787 2.87868 10.8787 2.87868 10.8787ZM2.87868 21.1213C2.87868 21.1213 2.87868 21.1213 2.87868 21.1213Z" stroke-width="1.5" />
            <path d="M21 21L3 11" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3.5 21L12 16" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="17" cy="5" r="3" stroke-width="1.5" />
            <path d="M17 13L17 8" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Point_On_Map_Perspective_Linear;
