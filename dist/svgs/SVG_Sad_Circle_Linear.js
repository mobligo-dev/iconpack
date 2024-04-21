import React from 'react';
const SVG_Sad_Circle_Linear = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "black", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17", "stroke-linecap": "round", "stroke-width": "1.5" }),
        React.createElement("ellipse", { cx: "15", cy: "10.5", fill: "black", rx: "1", ry: "1.5" }),
        React.createElement("ellipse", { cx: "9", cy: "10.5", fill: "black", rx: "1", ry: "1.5" })));
};
export default SVG_Sad_Circle_Linear;
