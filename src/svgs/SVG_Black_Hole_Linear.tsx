import React from 'react';

const SVG_Black_Hole_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <path d="M12 10C17 10 16.6 22 9 22" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10.6314 10.6961C14.1669 7.16053 22.3694 15.9287 16.9954 21.3027" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13.6801 13.3039C10.1446 16.8395 1.94216 8.07135 7.31617 2.69734" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10.8516 13.5242C7.31605 9.98865 16.0842 1.78622 21.4582 7.16023" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13.4599 10.4758C16.9955 14.0113 8.22736 22.2138 2.85334 16.8398" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115" stroke-linecap="round" stroke-width="1.5" />
            <path d="M14 12C14 17 2 16.6 2 9" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Black_Hole_Linear;
