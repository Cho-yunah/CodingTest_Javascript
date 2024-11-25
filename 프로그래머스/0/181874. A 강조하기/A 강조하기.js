function solution(myString) {
    
    return Array.from(myString).map(i => i==='a'? i='A': i.charCodeAt()>65 && i.charCodeAt()<=90? i.toLowerCase(): i).join('')
}