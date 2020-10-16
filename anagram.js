function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`anagram = ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    anagrams(' ', word);
}

console.log(printAnagram('east'))
// anagram =  east
// anagram =  eats
// anagram =  esat
// anagram =  esta
// anagram =  etas
// anagram =  etsa
// anagram =  aest
// anagram =  aets
// anagram =  aset
// anagram =  aste
// anagram =  ates
// anagram =  atse
// anagram =  seat
// anagram =  seta
// anagram =  saet
// anagram =  sate
// anagram =  stea
// anagram =  stae
// anagram =  teas
// anagram =  tesa
// anagram =  taes
// anagram =  tase
// anagram =  tsea
// anagram =  tsae
