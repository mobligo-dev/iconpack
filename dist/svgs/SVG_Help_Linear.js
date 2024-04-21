import React from 'react';
const SVG_Help_Linear = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "black", "stroke-width": "1.5" }),
        React.createElement("circle", { cx: "12", cy: "12", r: "4", stroke: "black", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M15 9L19 5", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M5 19L9 15", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M9 9L5 5", "stroke-width": "1.5" }),
        React.createElement("path", { d: "M19 19L15 15", "stroke-width": "1.5" })));
};
export default SVG_Help_Linear;
