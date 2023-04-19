let value=parseInt(prompt("nhap vao mot so bat ky"));

let result=binhPhuong(value);
document.write("result = "+result);

function binhPhuong(value){
    return value*value;
}