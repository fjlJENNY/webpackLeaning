

import print from './print';

require("../index.css");

 async function  component() {
    let div = document.createElement('div');
    let btn = document.createElement('button');


    const {default : _}  = await import(/*webpackChunkName:"lodash"*/ 'lodash');


    
    div.classList.add('hello');
    div.innerText = _.join(["hello","world"],' ');

    btn.onclick = print;
    btn.innerText = '点击这儿,查看 console';


    div.appendChild(btn);

    return div;
}

component().then((component)=>{
    document.body.appendChild(component);
});





