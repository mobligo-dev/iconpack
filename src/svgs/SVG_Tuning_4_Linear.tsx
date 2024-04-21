import React from 'react';

const SVG_Tuning_4_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="2" stroke="black" stroke-width="1.5" transform="rotate(-90 12 12)"/>
<circle cx="10" cy="20" r="2" stroke="black" stroke-width="1.5" transform="rotate(-90 10 20)"/>
<circle r="2" stroke="black" stroke-width="1.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 14 4)"/>
<path d="M16 12L19 12" stroke-linecap="round" stroke-width="1.5"/>
<path d="M14 20L19 20" stroke-linecap="round" stroke-width="1.5"/>
<path d="M10 4L5 4" stroke-linecap="round" stroke-width="1.5"/>
<path d="M5 12L8 12" stroke-linecap="round" stroke-width="1.5"/>
<path d="M5 20L6 20" stroke-linecap="round" stroke-width="1.5"/>
<path d="M19 4L18 4" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Tuning_4_Linear;
