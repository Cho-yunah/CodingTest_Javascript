function solution(arr) {
    var answer = [...arr];
    
    const length = arr.length;
    let minNum = 0;
    
    for(let i=0; i<100; i++) {
        if(2**i < length) {
            console.log(i, '아직 배열길이보다 작음')
        } else if (2**i >= length) {
            console.log(2**i, '배열길이와 같거나 큼')
            minNum=2**i;
            break;
        }
    }
    if(length< minNum) {
        let newArr =Array(minNum-length).fill(0);
        answer = answer.concat(newArr)
    }
    return answer;
}