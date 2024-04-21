import React from 'react';

const SVG_Donut_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2.92362 10.2072C2.8097 10.7872 2.75 11.3866 2.75 12C2.75 12.2264 2.75814 12.451 2.77413 12.6733C2.79516 12.6904 2.81728 12.7083 2.84044 12.7268C3.06058 12.9028 3.37094 13.1369 3.73188 13.3698C4.4894 13.8584 5.33178 14.25 6 14.25C6.43561 14.25 6.9638 14.0813 7.51796 13.8023C7.85469 13.6327 8.17653 13.435 8.46068 13.2423C8.32421 12.8535 8.25 12.4354 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 12.771 15.5173 13.4877 15.1183 14.0836C15.3411 14.1896 15.5713 14.25 15.8053 14.25C16.2683 14.25 16.487 14.0308 16.9218 13.516C16.9323 13.5036 16.9429 13.491 16.9537 13.4782C17.3151 13.0495 17.8429 12.4235 18.7798 12.28C18.6514 12.2408 18.532 12.1667 18.4368 12.0586C18.163 11.7477 18.1931 11.2738 18.504 11L20.182 9.52217C20.3764 9.351 20.6345 9.29861 20.8676 9.35938C20.6364 8.58192 20.3058 7.84726 19.8905 7.17018L19.5303 7.53033C19.2374 7.82322 18.7626 7.82322 18.4697 7.53033C18.1768 7.23744 18.1768 6.76256 18.4697 6.46967L18.9936 5.94571C17.2976 3.98821 14.7934 2.75 12 2.75C10.2299 2.75 8.57597 3.24718 7.17018 4.10952L7.53033 4.46967C7.82322 4.76256 7.82322 5.23744 7.53033 5.53033C7.23744 5.82322 6.76256 5.82322 6.46967 5.53033L5.94571 5.00637C4.94045 5.87738 4.12488 6.96151 3.56929 8.18848C3.97987 8.16935 4.32998 8.4847 4.3529 8.89596L4.43156 10.308C4.4546 10.7216 4.13801 11.0755 3.72444 11.0985C3.31086 11.1216 2.95692 10.805 2.93388 10.3914L2.92362 10.2072ZM21.1543 10.6647L19.4953 12.1257C19.4342 12.1795 19.3668 12.2216 19.2958 12.2521C20.0516 12.2809 20.6933 12.5991 21.1987 12.9798C21.2326 12.6578 21.25 12.3309 21.25 12C21.25 11.5465 21.2174 11.1007 21.1543 10.6647ZM20.8507 14.6969C20.4093 14.1984 19.8194 13.75 19.1842 13.75C18.7213 13.75 18.5026 13.9692 18.0677 14.484C18.0573 14.4964 18.0466 14.509 18.0359 14.5218C17.6254 15.0086 17.0005 15.75 15.8053 15.75C15.0981 15.75 14.49 15.4931 14.0034 15.1706C13.4238 15.5375 12.7367 15.75 12 15.75C10.9043 15.75 9.91838 15.2801 9.23274 14.5308C8.92219 14.7382 8.56885 14.9526 8.19255 15.142C7.55133 15.4649 6.77639 15.75 6 15.75C4.98743 15.75 3.95347 15.2623 3.1792 14.7932C4.36349 18.5366 7.86487 21.25 12 21.25C16.1705 21.25 19.6963 18.49 20.8507 14.6969ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.4697 3.46967C10.7626 3.17678 11.2374 3.17678 11.5303 3.46967L12.5303 4.46967C12.8232 4.76256 12.8232 5.23744 12.5303 5.53033C12.2374 5.82322 11.7626 5.82322 11.4697 5.53033L10.4697 4.53033C10.1768 4.23744 10.1768 3.76256 10.4697 3.46967ZM16.45 4.4C16.7814 4.64853 16.8485 5.11863 16.6 5.45L15.1 7.45C14.8515 7.78137 14.3814 7.84853 14.05 7.6C13.7186 7.35147 13.6515 6.88137 13.9 6.55L15.4 4.55C15.6485 4.21863 16.1186 4.15147 16.45 4.4ZM11.2244 6.80589C11.3317 7.20599 11.0942 7.61724 10.6941 7.72444L9.32809 8.09047C8.92799 8.19768 8.51674 7.96024 8.40953 7.56014C8.30232 7.16004 8.53976 6.74879 8.93986 6.64158L10.3059 6.27556C10.706 6.16835 11.1172 6.40579 11.2244 6.80589ZM5.89686 7.17364C6.27394 7.00223 6.71858 7.16896 6.88999 7.54605L7.47522 8.83349C7.64662 9.21058 7.47989 9.65522 7.10281 9.82662C6.72572 9.99803 6.28108 9.8313 6.10967 9.45422L5.52445 8.16677C5.35304 7.78969 5.51977 7.34505 5.89686 7.17364ZM16.6146 8.22733C17.0284 8.20789 17.3796 8.52754 17.399 8.9413L17.4654 10.3539C17.4849 10.7677 17.1652 11.1189 16.7515 11.1383C16.3377 11.1578 15.9865 10.8381 15.9671 10.4244L15.9007 9.01171C15.8812 8.59796 16.2009 8.24678 16.6146 8.22733ZM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM6.94308 10.8949C7.27734 11.1396 7.34999 11.6089 7.10536 11.9431L6.27012 13.0843C6.02549 13.4186 5.55621 13.4912 5.22195 13.2466C4.88769 13.002 4.81504 12.5327 5.05968 12.1984L5.89491 11.0572C6.13954 10.723 6.60883 10.6503 6.94308 10.8949Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Donut_Outline;