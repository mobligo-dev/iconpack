import React from 'react';
const SVG_Info_Circle_Linear = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M12 17V11", "stroke-linecap": "round", "stroke-width": "1.5" }),
        React.createElement("circle", { r: "1", transform: "matrix(1 0 0 -1 12 8)" })));
};
export default SVG_Info_Circle_Linear;
