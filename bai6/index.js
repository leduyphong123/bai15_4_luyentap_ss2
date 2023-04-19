let number=parseInt(prompt("nhap vao mot so nguyen bat ky"));

function isNumber(value){
    if(value>0){
        return true;
    }
    return false;
}

let result=isNumber(number);
alert("result = " + result);