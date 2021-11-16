//write your code here
const replaceWithYerr = (array, startIndex, numToReplace) => {
  const newArray = [];
  if (startIndex === undefined && numToReplace === undefined){
    while(newArray.length != array.length){
      newArray.push('yerr');
    }
  } else if (numToReplace === undefined){
    for (let i = 0; i < array.length; i++){
      if (i < startIndex){
        newArray.push(array[i]);
      } else {
        newArray.push('yerr');
        }
      }
    } else {
      for (let i = 0; i < array.length; i++){
      if (i >= startIndex && i < startIndex+numToReplace){
        newArray.push('yerr');
      } else {
        newArray.push(array[i]);
        }
      }
    }
  return newArray;
};
console.log(replaceWithYerr(['Jan','feb','march','april','may','june'], 1, 3));