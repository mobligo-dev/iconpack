import React from 'react';

const SVG_Add_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Add_Circle_Linear;
