function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2)
        return (convertToBinary(Math.floor(num/2))+ binary)
    }else{
        return ''; //base
    }
}

let num = 25
console.log(convertToBinary(num))
// 11001