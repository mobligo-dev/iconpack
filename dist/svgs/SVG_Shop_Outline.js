import React from 'react';
const SVG_Shop_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M7.30706 1.25002C6.50609 1.24976 5.95648 1.24957 5.468 1.38348C4.44239 1.66464 3.58438 2.36804 3.10754 3.3186C2.88043 3.77133 2.77283 4.3103 2.61601 5.09577L1.99641 8.19389C1.7648 9.35192 2.08215 10.4718 2.75001 11.3115L2.75001 14.0565C2.74999 15.8942 2.74998 17.3499 2.90315 18.4891C3.06077 19.6615 3.39289 20.6104 4.14125 21.3588C4.88962 22.1072 5.83857 22.4393 7.01099 22.5969C8.1502 22.7501 9.60584 22.7501 11.4436 22.75H12.5564C14.3942 22.7501 15.8498 22.7501 16.989 22.5969C18.1615 22.4393 19.1104 22.1072 19.8588 21.3588C20.6071 20.6104 20.9392 19.6615 21.0969 18.4891C21.25 17.3499 21.25 15.8942 21.25 14.0565V11.3116C21.9179 10.4718 22.2352 9.35193 22.0036 8.19389L21.384 5.09576C21.2272 4.3103 21.1196 3.77133 20.8925 3.3186C20.4157 2.36804 19.5577 1.66464 18.532 1.38348C18.0436 1.24957 17.4939 1.24976 16.693 1.25002H7.30706ZM18.2685 12.75C18.7974 12.75 19.2971 12.6436 19.75 12.4524V14C19.75 15.9069 19.7484 17.2615 19.6103 18.2892C19.475 19.2953 19.2213 19.8749 18.7981 20.2981C18.3749 20.7214 17.7953 20.975 16.7892 21.1103C16.3437 21.1702 15.8367 21.2044 15.25 21.224V18.4678C15.25 18.028 15.25 17.6487 15.2218 17.3374C15.192 17.0082 15.1259 16.6823 14.9486 16.375C14.7511 16.033 14.4671 15.749 14.125 15.5515C13.8178 15.3741 13.4918 15.3081 13.1627 15.2782C12.8514 15.25 12.472 15.25 12.0322 15.25H11.9678C11.528 15.25 11.1487 15.25 10.8374 15.2782C10.5082 15.3081 10.1822 15.3741 9.87501 15.5515C9.53297 15.749 9.24893 16.033 9.05145 16.375C8.87408 16.6823 8.80803 17.0082 8.77819 17.3374C8.74998 17.6487 8.74999 18.028 8.75001 18.4678L8.75001 21.224C8.16328 21.2044 7.65635 21.1702 7.21086 21.1103C6.20477 20.975 5.62512 20.7214 5.20191 20.2981C4.7787 19.8749 4.52503 19.2953 4.38977 18.2892C4.2516 17.2615 4.25001 15.9069 4.25001 14V12.4524C4.70289 12.6436 5.20268 12.75 5.73156 12.75C7.00548 12.75 8.14447 12.1217 8.83808 11.1459C9.54758 12.114 10.6932 12.75 11.9998 12.75C13.3066 12.75 14.4523 12.1139 15.1618 11.1456C15.8553 12.1215 16.9944 12.75 18.2685 12.75ZM10.25 21.2481C10.6384 21.25 11.0541 21.25 11.5 21.25H12.5C12.9459 21.25 13.3616 21.25 13.75 21.2481V18.5C13.75 18.0189 13.7493 17.7083 13.728 17.4728C13.7075 17.2477 13.6731 17.1659 13.6495 17.125C13.5837 17.011 13.489 16.9164 13.375 16.8505C13.3341 16.8269 13.2524 16.7925 13.0273 16.7721C12.7918 16.7508 12.4811 16.75 12 16.75C11.5189 16.75 11.2082 16.7508 10.9728 16.7721C10.7476 16.7925 10.6659 16.8269 10.625 16.8505C10.511 16.9164 10.4163 17.011 10.3505 17.125C10.3269 17.1659 10.2925 17.2476 10.2721 17.4728C10.2507 17.7083 10.25 18.0189 10.25 18.5V21.2481ZM8.67107 2.75005H7.41772C6.46327 2.75005 6.1327 2.75661 5.86458 2.83011C5.24921 2.9988 4.73441 3.42084 4.4483 3.99118C4.32364 4.23968 4.25238 4.56254 4.0652 5.49846L3.46728 8.48807C3.18151 9.91693 4.2744 11.25 5.73156 11.25C6.91788 11.25 7.91118 10.3511 8.02922 9.17069L8.09781 8.48481L8.10179 8.44279L8.67107 2.75005ZM9.59127 8.62505L10.1788 2.75005H13.8211L14.4053 8.59204C14.5476 10.0152 13.43 11.25 11.9998 11.25C10.5807 11.25 9.46935 10.0342 9.59127 8.62505ZM18.1355 2.83011C17.8673 2.75661 17.5368 2.75005 16.5823 2.75005H15.3288L15.9708 9.17069C16.0889 10.3511 17.0822 11.25 18.2685 11.25C19.7256 11.25 20.8185 9.91693 20.5328 8.48807L19.9348 5.49846C19.7477 4.56254 19.6764 4.23968 19.5517 3.99118C19.2656 3.42084 18.7508 2.9988 18.1355 2.83011Z", "fill-rule": "evenodd" })));
};
export default SVG_Shop_Outline;
