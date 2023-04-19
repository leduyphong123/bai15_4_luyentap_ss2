let string=prompt("nhap vao mot chuoi");
let charString=prompt("nhap ky tu can tim");


function checkCharString(string,charString){
    let count=0;
    for(let i=0;i<string.length;i++){
        let checkChar=string.indexOf(charString,i);
        if(checkChar!=-1){
            count++;
            i=checkChar;
        }
    }
    if(count==0){
        return -1;
    }else{
        return count;
    }
}

let result=checkCharString(string,charString);
document.write("result = "+  result);