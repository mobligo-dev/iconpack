import React from 'react';

const SVG_Gallery_Round_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke-width="1.5" />
            <circle cx="16" cy="8" r="2" stroke-width="1.5" />
            <path d="M2 10.1537L2.98073 10.0129C9.95896 9.01086 15.9238 15.0312 14.8571 21.9998" stroke-linecap="round" stroke-width="1.5" />
            <path d="M22 13.385L21.0266 13.2502C18.1828 12.8564 15.6097 14.2722 14.2846 16.5005" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Gallery_Round_Linear;
