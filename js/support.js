function getPosTop(i, j) {
    return 20 + i * 120;
}
 
function getPosLeft(i, j) {
    return 20 + j * 120;
}
 
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#DB7093";
            break;
        case 4:
            return "#FFB996";
            break;
        case 8:
            return "#FFCF81";
            break;
        case 16:
            return "#00DFA2";
            break;
        case 32:
            return "#FFB7B7";
            break;
        case 64:
            return "#F31559";
            break;
        case 128:
            return "#96C291";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#7BD3EA";
            break;
        case 1024:
            return "#61A3BA";
            break;
        case 2048:
            return "#DF826C";
            break;
        case 4096:
            return "#D0BFFF";
            break;
        case 8192:
            return "#BEADFA";
            break;
    }
}
 
function getNumberColor(number) {
    return "white";
}
 
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
 
function nomove(board) {
    if (canMoveDown(board) || canMoveLeft(board) || canMoveRight(board) || canMoveUp(board)) {
        return false;
    }
    return true;
}
 
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
 
function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
 
function canMoveUp(board) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
 
function canMoveDown(board) {
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
 
function noBlokHorizontalCol(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}
 
function noBlokHorizontalRow(row1, row2, col, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}