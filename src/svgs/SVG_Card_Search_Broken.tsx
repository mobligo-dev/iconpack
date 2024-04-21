import React from 'react';

const SVG_Card_Search_Broken = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V13M10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10 16H6" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="18" cy="17" r="3" stroke-width="1.5" />
            <path d="M20.5 19.5L21.5 20.5" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 10L7 10M22 10L11 10" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Card_Search_Broken;
