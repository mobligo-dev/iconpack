import React from 'react';

const SVG_Checklist_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5.5L3.21429 7L7.5 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<path d="M2 12.5L3.21429 14L7.5 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<path d="M2 19.5L3.21429 21L7.5 17" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<path d="M22 19L12 19" stroke-linecap="round" stroke-width="1.5"/>
<path d="M22 12L12 12" stroke-linecap="round" stroke-width="1.5"/>
<path d="M22 5L12 5" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Checklist_Linear;
