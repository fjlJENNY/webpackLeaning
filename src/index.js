import Print from './print';
import {cube} from "./math";

require("../index.css");

 async function  component() {
    let div = document.createElement('div');
    let btn = document.createElement('button');


    const {default : _}  = await import(/*webpackChunkName:"lodash"*/ 'lodash');

    div.classList.add('hello');
    div.innerText = _.join(["hello","world"],' ');

    btn.onclick = Print;
    btn.innerText = '点击这儿,查看 console';


    div.appendChild(btn);

    return div;
}

component().then((component)=>{
    document.body.appendChild(component);
});


function component2(){
    const element = document.createElement('pre');

    element.innerHTML = ['Hello' , 'world' , '5 cubed is equal to ' + cube(5)].join("\n\n");

    return element;
}


document.body.appendChild(component2());



// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('Accepting the updated printMe module!');
//         Print();
//     });
// }





