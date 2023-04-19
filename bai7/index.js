var a=parseInt(prompt("nhap vao so thu nhat"));
var b=parseInt(prompt("nhap vao so thu hai"));

function doiIndex(a,b){
    let num=a;
    a=b;
    b=num;
    let arr=[a,b];
    return arr;
}
let result=doiIndex(a,b);
document.write("a= " + result[0] +" <br/>" + "b=" +result[1]);
