import _ from "lodash";
import Icon from "../assets/images/flutter-red.png";
import Data from "../assets/csv/data.csv";
import Notes from "../assets/xml/data.xml";
import JsonData from "../assets/json/data.json";
function component(){
    let div = document.createElement('div');
    

    div.innerText = _.join(["hello","world"],' ');


    let myIcon = new Image();

    myIcon.src = Icon;

    div.appendChild(myIcon);

    div.classList.add('hello');
    return div;
}

document.body.appendChild(component());
console.log('index load load ');


console.log(Data);
console.log(Notes);

console.log(JsonData);


require("../index.css");