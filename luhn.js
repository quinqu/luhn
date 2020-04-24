//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (num) => {
  

  if(num.match(/.*[a-zA-Z&:;#@!].*/)){
    return false;
  }
  
  if(num.trim().length <= 1){
    return false

  }
  num = num.replace(/\s/g, '');

  if (num.length % 2 !== 0){
    num = parseInt(num, 10).toString()
  }

  let array = num.split('');
  let sum = 0; 
 
  for(let i = 0; i < array.length; i++){
    if(array[i].match(/\d/)){
      if(i%2 === 0 && (parseInt(array[i], 10) + parseInt(array[i], 10) < 9)){

        sum += (parseInt(array[i], 10) + parseInt(array[i], 10));

      }else if(i%2 === 0){
        sum += ((parseInt(array[i], 10) + parseInt(array[i], 10)) - 9);

      }else{
        sum += parseInt(array[i], 10);
      }
    }

  }

  return sum % 10 === 0 
};
