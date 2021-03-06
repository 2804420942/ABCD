function ShowNumberWithAnimation(i, j, randNumber) {
    var numberCell = $("#number-cell-" + i + "-" + j);
 
    numberCell.css("background-color", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    switch(randNumber){
                    case 2:
                    numberCell.text("A");
                    break;
                    case 4:
                    numberCell.text("B");
                    break;
    }
 
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50);
}
 
function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}
 
function updateScore(score) {
    $("#score").text(score);
}