function solution(arr, k) {
    var answer = [];
    let result =[];
    
   for(i in arr){
       if(result.includes(arr[i])===false) result.push(arr[i]);
       if(result.length>=k) {
           result = result.slice(0,k);
           answer=result;
       } else {
           answer= [...result, ...new Array(k-result.length).fill(-1)]
       }
   }
      
    
    return answer;
}