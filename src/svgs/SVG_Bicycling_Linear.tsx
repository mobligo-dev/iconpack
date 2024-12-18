import React from 'react';

const SVG_Bicycling_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="4" r="2" stroke-width="1.5" />
            <circle cx="6" cy="18" r="3" stroke-width="1.5" />
            <circle cx="18" cy="18" r="3" stroke-width="1.5" />
            <path d="M18.5 10H16.4744C15.2534 10 14.6429 10 14.0934 9.77341C13.544 9.54682 13.111 9.11646 12.2449 8.25573L11.6676 7.68194C10.8828 6.90201 10.4904 6.51204 10.0257 6.55439C9.56102 6.59673 9.24559 7.0512 8.61471 7.96013L7.38809 9.72738C6.74573 10.6529 6.42454 11.1156 6.55348 11.5703C6.68242 12.025 7.1987 12.2503 8.23125 12.7009L9.70695 13.3448C11.0709 13.9399 11.7529 14.2375 12.081 14.8374C12.4091 15.4373 12.2918 16.172 12.0572 17.6416L12 18" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Bicycling_Linear;
