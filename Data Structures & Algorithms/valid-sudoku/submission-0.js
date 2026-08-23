class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boardLength = board.length

        for (let i = 0; i < boardLength; i++) {
            const rows = new Set()

            for (let j = 0; j < boardLength; j++) {
                const currNum = board[i][j]
                if (currNum == ".") continue
                if (rows.has(currNum)) return false

                rows.add(currNum)
            }
        }

        for (let j = 0; j < boardLength; j++) {
            const cols = new Set()

            for (let i = 0; i < boardLength; i++) {
                const currNum = board[i][j]
                if (currNum == ".") continue
                if (cols.has(currNum)) return false

                cols.add(currNum)
            }

        }

        for (let square = 0; square < boardLength; square++) {
            const squares = new Set()

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i
                    const col = (square % 3) * 3 + j
                    const currNum = board[row][col]

                    if (currNum == ".") continue
                    if (squares.has(currNum)) return false

                    squares.add(currNum)
                }
            }
        }

        return true
    }
}
