function count(targetString){
const Characters =['a','e','i','o','u'];
let number = 0;

for (var i =0; i < targetString.length;i++){
  if(Characters.includes(targetString[i])){
    number++;
  }
}

return number;
}

count('aeiobzxceiaipbiox');