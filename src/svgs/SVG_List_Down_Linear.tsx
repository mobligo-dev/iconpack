import React from 'react';

const SVG_List_Down_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6L3 6" stroke-linecap="round" stroke-width="1.5"/>
<path d="M21 10L3 10" stroke-linecap="round" stroke-width="1.5"/>
<path d="M10 14H3" stroke-linecap="round" stroke-width="1.5"/>
<path d="M10 18H3" stroke-linecap="round" stroke-width="1.5"/>
<path d="M14 15L17.5 18L21 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_List_Down_Linear;
