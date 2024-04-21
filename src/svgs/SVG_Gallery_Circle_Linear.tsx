import React from 'react';

const SVG_Gallery_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="9" r="2" stroke-width="1.5" />
            <path d="M20 17.6001L17.7765 15.599C16.7369 14.6634 15.1888 14.5702 14.0446 15.3744L13.7464 15.5839C12.9513 16.1428 11.8695 16.0491 11.1822 15.3618L6.89249 11.0721C6.03628 10.2159 4.66287 10.1702 3.75159 10.9675L2.28113 12.2542" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Gallery_Circle_Linear;
