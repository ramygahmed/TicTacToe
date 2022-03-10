let buttons = (function(){
    let restart = document.getElementById('restart')
    let start = document.getElementById('start')
    return {
        restart, 
        start
    }
}())

let tictactoe = function (){
    let game = [[],[],[]];
    let boxes = document.querySelectorAll('.box');
    let pTurn = document.getElementsByClassName('turn')[0];
    let arr = [
        [[0,0],[0,1],[0,2]],
        [[0,0],[1,0],[2,0]],
        [[0,0],[1,1],[2,2]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,1],[2,0]],
        [[0,2],[1,2],[2,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
    let checkerx = 0;
    let checkero = 0;
    let playerTurn = 0;
    for (let i = 0; i < boxes.length; i++) {
        pTurn.textContent = 'First Player Turn'
        boxes[i].textContent = '';
        boxes[i].removeEventListener('click',e)
    }
    
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click',e)
        function e () {
            let winner = '';
            
            
            if (playerTurn == 0){
                boxes[i].textContent = 'x';
                game[boxes[i].getAttribute('data-valueX')][boxes[i].getAttribute('data-valueY')] = 'x';
                winner = winChecker();
                if (winner != 'n/a'){
                    pTurn.textContent = winner
                    playerTurn = 5;
                } else{
                        playerTurn ++;
                        pTurn.textContent = 'Second Player Turn'
                    }
                
            }else if(playerTurn == 1){
                
                    boxes[i].textContent = 'o';
                    game[boxes[i].getAttribute('data-valueX')][boxes[i].getAttribute('data-valueY')] = 'o';
                    winner = winChecker()
                        if (winner != 'n/a'){
                            pTurn.textContent = winner
                            playerTurn = 5; 
                        } else{
                            playerTurn --;
                            pTurn.textContent = 'First Player Turn'
                        }
                
                
            }
            boxes[i].removeEventListener('click',e)
            }
    }
    
    function winChecker (){
            
            for (let outer = 0; outer < arr.length; outer++) {
                for (let inner = 0; inner < arr[outer].length; inner++) {
                    if(game[arr[outer][inner][0]][arr[outer][inner][1]] == 'x'){
                        checkerx++;
                        if (checkerx == 3){return 'x wins' }
                    }
                    if(game[arr[outer][inner][0]][arr[outer][inner][1]] == 'o'){
                        checkero++;
                        if (checkero == 3){return 'o wins'}
                    }
                }
                checkerx = 0;
                checkero = 0;
            }
            if(game[0].length == 3 && game[1].length == 3 && game[2].length == 3){
            return 'tie'    
            } else{
                return 'n/a'
            }
            
    }
    
};

    buttons.start.addEventListener('click', tictactoe)
    buttons.restart.addEventListener('click',tictactoe) 


