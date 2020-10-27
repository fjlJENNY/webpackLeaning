import _ from "lodash";
function component(){
    let div = document.createElement('div');
    div.innerText = _.join(["hello","world"],' ');
    div.classList.add('hello');
    return div;
}

document.body.appendChild(component());
console.log('index load load ');

require("../index.css");