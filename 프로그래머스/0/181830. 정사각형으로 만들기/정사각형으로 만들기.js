function solution(arr) {
    let answer =[[]];
    
    let column = arr.length;
    let row = arr[0].length;    
    
    if(column > row) {
        arr.map(i=> { 
            for(let n=0; n<column-row; n++) i.push(0)
        })
    }
    else if(column < row) {
        for(let m=0; m<row-column; m++) {
           arr.push(Array(row).fill(0))
        }
    } 
    return arr
}