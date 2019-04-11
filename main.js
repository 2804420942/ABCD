var board = new Array();
var hasConflicted = new Array();
var score = 0;
 
$(function () {
    newgame();
});
 
function newgame() {
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}
function restartgame() {
    $("#gameover").remove();
    updateScore(0);
    newgame();
}
 
function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }
    }
 
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
 
    updateBoardView();
    score = 0;
}
 
function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
 
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            } else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                switch(board[i][j]){
                	case 2:
                	numberCell.text("A");
                	break;
                	case 4:
                	numberCell.text("B");
                	break;
                	case 8:
                	numberCell.text("C");
                	break;
                	case 16:
                	numberCell.text("D");
                	break;
                	case 32:
                	numberCell.text("E");
                	break;
                	case 64:
                	numberCell.text("F");
                	break;
                	case 128:
                	numberCell.text("G");
                	break;
                	case 256:
                	numberCell.text("H");
                	break;
                	case 512:
                	numberCell.text("I");
                	break;
                	case 1024:
            		numberCell.text("J");
            		break;
        			case 2048:
            		numberCell.text("K");
            		break;
        			case 4096:
            		numberCell.text("L");
            		break;
        			case 8192:
            		numberCell.text("M");
           			break;
                }
                
            }
 
            hasConflicted[i][j] = false;
        }
    }
 
    $(".number-cell").css("line-height", "100px");
    $(".number-cell").css("font-size", "60px");
}
 
function generateOneNumber() {
    if (nospace(board)) {
        return false;
    }
    //随机一个位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (board[randx][randy] == 0) {
            break;
        }
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }
 
    //随机一个数字
    var randNumber = Math.random() < 0.5 ? 2 : 4;
 
    //在随机位置显示随机数字
    board[randx][randy] = randNumber;
    ShowNumberWithAnimation(randx, randy, randNumber);
 
    return true;
}