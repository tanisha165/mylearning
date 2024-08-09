var computers=[
  {name:'Apple', ram:24 },
  {name:'compaq', ram:4},
  {name:'Acer', ram:32}
];

var computersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram< 16){
    allSomeComputersCanRunProgram = false;
  }else{
    onlySomeComputersCanRunProgram = true;
  }
}

allComputerCanRunProgram;
onlySomeComputersCanRunProgram;

computers.every(function(computer){
  return computer.ram > 16;
});