let btnStartGame = document.querySelector('#start-game')
let userImg = document.querySelector('#userImg')
let computerImg = document.querySelector('#computerImg')
let result  =    document.querySelector('#result')
let images = document.querySelectorAll('img')
let display = document.querySelector('.display')

btnStartGame.addEventListener('click',startGame)

class Game {
    constructor(id,src){
    this.id = id
    this.src = src
    }

   getRandomId() {
    this.id = Math.floor(Math.random() * 3) + 1
    return this.id;
   }
  
   chooseImage(randomNum) {
     
       if(randomNum === 1){
        this.src = 'paper.png'
       }
       else if (randomNum === 2) {
        this.src = 'rock.png'
       }

       else if (randomNum === 3) {
        this.src = 'scissors.png'
       }
       return this.src
   } 
   
   calculateWinner(src1,src2){
      
    if(src1==='rock.png' && src2==='scissors.png'){
    result.innerHTML = 'rock is winner'
    
    }
    else if(src1 === 'paper.png' && src2 === 'scissors.png') {
     result.innerHTML = 'scissors is winner'
    }
    else if(src1 ==='scissors' && src2 ==='paper.png') {
     result.innerHTML = 'scissors is winner'
    }
    else if(src1 ==='scissors.png' && src2 ==='rock.png') {
     result.innerHTML = 'rock is winner'
    }
    else if(src1 ==='paper.png' && src2 ==='rock.png') {
     result.innerHTML = 'paper is winner'
    }
    else if(src1 === 'rock.png' && src2 === 'paper.png') {
     result.innerHTML = 'paper is winner'
    }
    else if(src1 === src2) {
     result.innerHTML = 'Draw'
    }

}

}




function startGame() {
    display.classList.add('shake')
    setTimeout(function shake()  {
        display.classList.remove('shake')
    }, 1000);

    setTimeout(() => {
       selectWinner() 
    }, 1000);
   
}
   
    function selectWinner() {
    let user = new Game()
    let computer = new Game()
   
    user.id = user.getRandomId()
    user.chooseImage(user.id)
    userImg.src = `${user.src}`
    
   
    computer.id =computer.getRandomId()
    computer.chooseImage(computer.id)
    computerImg.src = `${computer.src}`


    user.calculateWinner(user.src,computer.src)  
}
   





