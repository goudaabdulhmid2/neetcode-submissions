class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
     function checkRow( row, idxNum){
        for(let i =0; i<9; i++){
            if(i == idxNum) continue;
            if(board[row][i] == board[row][idxNum]) return false
        }

        return true
     }

     function checkCol( col, idxNum){
        for(let i =0; i<9; i++){
            if(i == idxNum) continue;
            if(board[i][col] == board[idxNum][col]) return false
        }

        return true
     }

     function checkBox(sI,sJ,eI,eJ,ni,nj ){
        for(let i = sI; i<=eI; i++){
            for(let j = sJ; j<=eJ; j++){
                if(ni == i && nj == j) continue
                if(board[ni][nj] == board[i][j]) return false
                
            }

        }
            return true
     }


     for(let i = 0; i<9; i++){
        for(let j =0; j<9; j++){
            if(board[i][j] !=='.'){
                if(!checkRow(i,j) || !checkCol(j,i)) return false

                let flag = true
                if(i>= 0 && j <=2) flag= checkBox(0,0,2,2,i,j)
                else if(i>= 0 && j <=5) flag= checkBox(0,3,2,5,i,j)
                else if(i>= 0 && j <=8) flag= checkBox(0,6,2,8,i,j)

                if(i>= 3 && j <=2) flag= checkBox(3,0,5,2,i,j)
                else if(i>= 3 && j <=5) flag= checkBox(3,3,5,5,i,j)
                else if(i>= 3 && j <=8) flag= checkBox(3,6,5,8,i,j)

               if(i>= 6 && j <=2) flag= checkBox(6,0,8,2,i,j)
                else if(i>= 6 && j <=5) flag= checkBox(6,3,8,5,i,j)
                else if(i>= 6 && j <=8) flag= checkBox(6,6,8,8,i,j)


                if(!flag) return flag

            }
                
        }
     }

     return true


    }
}
