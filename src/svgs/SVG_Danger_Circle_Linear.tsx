import React from 'react';

const SVG_Danger_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5"/>
<path d="M12 7V13" stroke-linecap="round" stroke-width="1.5"/>
<circle cx="12" cy="16" fill="black" r="1"/>
</svg>
    );
};

export default SVG_Danger_Circle_Linear;