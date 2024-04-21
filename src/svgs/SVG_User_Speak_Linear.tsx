import React from 'react';

const SVG_User_Speak_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="6" r="4" stroke-width="1.5" />
            <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke-width="1.5" />
            <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_User_Speak_Linear;
