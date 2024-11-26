function solution(my_string) {
    var answer =Array(52).fill(0);  
    for(let i = 0; i < my_string.length; i++) {
        if(my_string.charCodeAt(i) > 64 && my_string.charCodeAt(i) < 91) {
               answer[my_string.charCodeAt(i)-65]++;
            } else if(my_string.charCodeAt(i) > 96 && my_string.charCodeAt(i) < 123) {
                answer[my_string.charCodeAt(i)-71]++;
            }
            
        }
    return answer;
}