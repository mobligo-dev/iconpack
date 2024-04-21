import React from 'react';
const SVG_Clock_Circle_Linear = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "black", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M12 8V12L14.5 14.5", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5" })));
};
export default SVG_Clock_Circle_Linear;
