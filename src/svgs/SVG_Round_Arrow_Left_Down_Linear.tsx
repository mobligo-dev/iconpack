import React from 'react';

const SVG_Round_Arrow_Left_Down_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M15 9L9 15M9 15L9 10.5M9 15L13.5 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Round_Arrow_Left_Down_Linear;
