let number=prompt("nhap vao");

function isNumber(value){
    if(isNaN(value)==false){
        return true;
    }
    return false;
}

let result=isNumber(number);
document.write("ket qua = "+result)