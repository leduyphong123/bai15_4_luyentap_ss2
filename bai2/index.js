let r=parseInt(prompt("nhap vao ban kinh duong tron:"));

function sPicture(value){
    return (value*value*3.14);
}

function cPisture(value){
    return (value*2*3.14);
}

let s=sPicture(r);
let c=cPisture(r);
document.write("dien tich hinh tron = "+ s+"<br/>");
document.write("chu vi hinh tron = "+ c);