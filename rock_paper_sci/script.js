let score= JSON.parse(localStorage.getItem('score'))|| 
{
    wins:0,
    lose:0,
    tie:0
}

function resetfun(){
    score.wins=0;
    score.lose=0;
    score.tie=0;
    localStorage.removeItem('score');
    //document.querySelector('.score-para').hid;
    window.location.reload();  
    document.querySelector('.score-para').innerHTML=`Wins: ${score.wins} Loses: ${score.lose} Ties: ${score.tie}`;
 
    //document.querySelector('result-para').style.dis
//document.getElementsByClassName('result-para').style().display='none';

// alert(` Scores Reset
    // Wins: ${score.wins} Loses: ${score.lose} Ties: ${score.tie}`)
}
function compfun(value){
      const a=Math.random()
   let compval='';

   if(a>=0&&a<1/3){
        console.log('Computer is rock')
        compval='rock';
        
    }
    else if(a>=1/3&&a<2/3){
        console.log('Computer is paper')
        compval='paper'
    }
    else{
        console.log('Computer is scissor')
        compval='scissors'
    }
    resultfun(compval,value);
}
function resultfun(compval,value){
    let result='';
    if(value==='rock'){
        if(compval==='rock'){
            //alert('You:Rock Computer:Rock It\'s a Tie!!')
        result='It\'s a Tie!!'
        }
        else if(compval==='scissors'){
            //alert('You:Rock Computer:Scissor You Win!!')
            result='You Win!!'
        }else{
            //alert('You:Rock Computer:Paper You Lose!!')
            result='You Lose!!'
        }
    }else if(value==='scissors'){
        if(compval==='rock'){
            //alert('You:Scissor Computer:Rock You Lose!!')
        result='You Lose!!'
        }
        else if(compval==='scissors'){
            //alert('You:Scissor Computer:Scissor It\'s a Tie!!')
        result='It\'s a Tie!!'
        }else{
           // alert('You:Scissor Computer:Paper You Win!!')
            result='You Win!!'
        }
    }else{
        if(compval==='rock'){
            // alert('You:Paper Computer:Rock You Win!!')
            result='You Win!!'
        }
        else if(compval==='scissors'){
            //alert('You:Paper Computer:Scissor You Lose!!')
            result='You Lose!!'
        }else{
            //alert('You:Paper Computer:Paper It\'s a Tie!!')
            result='It\'s a Tie!!'
        }

           }
           if(result==='You Win!!'){
            score.wins+=1;
        }else if(result==='You Lose!!'){
            score.lose+=1;
        }else{
            score.tie+=1;
        }
        localStorage.setItem('score',JSON.stringify(score))  
        document.querySelector('.result-para').innerHTML=`${result}`;

        document.querySelector('.moves-para').innerHTML=`
        You: <img src="images/${value}-emoji.png" class="icons-img">
        Computer: <img src="images/${compval}-emoji.png" class="icons-img">`;
        document.querySelector('.score-para').innerHTML=`Wins: ${score.wins} Loses: ${score.lose} Ties: ${score.tie}`;

        
        // alert(`You picked: ${value} Computer picked: ${compval} ${result}
        // `)

}
