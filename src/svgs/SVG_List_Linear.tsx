import React from 'react';

const SVG_List_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17H11" stroke-linecap="round" stroke-width="1.5"/>
<path d="M4 12L11 12" stroke-linecap="round" stroke-width="1.5"/>
<path d="M4 7L11 7" stroke-linecap="round" stroke-width="1.5"/>
<path d="M17 4L17 20M17 4L14 8M17 4L20 8M17 20L20 16M17 20L14 16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_List_Linear;
