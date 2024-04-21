import React from 'react';

const SVG_Sad_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke-linecap="round" stroke-width="1.5" />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" />
        </svg>
    );
};

export default SVG_Sad_Circle_Linear;
