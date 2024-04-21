import React from 'react';

const SVG_Dumbbell_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4.97475 6.25H5.02525C5.46971 6.24999 5.84075 6.24999 6.14537 6.27077C6.46247 6.29241 6.76199 6.33905 7.05238 6.45933C7.72621 6.73844 8.26156 7.27379 8.54067 7.94762C8.61595 8.12935 8.65477 8.33457 8.67888 8.51115C8.70447 8.69856 8.7201 8.9072 8.73014 9.12039C8.73949 9.31878 8.74443 9.53207 8.74705 9.75H15.2529C15.2556 9.53207 15.2605 9.31878 15.2699 9.12039C15.2799 8.9072 15.2955 8.69856 15.3211 8.51115C15.3452 8.33457 15.3841 8.12935 15.4593 7.94762C15.7384 7.27379 16.2738 6.73844 16.9476 6.45933C17.238 6.33905 17.5375 6.29241 17.8546 6.27077C18.1592 6.24999 18.5303 6.24999 18.9747 6.25H19.0253C19.4697 6.24999 19.8408 6.24999 20.1454 6.27077C20.4625 6.29241 20.762 6.33905 21.0524 6.45933C21.7262 6.73844 22.2616 7.27379 22.5407 7.94762C22.661 8.23801 22.7076 8.53754 22.7292 8.85464C22.75 9.15925 22.75 9.53028 22.75 9.97474V14.0253C22.75 14.4697 22.75 14.8408 22.7292 15.1454C22.7076 15.4625 22.661 15.762 22.5407 16.0524C22.2616 16.7262 21.7262 17.2616 21.0524 17.5407C20.762 17.661 20.4625 17.7076 20.1454 17.7292C19.8408 17.75 19.4697 17.75 19.0253 17.75H18.9747C18.5303 17.75 18.1592 17.75 17.8546 17.7292C17.5375 17.7076 17.238 17.661 16.9476 17.5407C16.2738 17.2616 15.7384 16.7262 15.4593 16.0524C15.3841 15.8706 15.3452 15.6654 15.3211 15.4889C15.2955 15.3014 15.2799 15.0928 15.2699 14.8796C15.2605 14.6812 15.2556 14.4679 15.2529 14.25H8.74705C8.74443 14.4679 8.73949 14.6812 8.73014 14.8796C8.7201 15.0928 8.70447 15.3014 8.67888 15.4889C8.65477 15.6654 8.61595 15.8706 8.54067 16.0524C8.26156 16.7262 7.72621 17.2616 7.05238 17.5407C6.76199 17.661 6.46247 17.7076 6.14537 17.7292C5.84075 17.75 5.46972 17.75 5.02526 17.75H4.97474C4.53028 17.75 4.15925 17.75 3.85464 17.7292C3.53754 17.7076 3.23801 17.661 2.94762 17.5407C2.27379 17.2616 1.73844 16.7262 1.45933 16.0524C1.33905 15.762 1.29241 15.4625 1.27077 15.1454C1.24999 14.8408 1.24999 14.4697 1.25 14.0253V9.97475C1.24999 9.53029 1.24999 9.15925 1.27077 8.85464C1.29241 8.53754 1.33905 8.23801 1.45933 7.94762C1.73844 7.27379 2.27379 6.73844 2.94762 6.45933C3.23801 6.33905 3.53754 6.29241 3.85464 6.27077C4.15925 6.24999 4.53029 6.24999 4.97475 6.25ZM3.95674 7.76729C3.71602 7.78372 3.5988 7.81319 3.52165 7.84515C3.21536 7.97202 2.97202 8.21536 2.84515 8.52165C2.81319 8.5988 2.78372 8.71602 2.76729 8.95674C2.75041 9.20421 2.75 9.5238 2.75 10V14C2.75 14.4762 2.75041 14.7958 2.76729 15.0433C2.78372 15.284 2.81319 15.4012 2.84515 15.4784C2.97202 15.7846 3.21536 16.028 3.52165 16.1549C3.5988 16.1868 3.71602 16.2163 3.95674 16.2327C4.20421 16.2496 4.5238 16.25 5 16.25C5.4762 16.25 5.79579 16.2496 6.04326 16.2327C6.28399 16.2163 6.4012 16.1868 6.47835 16.1549C6.78464 16.028 7.02798 15.7846 7.15485 15.4784C7.15461 15.4789 7.15486 15.4784 7.15485 15.4784C7.15481 15.4783 7.15954 15.4655 7.16706 15.4328C7.17529 15.3969 7.18412 15.3485 7.19267 15.2859C7.2099 15.1597 7.22282 14.9997 7.2318 14.809C7.24983 14.4263 7.25 13.9709 7.25 13.5C7.25 13.0858 7.58579 12.75 8 12.75H16C16.4142 12.75 16.75 13.0858 16.75 13.5C16.75 13.9709 16.7502 14.4263 16.7682 14.809C16.7772 14.9997 16.7901 15.1597 16.8073 15.2859C16.8159 15.3485 16.8247 15.3969 16.8329 15.4328C16.8405 15.4655 16.8456 15.4792 16.8455 15.4792C16.8455 15.4792 16.8458 15.4798 16.8455 15.4792C16.9724 15.7855 17.2154 16.028 17.5216 16.1549C17.5988 16.1868 17.716 16.2163 17.9567 16.2327C18.2042 16.2496 18.5238 16.25 19 16.25C19.4762 16.25 19.7958 16.2496 20.0433 16.2327C20.284 16.2163 20.4012 16.1868 20.4784 16.1549C20.7846 16.028 21.028 15.7846 21.1549 15.4784C21.1868 15.4012 21.2163 15.284 21.2327 15.0433C21.2496 14.7958 21.25 14.4762 21.25 14V10C21.25 9.5238 21.2496 9.20421 21.2327 8.95674C21.2163 8.71602 21.1868 8.5988 21.1549 8.52165C21.028 8.21536 20.7846 7.97202 20.4784 7.84515C20.4012 7.81319 20.284 7.78372 20.0433 7.76729C19.7958 7.75041 19.4762 7.75 19 7.75C18.5238 7.75 18.2042 7.75041 17.9567 7.76729C17.716 7.78372 17.5988 7.81319 17.5216 7.84515C17.2154 7.97202 16.972 8.21536 16.8452 8.52165C16.8454 8.52107 16.8451 8.52164 16.8452 8.52165C16.8452 8.52166 16.8405 8.53451 16.8329 8.56724C16.8247 8.60307 16.8159 8.65147 16.8073 8.71407C16.7901 8.84026 16.7772 9.00026 16.7682 9.19099C16.7502 9.5737 16.75 10.0291 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5C7.25 10.0291 7.24983 9.5737 7.2318 9.19099C7.22282 9.00026 7.2099 8.84026 7.19267 8.71407C7.18412 8.65147 7.17529 8.60307 7.16706 8.56724C7.15954 8.53451 7.15444 8.52079 7.15449 8.52077C7.15449 8.52077 7.15425 8.5202 7.15449 8.52077C7.02762 8.21449 6.78464 7.97202 6.47835 7.84515C6.4012 7.81319 6.28399 7.78372 6.04326 7.76729C5.79579 7.75041 5.4762 7.75 5 7.75C4.5238 7.75 4.20421 7.75041 3.95674 7.76729Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Dumbbell_Outline;
