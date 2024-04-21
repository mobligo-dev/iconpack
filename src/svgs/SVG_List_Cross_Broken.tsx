import React from 'react';

const SVG_List_Cross_Broken = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18.5L20 13.5M20 18.5L15 13.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<path d="M11 14L3 14" stroke-linecap="round" stroke-width="1.5"/>
<path d="M11 18H3" stroke-linecap="round" stroke-width="1.5"/>
<path d="M3 6L13.5 6M20 6L17.75 6" stroke-linecap="round" stroke-width="1.5"/>
<path d="M20 10L9.5 10M3 10H5.25" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_List_Cross_Broken;
