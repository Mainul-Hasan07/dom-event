//handle red button click by setting function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// Just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


//handle event anonymous function
const greenButton = document.getElementById('make-green-button');
      // Direct use function as onclick value.when diredctly use function ,set function name is optional.it's called anonymous function.
      greenButton.onclick = function (){
          document.body.style.backgroundColor = 'green';
      }

//handle event with EventLister 
const goldenButton = document.getElementById('make-goldenrod');
      goldenButton.addEventListener('click',makeGoldenRod);
      function makeGoldenRod(){
          document.body.style.backgroundColor = 'goldenrod'
      }
    
      
//add Event Lister
const hotPinkButton = document.getElementById('make-hotpink');
      hotPinkButton.addEventListener('click',function (){
          document.body.style.backgroundColor = 'hotpink';
      })

//Direct Shortcut
document.getElementById('light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})
      