function solution(n) {
    var answer = 0;
    
    let seiveOfEratos= (n) => {
        let seiveArr = new Array(n+1).fill(true)
        seiveArr[0]=seiveArr[1]=false;
        
        for(let i=0; i<=Math.sqrt(n); i++) {
            if(seiveArr[i]) {
                for(let j=i*i; j<=n; j+=i) {
                    seiveArr[j]=false;
                }
            }
        }
        return seiveArr.filter(i => i==true).length
    }
    return seiveOfEratos(n);
}