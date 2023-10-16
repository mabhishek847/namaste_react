
//     const heading=React.createElement("h1",{},
//     "hello this one is first react project");
//     console.log(heading);
//     const rook=ReactDOM.createRoot(document.getElementById("roo"));
//     rook.render(heading);
// /**
//  * <div id="parent">
//  * 
//  *            <div id="child">
//  *                     <h1>hey i m cute boy </h1>
//                        <h2>  who is this    </h2>
//  * 
//  *             </div>
                        // <div id="children">

                        // </div>
//  * 
//  * </div>
//  */

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},

[React.createElement("h1",{},"i m cute boy"),
React.createElement("h2",{},"who is this")]),

React.createElement("div",{id:"children"},
[React.createElement("h1",{},"i m  not cute boy"),
React.createElement("h2",{},"who is hhhhhhhhh this")]));

console.log(parent);
const rook=ReactDOM.createRoot(document.getElementById("roo"));
rook.render(parent);
