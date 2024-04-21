import React from 'react';

const SVG_Music_Note_2_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 18V10V2" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="9" cy="18" r="4" stroke-width="1.5" />
            <path d="M19 8C15.6863 8 13 5.31371 13 2" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Music_Note_2_Linear;
