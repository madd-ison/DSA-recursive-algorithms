const countSheep = function(num){
    //base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //general case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}
let num = 3
console.log(countSheep(num))
// --> Another sheep jumped over the fence.
// --> Another sheep jumped over the fence.
// --> Another sheep jumped over the fence.
// --> All sheep jumped over the fence.