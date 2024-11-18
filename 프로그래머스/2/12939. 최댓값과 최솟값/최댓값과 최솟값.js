function solution(s) {
    var answer = '';
    const splitString = s.split(' ')
    const maxNum = Math.max(...splitString)
    const minNum = Math.min(...splitString)
    
    return `${minNum} ${maxNum}`;
}