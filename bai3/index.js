let number=parseInt(prompt("nhap mot so giai thua bat ki :"));

function giaiThua(value){
    let result=1;
    for(let i=1;i<=value;i++){
        result*=i;
    }
    return result;
}

let result=giaiThua(number);
document.write("ket qua giai thua = "+result);