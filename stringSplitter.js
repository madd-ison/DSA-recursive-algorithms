function stringSplitter(str, separator) {
    let arr = [];
    let subStr = '';
    // iterate through string
    for (let i = 0; i < str.length; i++) {
      // if the letter is the separator
      if (str[i] === separator) {
        // push current substring to array
        // recursively call func on spliced version of string
        // concatenate existing array with result of recursive call
        arr.push(subStr);
        arr = arr.concat(stringSplitter(str.slice(i + 1), separator));

        break;
      } else {
        // if not the separator keep building substring
        subStr = subStr.concat(str[i]);
        // if reached the end of the string without hitting a separator
        // push substr
        if (i === str.length - 1) {
          arr.push(subStr)
        }
      }
    }
    return arr;
}
  
console.log(stringSplitter('20/20/2020', '/'))
// [ '20', '20', '2020' ]