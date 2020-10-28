import _ from "lodash";

import print from './print';

function component(){
    let div = document.createElement('div');
    let btn = document.createElement('button');

    div.innerText = _.join(["hello","world"],' ');


    btn.onclick = print;


    btn.innerText = '点击这儿,查看 console';


    div.appendChild(btn);



    div.classList.add('hello');
    return div;
}

document.body.appendChild(component());

console.log('index load load ');


require("../index.css");