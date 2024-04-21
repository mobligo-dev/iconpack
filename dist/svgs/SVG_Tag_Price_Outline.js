import React from 'react';
const SVG_Tag_Price_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M11.2383 2.79888C10.6243 2.88003 9.86605 3.0542 8.78743 3.30311L7.55925 3.58654C6.64823 3.79677 6.02085 3.94252 5.54165 4.10698C5.07902 4.26576 4.8173 4.42228 4.61981 4.61978C4.42231 4.81727 4.26579 5.07899 4.10701 5.54162C3.94255 6.02082 3.7968 6.6482 3.58657 7.55922L3.30314 8.7874C3.05423 9.86602 2.88006 10.6243 2.79891 11.2383C2.71985 11.8365 2.73808 12.2413 2.84361 12.6092C2.94914 12.9772 3.1482 13.3301 3.53229 13.7954C3.92654 14.2731 4.4761 14.8238 5.25885 15.6066L7.08848 17.4362C8.44797 18.7957 9.41536 19.7608 10.247 20.3954C11.0614 21.0167 11.6569 21.25 12.2624 21.25C12.8678 21.25 13.4633 21.0167 14.2777 20.3954C15.1093 19.7608 16.0767 18.7957 17.4362 17.4362C18.7957 16.0767 19.7608 15.1093 20.3954 14.2776C21.0167 13.4633 21.25 12.8678 21.25 12.2623C21.25 11.6569 21.0167 11.0614 20.3954 10.247C19.7608 9.41533 18.7957 8.44794 17.4362 7.08845L15.6066 5.25882C14.8238 4.47607 14.2732 3.92651 13.7955 3.53226C13.3301 3.14817 12.9772 2.94911 12.6092 2.84358C12.2413 2.73805 11.8365 2.71982 11.2383 2.79888ZM11.0418 1.31181C11.7591 1.21701 12.3881 1.21969 13.0228 1.4017C13.6574 1.58372 14.1922 1.91482 14.7503 2.37538C15.2897 2.8206 15.8905 3.42138 16.641 4.17193L18.5368 6.06774C19.8475 7.37835 20.8851 8.41598 21.5879 9.33714C22.3111 10.2849 22.75 11.197 22.75 12.2623C22.75 13.3276 22.3111 14.2397 21.5879 15.1875C20.8851 16.1087 19.8475 17.1463 18.5368 18.4569L18.4569 18.5368C17.1463 19.8474 16.1087 20.8851 15.1875 21.5879C14.2397 22.311 13.3276 22.75 12.2624 22.75C11.1971 22.75 10.285 22.311 9.33717 21.5879C8.41601 20.8851 7.37836 19.8474 6.06774 18.5368L4.17199 16.641C3.42143 15.8905 2.82064 15.2897 2.37541 14.7502C1.91485 14.1922 1.58375 13.6574 1.40174 13.0227C1.21972 12.3881 1.21704 11.7591 1.31184 11.0418C1.40348 10.3484 1.59454 9.52047 1.83322 8.48622L2.13388 7.18334C2.33305 6.32023 2.49546 5.61639 2.68824 5.05469C2.88958 4.46806 3.14316 3.9751 3.55915 3.55912C3.97513 3.14313 4.46809 2.88955 5.05472 2.68821C5.61643 2.49543 6.32026 2.33302 7.18338 2.13385L8.48625 1.83319C9.5205 1.59451 10.3484 1.40345 11.0418 1.31181ZM9.49095 7.99522C9.00279 7.50706 8.21133 7.50706 7.72318 7.99522C7.23502 8.48337 7.23502 9.27483 7.72318 9.76299C8.21133 10.2511 9.00279 10.2511 9.49095 9.76299C9.9791 9.27483 9.9791 8.48337 9.49095 7.99522ZM6.66252 6.93456C7.73646 5.86062 9.47766 5.86062 10.5516 6.93456C11.6255 8.0085 11.6255 9.7497 10.5516 10.8236C9.47766 11.8976 7.73646 11.8976 6.66252 10.8236C5.58858 9.7497 5.58858 8.0085 6.66252 6.93456ZM12.9929 12.107C12.816 12.1053 12.5835 12.1847 12.3841 12.3841C11.9966 12.7716 12.0985 13.1591 12.2073 13.268C12.3162 13.3768 12.7037 13.4787 13.0912 13.0912C13.8753 12.3071 15.2289 12.0469 16.0964 12.9144C16.7694 13.5874 16.7637 14.553 16.3612 15.3182C16.5624 15.6104 16.533 16.0134 16.2732 16.2732C16.0143 16.5321 15.6131 16.5621 15.3212 16.3633C14.8643 16.6061 14.3446 16.6971 13.849 16.5952C13.4433 16.5119 13.182 16.1153 13.2654 15.7096C13.3487 15.3039 13.7452 15.0426 14.151 15.1259C14.3281 15.1623 14.6137 15.1042 14.859 14.859C15.2465 14.4714 15.1446 14.0839 15.0358 13.9751C14.9269 13.8662 14.5394 13.7643 14.1519 14.1518C13.3678 14.9359 12.0142 15.1961 11.1467 14.3286C10.4737 13.6557 10.4794 12.6901 10.8819 11.9248C10.6807 11.6327 10.7101 11.2297 10.9699 10.9699C11.2288 10.711 11.6298 10.6809 11.9217 10.8796C12.2615 10.699 12.635 10.6035 13.0071 10.607C13.4213 10.6109 13.7539 10.9499 13.75 11.3641C13.7461 11.7783 13.4071 12.1109 12.9929 12.107Z", "fill-rule": "evenodd" })));
};
export default SVG_Tag_Price_Outline;
