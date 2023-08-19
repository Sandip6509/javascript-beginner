// 1 Giving a string, reverse each word in sentense.
  let str = `Shayad meri shaadi ka khayal Dil mein aaya hai Isiliye mummy ne meri tumhe Choda tha ghar pe`;
  const storeStr = str.split(` `).map(function(word){
    return word.split("").reverse().join("");
  });
 console.log(storeStr.join(" "));
// 2 how to check if an object is an array or not? Provide some code.
  function checkArray(elem){
    return Array.isArray(elem);
  }
  console.log(checkArray([]));
  console.log(checkArray({}));
// 3 How to empty an array in javascript?
  let arr = [1,2,3,4,5,6,7,8];
  arr.length = 0;
  console.log(arr);

// 4 How would you check if a number is an integer?
  let num = 125;

  if(num%1 === 0){
    console.log('Integer');
  }else{
    console.log('Not Integer');
  }
// 5 make this work duplicate() pass array duplicate array
    function duplicate(arr){
       return arr.concat(arr);
    }

    console.log(duplicate([1,2,3,4,5]));

// Functions
// 6 Write javascript function that reverse a number
// Method1
 function reverseNumber(num){
    return Number(num.toString().split("").reverse().join(""));
 }
 console.log(reverseNumber(125));

// Method2

function reverseNum(num){
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNum(45566666));