import React from 'react';
const SVG_Danger_Circle_Linear = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M12 7V13", "stroke-linecap": "round", "stroke-width": "1.5" }),
        React.createElement("circle", { cx: "12", cy: "16", r: "1" })));
};
export default SVG_Danger_Circle_Linear;
