import React from 'react';

const SVG_Black_Hole_Outline = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" stroke-width="1.5" />
            <path clip-rule="evenodd" d="M7.84647 2.16694C8.13937 2.45983 8.13937 2.9347 7.84647 3.2276C7.60855 3.46552 7.40261 3.70858 7.22563 3.95479C6.98386 4.29112 6.51521 4.36779 6.17888 4.12602C5.84254 3.88425 5.76588 3.4156 6.00765 3.07927C6.23362 2.76492 6.49255 2.4602 6.78581 2.16694C7.07871 1.87404 7.55358 1.87404 7.84647 2.16694ZM18.5233 6.28177C17.913 6.12808 17.2861 6.09849 16.6613 6.17295C16.25 6.22197 15.8769 5.92828 15.8278 5.51697C15.7788 5.10567 16.0725 4.73251 16.4838 4.68349C17.2729 4.58944 18.0853 4.62464 18.8896 4.82718C19.2913 4.92832 19.5349 5.33594 19.4337 5.73761C19.3326 6.13929 18.925 6.38291 18.5233 6.28177ZM5.89374 4.72169C6.29541 4.82284 6.53904 5.23046 6.43789 5.63213C6.2842 6.24245 6.25461 6.86934 6.32907 7.49412C6.37809 7.90542 6.0844 8.27858 5.6731 8.3276C5.2618 8.37662 4.88863 8.08293 4.83961 7.67163C4.74557 6.88252 4.78076 6.07014 4.9833 5.26584C5.08445 4.86417 5.49207 4.62054 5.89374 4.72169ZM15.1961 5.70195C15.3629 6.08106 15.1909 6.52367 14.8118 6.69056C14.213 6.95416 13.6456 7.29946 13.1347 7.70002C12.8088 7.95559 12.3373 7.89852 12.0818 7.57255C11.8262 7.24658 11.8833 6.77515 12.2092 6.51958C12.8135 6.04581 13.4881 5.63438 14.2074 5.3177C14.5865 5.15081 15.0292 5.32285 15.1961 5.70195ZM20.0294 6.02275C20.2712 5.68642 20.7398 5.60976 21.0762 5.85153C21.3905 6.07749 21.6952 6.33642 21.9885 6.62969C22.2814 6.92258 22.2814 7.39746 21.9885 7.69035C21.6956 7.98324 21.2207 7.98324 20.9278 7.69035C20.6899 7.45243 20.4469 7.24649 20.2006 7.0695C19.8643 6.82773 19.7876 6.35909 20.0294 6.02275ZM11.6159 8.0355C11.9467 8.28491 12.0126 8.75519 11.7632 9.0859C11.698 9.17231 11.6359 9.25907 11.5768 9.346C11.8463 9.36826 12.0945 9.5359 12.2068 9.80229C12.3677 10.184 12.1888 10.6238 11.8071 10.7847C11.5827 10.8794 11.3657 11.0221 11.1617 11.2261C10.8896 11.4981 10.4605 11.5175 10.1661 11.284C10.104 11.2826 10.0412 11.2734 9.97867 11.2558C9.58004 11.1432 9.34815 10.7288 9.46072 10.3302C9.6716 9.58342 10.0605 8.85242 10.5656 8.1827C10.815 7.85199 11.2852 7.78609 11.6159 8.0355ZM5.85808 8.95938C6.23718 8.79249 6.6798 8.96452 6.84669 9.34363C7.11028 9.9424 7.45558 10.5098 7.85615 11.0207C8.11171 11.3467 8.05464 11.8181 7.72867 12.0737C7.4027 12.3292 6.93127 12.2722 6.6757 11.9462C6.20194 11.3419 5.79051 10.6673 5.47383 9.94799C5.30694 9.56888 5.47897 9.12627 5.85808 8.95938ZM12.8996 9.82282C13.0122 9.4242 13.4266 9.1923 13.8252 9.30487C14.572 9.51575 15.303 9.90462 15.9727 10.4097C16.3034 10.6591 16.3693 11.1294 16.1199 11.4601C15.8705 11.7908 15.4002 11.8567 15.0695 11.6073C14.9832 11.5422 14.8965 11.4801 14.8096 11.4212C14.7873 11.6906 14.6197 11.9387 14.3534 12.051C13.9717 12.2119 13.5318 12.033 13.3709 11.6513C13.2763 11.4269 13.1336 11.2099 12.9296 11.0059C12.6576 10.734 12.6382 10.305 12.8714 10.0106C12.8727 9.94847 12.8819 9.88545 12.8996 9.82282ZM16.5828 11.9259C16.9088 11.6703 17.3802 11.7274 17.6358 12.0534C18.1096 12.6577 18.521 13.3322 18.8377 14.0516C19.0046 14.4307 18.8325 14.8733 18.4534 15.0402C18.0743 15.2071 17.6317 15.0351 17.4648 14.656C17.2012 14.0572 16.8559 13.4898 16.4554 12.9789C16.1998 12.6529 16.2569 12.1815 16.5828 11.9259ZM9.95814 11.9486C10.3398 11.7877 10.7797 11.9666 10.9406 12.3483C11.0352 12.5727 11.1779 12.7897 11.3819 12.9937C11.6539 13.2656 11.6733 13.6946 11.4401 13.9889C11.4388 14.0511 11.4296 14.1141 11.4119 14.1768C11.2993 14.5754 10.8849 14.8073 10.4863 14.6947C9.73955 14.4838 9.00854 14.095 8.33882 13.5899C8.00812 13.3405 7.94221 12.8702 8.19162 12.5395C8.44103 12.2088 8.91131 12.1429 9.24202 12.3923C9.32835 12.4574 9.41502 12.5195 9.50186 12.5784C9.52416 12.309 9.69179 12.0609 9.95814 11.9486ZM14.1454 12.7156C13.851 12.4821 13.4219 12.5014 13.1498 12.7735C12.9458 12.9775 12.7288 13.1202 12.5044 13.2148C12.1227 13.3758 11.9438 13.8156 12.1047 14.1973C12.217 14.4637 12.4652 14.6313 12.7347 14.6536C12.6756 14.7405 12.6135 14.8273 12.5484 14.9137C12.2989 15.2444 12.3648 15.7147 12.6956 15.9641C13.0263 16.2135 13.4965 16.1476 13.7459 15.8169C14.251 15.1472 14.6399 14.4162 14.8508 13.6694C14.9634 13.2708 14.7315 12.8564 14.3328 12.7438C14.2703 12.7262 14.2075 12.717 14.1454 12.7156ZM18.6384 15.672C19.0497 15.623 19.4229 15.9167 19.4719 16.328C19.5659 17.1171 19.5307 17.9294 19.3282 18.7337C19.2271 19.1354 18.8194 19.379 18.4178 19.2779C18.0161 19.1767 17.7725 18.7691 17.8736 18.3675C18.0273 17.7571 18.0569 17.1302 17.9824 16.5055C17.9334 16.0942 18.2271 15.721 18.6384 15.672ZM2.323 16.3092C2.6159 16.0163 3.09077 16.0163 3.38366 16.3092C3.62159 16.5472 3.86464 16.7531 4.11086 16.9301C4.44719 17.1719 4.52385 17.6405 4.28208 17.9768C4.04032 18.3132 3.57167 18.3898 3.23534 18.1481C2.92098 17.9221 2.61627 17.6632 2.323 17.3699C2.03011 17.077 2.03011 16.6021 2.323 16.3092ZM12.2297 16.427C12.4853 16.753 12.4282 17.2244 12.1023 17.48C11.498 17.9538 10.8234 18.3652 10.1041 18.6819C9.72495 18.8488 9.28234 18.6767 9.11545 18.2976C8.94855 17.9185 9.12059 17.4759 9.49969 17.309C10.0985 17.0454 10.6659 16.7001 11.1768 16.2996C11.5027 16.044 11.9742 16.1011 12.2297 16.427ZM4.87776 18.262C4.97891 17.8603 5.38652 17.6167 5.7882 17.7178C6.39852 17.8715 7.0254 17.9011 7.65018 17.8266C8.06149 17.7776 8.43465 18.0713 8.48367 18.4826C8.53269 18.8939 8.239 19.2671 7.8277 19.3161C7.03859 19.4101 6.22621 19.3749 5.42191 19.1724C5.02024 19.0713 4.77661 18.6636 4.87776 18.262ZM18.1326 19.8736C18.469 20.1153 18.5456 20.584 18.3039 20.9203C18.0779 21.2347 17.819 21.5394 17.5257 21.8327C17.2328 22.1255 16.7579 22.1255 16.465 21.8327C16.1721 21.5398 16.1721 21.0649 16.465 20.772C16.703 20.5341 16.9089 20.291 17.0859 20.0448C17.3276 19.7085 17.7963 19.6318 18.1326 19.8736Z" fill-rule="evenodd" />
            <path clip-rule="evenodd" d="M10.7264 12.4987C11.146 12.9902 11.6784 13.25 12.3115 13.25C12.4623 13.25 12.6027 13.2945 12.7203 13.3711C13.0679 12.9894 13.25 12.53 13.25 12C13.25 11.7694 13.3541 11.5631 13.5178 11.4255C13.1091 10.9831 12.5997 10.75 12 10.75C11.8564 10.75 11.7223 10.7097 11.6083 10.6397C11.0476 11.0717 10.75 11.634 10.75 12.3115C10.75 12.3762 10.7418 12.4389 10.7264 12.4987ZM9.83837 10.3528C9.72613 9.6583 9.71808 8.88892 9.82911 8.1052C10.2245 5.31415 12.0274 2.75 15.3115 2.75C15.7257 2.75 16.0615 2.41421 16.0615 2C16.0615 1.58579 15.7257 1.25 15.3115 1.25C10.9957 1.25 8.79854 4.68585 8.34394 7.8948C8.11552 9.50716 8.30132 11.1645 8.92762 12.4529C9.3338 13.2885 9.9443 13.9944 10.7532 14.395C9.96022 14.5776 9.04298 14.6153 8.1052 14.4824C5.31415 14.087 2.75 12.2842 2.75 9C2.75 8.58579 2.41421 8.25 2 8.25C1.58579 8.25 1.25 8.58579 1.25 9C1.25 13.3158 4.68585 15.513 7.8948 15.9676C9.50716 16.196 11.1645 16.0102 12.4529 15.3839C13.3211 14.9619 14.0493 14.3192 14.4405 13.4626C14.583 14.2041 14.6034 15.041 14.4824 15.8948C14.087 18.6858 12.2842 21.25 9 21.25C8.58579 21.25 8.25 21.5858 8.25 22C8.25 22.4142 8.58579 22.75 9 22.75C13.3158 22.75 15.513 19.3142 15.9676 16.1052C16.196 14.4928 16.0102 12.8355 15.3839 11.5471C15.0377 10.835 14.5432 10.2171 13.9039 9.80205C14.5291 9.72593 15.2064 9.73159 15.8948 9.82911C18.6858 10.2245 21.25 12.0274 21.25 15.3115C21.25 15.7257 21.5858 16.0615 22 16.0615C22.4142 16.0615 22.75 15.7257 22.75 15.3115C22.75 10.9957 19.3142 8.79854 16.1052 8.34394C14.4928 8.11552 12.8355 8.30132 11.5471 8.92762C10.8555 9.26381 10.2527 9.73999 9.83837 10.3528Z" fill-rule="evenodd" />
        </svg>
    );
};

export default SVG_Black_Hole_Outline;
