import React from 'react';
const SVG_Telescope_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M17.8005 3.29712C18.2468 3.04382 18.5175 2.89201 18.727 2.80736C18.8236 2.76833 18.8796 2.75562 18.9095 2.75168C18.9321 2.74869 18.9393 2.75063 18.9428 2.75158L18.9438 2.75184C18.9472 2.7527 18.9535 2.75432 18.9701 2.76693C18.9927 2.78405 19.0337 2.82145 19.0969 2.90189C19.2343 3.07695 19.3907 3.34013 19.6487 3.77932L20.6974 5.5648C20.9554 6.00417 21.1089 6.26871 21.1942 6.47274C21.2334 6.56648 21.2453 6.61865 21.2487 6.64396C21.2503 6.65527 21.2499 6.66089 21.2499 6.66089L21.2496 6.6627L21.2487 6.66521C21.2487 6.66521 21.2455 6.67125 21.2378 6.68103C21.2209 6.70259 21.1829 6.74296 21.1004 6.80553C20.9215 6.94125 20.6527 7.09563 20.2062 7.34903L16.4708 9.46897C16.0481 9.70889 15.7955 9.85047 15.601 9.92888C15.512 9.96477 15.4631 9.97531 15.4401 9.9783L15.4339 9.97898L15.4289 9.97932L15.4259 9.97934L15.4233 9.97783C15.4215 9.97667 15.4184 9.97463 15.4141 9.97135C15.3956 9.95723 15.3586 9.92366 15.2994 9.84807C15.1702 9.68297 15.0222 9.43404 14.776 9.0149L13.656 7.10792C13.4032 6.67746 13.2534 6.41929 13.1701 6.22039C13.1319 6.12916 13.1205 6.079 13.1172 6.05538C13.1165 6.04992 13.1162 6.04622 13.1161 6.04404L13.1161 6.04144L13.1174 6.03922L13.1197 6.03582L13.1241 6.02995C13.1387 6.01114 13.1736 5.97337 13.2523 5.91347C13.4239 5.78286 13.6827 5.63414 14.1168 5.38774L17.8005 3.29712ZM19.3253 1.30118C18.8971 1.18838 18.5086 1.2778 18.1651 1.41658C17.8519 1.54312 17.4937 1.74648 17.0992 1.97043L13.3372 4.1055C12.9554 4.32208 12.6059 4.52039 12.3438 4.71989C12.0568 4.93834 11.7842 5.22356 11.6688 5.64702L8.18897 7.62196L8.14969 7.64425C7.76796 7.86084 7.41841 8.05916 7.15631 8.25866C6.8691 8.47728 6.59627 8.76277 6.48106 9.18677L3.0534 11.1321L3.01407 11.1544C2.61979 11.3781 2.2614 11.5815 1.99298 11.7851C1.69925 12.0079 1.42061 12.2977 1.30319 12.7285C1.18544 13.1605 1.27961 13.5514 1.42185 13.8916C1.55124 14.201 1.75878 14.5543 1.98608 14.9412L2.03212 15.0196C2.25949 15.4068 2.46687 15.76 2.67456 16.0245C2.90333 16.3159 3.19656 16.5859 3.62597 16.699C4.05422 16.8118 4.44268 16.7224 4.78617 16.5836C5.09939 16.4571 5.45762 16.2537 5.85214 16.0297L9.30688 14.0691L9.32585 14.0743C9.74325 14.1861 10.121 14.0988 10.4502 13.966C10.4975 13.947 10.5459 13.926 10.5953 13.9035L7.30876 21.709C7.14802 22.0908 7.32719 22.5306 7.70894 22.6913C8.0907 22.8521 8.53047 22.6729 8.69121 22.2911L12 14.4328L15.3088 22.2911C15.4695 22.6729 15.9093 22.8521 16.291 22.6913C16.6728 22.5306 16.852 22.0908 16.6912 21.709L12.8727 12.6401L15.0178 11.4228L15.0377 11.4282C15.4551 11.5401 15.8329 11.4528 16.162 11.32C16.4607 11.1996 16.8015 11.0061 17.1727 10.7954L20.9859 8.63129C21.3802 8.40757 21.7386 8.20421 22.007 8.00059C22.3007 7.77777 22.5794 7.48792 22.6968 7.05718C22.8145 6.62519 22.7204 6.23431 22.5781 5.89411C22.4487 5.58463 22.2412 5.23135 22.0139 4.84443L20.9421 3.01965L20.9192 2.98062C20.6918 2.59338 20.4844 2.24021 20.2767 1.97565C20.048 1.68424 19.7547 1.41428 19.3253 1.30118ZM3.79377 12.4366L6.79131 10.7354C6.89733 10.9336 7.02152 11.145 7.15218 11.3674L7.17507 11.4064L7.79321 12.4588C7.90855 12.6552 8.01883 12.8431 8.12677 13.0141L5.15076 14.7031C4.70444 14.9564 4.43378 15.1082 4.22428 15.1928C4.12768 15.2318 4.07172 15.2446 4.04184 15.2485C4.0192 15.2515 4.01201 15.2495 4.0085 15.2486L4.0075 15.2483C4.00412 15.2475 3.99779 15.2459 3.98115 15.2332C3.95856 15.2161 3.91757 15.1787 3.85442 15.0983C3.717 14.9232 3.56055 14.66 3.3026 14.2209C3.04454 13.7815 2.89106 13.517 2.80576 13.3129C2.76656 13.2192 2.75471 13.167 2.75126 13.1417C2.7497 13.1303 2.75003 13.1247 2.75003 13.1247L2.75039 13.123L2.75132 13.1205C2.75132 13.1205 2.75448 13.1144 2.76216 13.1046C2.77907 13.0831 2.81704 13.0427 2.89953 12.9801C3.07845 12.8444 3.34727 12.69 3.79377 12.4366ZM11.9785 7.19602L8.92934 8.92651C8.49518 9.17291 8.2364 9.32163 8.06481 9.45224C7.98611 9.51214 7.9512 9.54991 7.93656 9.56873C7.93317 9.57308 7.93108 9.57615 7.92991 9.57799L7.92858 9.58022L7.92862 9.58281C7.92871 9.58499 7.92899 9.58869 7.92974 9.59416C7.93302 9.61777 7.94437 9.66794 7.98258 9.75916C8.06589 9.95806 8.21566 10.2162 8.46848 10.6467L9.06418 11.6609C9.31035 12.0801 9.45838 12.329 9.58756 12.4941C9.64671 12.5697 9.68379 12.6033 9.70228 12.6174C9.70657 12.6207 9.70961 12.6227 9.71145 12.6239L9.71403 12.6254L9.71702 12.6254C9.7192 12.6253 9.72285 12.625 9.72821 12.6243C9.75128 12.6213 9.80018 12.6108 9.88919 12.5749C10.0836 12.4965 10.3363 12.3549 10.759 12.115L11.5334 11.6755L12.2866 11.248L13.8382 10.3674C13.7304 10.1966 13.6203 10.009 13.5051 9.8128L12.3397 7.82863C12.2089 7.60599 12.0846 7.39438 11.9785 7.19602Z", "fill-rule": "evenodd" })));
};
export default SVG_Telescope_Outline;
