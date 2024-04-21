import React from 'react';

const SVG_Help_Broken = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke-width="1.5" />
            <path d="M15 9L19 5" stroke-width="1.5" />
            <path d="M5 19L9 15" stroke-width="1.5" />
            <path d="M9 9L5 5" stroke-width="1.5" />
            <path d="M19 19L15 15" stroke-width="1.5" />
            <path d="M9.41235 2.33886C11.0533 1.89769 12.8289 1.8693 14.5882 2.34072C19.9229 3.77014 23.0887 9.25351 21.6593 14.5882C20.2299 19.9228 14.7465 23.0887 9.41185 21.6592C4.07719 20.2298 0.911364 14.7465 2.34078 9.41179C2.8122 7.65242 3.72457 6.12895 4.92711 4.92841" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Help_Broken;
