import React from 'react';

const SVG_Tuning_3_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" stroke-width="1.5" transform="rotate(180 12 12)" />
            <circle cx="20" cy="14" r="2" stroke-width="1.5" transform="rotate(180 20 14)" />
            <circle r="2" stroke-width="1.5" transform="matrix(-1 8.74228e-08 8.74228e-08 1 4 10)" />
            <path d="M12 8L12 5" stroke-linecap="round" stroke-width="1.5" />
            <path d="M20 10L20 5" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4 14L4 19" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 19L12 16" stroke-linecap="round" stroke-width="1.5" />
            <path d="M20 19L20 18" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4 5L4 6" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Tuning_3_Linear;
