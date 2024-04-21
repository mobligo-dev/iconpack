import React from 'react';

const SVG_Info_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
<path d="M12 17V11" stroke-linecap="round" stroke-width="1.5"/>
<circle fill="black" r="1" transform="matrix(1 0 0 -1 12 8)"/>
</svg>
    );
};

export default SVG_Info_Circle_Linear;
