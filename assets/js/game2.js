window.onload = function () {
var heroOne = {
    hp: 800,
    ap: 6,
    cap: 2
}

var heroTwo = {
    hp: 600,
    ap: 8,
    cap: 4
}

var heroThree = {
    hp: 1000,
    ap: 4,
    cap: 1
}

var villainOne = {
    hp: 200,
    ap: 3,
    cap: 3
}

var villainTwo = {
    hp: 100,
    ap: 4,
    cap: 4
}

var villainThree = {
    hp: 300,
    ap: 2,
    cap: 2
}

var villainFour = {
    hp: 50,
    ap: 5,
    cap: 5
}

}

$(".startScreen").click(function(){
    $(".startScreen").fadeOut("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charOne").click(function(){
    $("#charSelOne").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
    
})

$(".charTwo").click(function(){
    $("#charSelTwo").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charThree").click(function(){
    $("#charSelThree").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charSelected").click(function(){
    $(".charSelect").fadeOut("slow");
    $(".charSelected").fadeOut("slow");
    $(".bg").fadeIn("slow");
})

$(".mapArea").click(function() {
    $(".fight").fadeIn("slow");
})