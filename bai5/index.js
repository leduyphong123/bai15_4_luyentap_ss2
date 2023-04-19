let a=parseInt(prompt("nhap vao so thu nhat"));
let b=parseInt(prompt("nhap vao so thu hai"));
let c=parseInt(prompt("nhap vao so thu ba"));

function isMin(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<c){
        return b;
    }else{
        return c;
    }
}

let result=isMin(a,b,c);

alert("Min = " +result);