let arr=new Array;
let N=parseInt(prompt("nhap so phan tu mang"));
for(let i = 0; i<N;i++){
    arr[i]=prompt("nhap vao phan tu thu " + (i+1));
}

function daoArr(arr){
    let newArr=new Array;
    for(let i=0;i<arr.length;i++){
        newArr[i]=arr[arr.length-1-i];
    }
    return newArr;
}

let result=daoArr(arr);
document.write(result);