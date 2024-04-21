import React from 'react';

const SVG_Check_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
<path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Check_Circle_Linear;
