function solution(str_list) {
    
    let a = str_list.findIndex(i=> i==='l')
    let b = str_list.findIndex(i=> i==='r')
    console.log('a', a, 'b', b)
   if(a<0 && b<0) {
       return []
    } else if(b-a>=0) {
        return a>=0?str_list.slice(0,a):str_list.slice(b+1)
    } else if(b-a<0){
        return  b>=0?str_list.slice(b+1): str_list.slice(0,a)
    } else {
        return []
    }
}