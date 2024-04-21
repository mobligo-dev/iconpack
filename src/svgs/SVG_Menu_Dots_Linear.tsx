import React from 'react';

const SVG_Menu_Dots_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="12" r="2" stroke-width="1.5" />
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <circle cx="19" cy="12" r="2" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Menu_Dots_Linear;
