import React from 'react';

const SVG_User_Rounded_Bold = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" />
            <ellipse cx="12" cy="17" rx="7" ry="4" />
        </svg>
    );
};

export default SVG_User_Rounded_Bold;
