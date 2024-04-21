import React from 'react';

const SVG_Golf_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="18.5" rx="10" ry="3.5" stroke="black" stroke-width="1.5"/>
<path d="M12 18V2" stroke-linecap="round" stroke-width="1.5"/>
<path d="M11.9999 3.5L17.4222 6.21114C18.9834 6.99169 19.7639 7.38196 19.7639 8C19.7639 8.61804 18.9834 9.00831 17.4222 9.78886L11.9999 12.5" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Golf_Linear;
