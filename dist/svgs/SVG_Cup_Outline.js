import React from 'react';
const SVG_Cup_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M12.0002 1.25C10.1724 1.25 8.66129 1.41099 7.4984 1.60719L7.36355 1.62983C6.35333 1.79893 5.51366 1.93949 4.85712 2.74808C4.43608 3.26664 4.30023 3.82706 4.26891 4.4531L3.77686 4.61712C3.31373 4.77147 2.90781 4.90675 2.58577 5.05656C2.23762 5.21852 1.91857 5.42714 1.67466 5.76555C1.43076 6.10396 1.33375 6.47262 1.2902 6.85411C1.24992 7.20701 1.24996 7.63488 1.25 8.12304L1.25001 8.26827C1.25 8.67008 1.24999 9.02497 1.27965 9.32179C1.3118 9.64348 1.38299 9.95621 1.56083 10.2584C1.73867 10.5607 1.97748 10.7748 2.24307 10.9591C2.48813 11.1292 2.79836 11.3015 3.14962 11.4966L5.79078 12.964C6.33018 14.0252 7.07115 14.9713 8.09017 15.6548C8.97721 16.2497 10.0418 16.6232 11.3028 16.723C11.2687 16.8087 11.25 16.9022 11.25 17V18.75H9.81981C8.98562 18.75 8.26739 19.3388 8.10379 20.1568L7.88515 21.25H6C5.58579 21.25 5.25 21.5858 5.25 22C5.25 22.4142 5.58579 22.75 6 22.75H18C18.4142 22.75 18.75 22.4142 18.75 22C18.75 21.5858 18.4142 21.25 18 21.25H16.1149L15.8962 20.1568C15.7326 19.3388 15.0144 18.75 14.1802 18.75H12.75V17C12.75 16.9022 12.7313 16.8087 12.6972 16.723C13.9583 16.6233 15.023 16.2498 15.9101 15.6548C16.9292 14.9713 17.6703 14.025 18.2097 12.9637L20.8503 11.4966C21.2016 11.3015 21.5118 11.1292 21.7569 10.9591C22.0225 10.7748 22.2613 10.5607 22.4391 10.2584C22.617 9.95621 22.6882 9.64348 22.7203 9.32179C22.75 9.02499 22.75 8.67012 22.75 8.26834L22.75 8.12306C22.75 7.63488 22.75 7.20701 22.7098 6.85411C22.6662 6.47262 22.5692 6.10396 22.3253 5.76555C22.0814 5.42714 21.7623 5.21852 21.4142 5.05656C21.0921 4.90675 20.6862 4.77147 20.2231 4.61712L19.7314 4.45322C19.7001 3.82713 19.5643 3.26668 19.1432 2.74808C18.4866 1.93949 17.647 1.79893 16.6368 1.62983L16.5019 1.60719C15.339 1.41099 13.8279 1.25 12.0002 1.25ZM14.5852 21.25L14.4253 20.451C14.402 20.3341 14.2994 20.25 14.1802 20.25H9.81981C9.70064 20.25 9.59804 20.3341 9.57467 20.451L9.41486 21.25H14.5852ZM4.28849 6.02772L4.3021 6.02318C4.37367 7.54348 4.5454 9.22376 4.97298 10.7937L3.90729 10.2016C3.51814 9.98542 3.27447 9.84906 3.09829 9.72679C2.93588 9.61407 2.88298 9.54762 2.85363 9.49774C2.82428 9.44786 2.79187 9.36934 2.77221 9.17263C2.75089 8.95925 2.75002 8.68002 2.75001 8.23484L2.75001 8.16231C2.74999 7.62323 2.75111 7.28191 2.78053 7.02422C2.80775 6.7857 2.85231 6.69703 2.89154 6.6426C2.93077 6.58817 3.0008 6.51786 3.21847 6.4166C3.45362 6.3072 3.77708 6.19819 4.28849 6.02772ZM19.6982 6.0233C19.6266 7.54349 19.4549 9.22364 19.0274 10.7935L20.0927 10.2016C20.4818 9.98542 20.7255 9.84906 20.9017 9.72679C21.0641 9.61407 21.117 9.54762 21.1463 9.49774C21.1757 9.44786 21.2081 9.36934 21.2277 9.17263C21.2491 8.95925 21.2499 8.68002 21.25 8.23484L21.25 8.16231C21.25 7.62323 21.2488 7.28191 21.2194 7.02422C21.1922 6.7857 21.1477 6.69703 21.1084 6.6426C21.0692 6.58817 20.9992 6.51786 20.7815 6.4166C20.5463 6.3072 20.2229 6.19819 19.7115 6.02772L19.6982 6.0233ZM7.74796 3.08629C8.83319 2.90319 10.2608 2.75 12.0002 2.75C13.7395 2.75 15.1671 2.90319 16.2524 3.08629C17.4593 3.28992 17.7128 3.3661 17.9787 3.69358C18.2407 4.01632 18.2656 4.32156 18.2118 5.67672C18.1222 7.93537 17.8242 10.3727 16.9015 12.2264C16.446 13.1414 15.8505 13.8887 15.0746 14.409C14.3037 14.9261 13.3092 15.25 12.0002 15.25C10.6911 15.25 9.69656 14.9261 8.92569 14.409C8.14983 13.8887 7.55432 13.1414 7.09884 12.2264C6.1761 10.3727 5.87815 7.93537 5.78848 5.67672C5.73468 4.32156 5.75956 4.01632 6.02161 3.69358C6.28751 3.3661 6.54104 3.28992 7.74796 3.08629Z", "fill-rule": "evenodd" })));
};
export default SVG_Cup_Outline;
