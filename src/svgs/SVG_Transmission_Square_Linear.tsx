import React from 'react';

const SVG_Transmission_Square_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9V15" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 9V15" stroke-linecap="round" stroke-width="1.5" />
            <path d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9" stroke-linecap="round" stroke-width="1.5" />
            <rect height="20" rx="5" stroke-width="1.5" width="20" x="2" y="2" />
        </svg>
    );
};

export default SVG_Transmission_Square_Linear;
