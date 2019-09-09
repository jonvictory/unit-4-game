window.onload = function () {
    
}

$(".startScreen").click(function(){
    $(".startScreen").css("display", "none");
    $(".charSelect").css("display", "block")
})

$(".charOne").click(function(){
    $(".charSelected").css("display", "block")
    $(".charSelect").css("display", "block")
    
})

$(".charTwo").click(function(){
    $(".charSelected").css("display", "block")
    $(".charSelect").css("display", "block")
})

$(".charThree").click(function(){
    $(".charSelected").css("display", "block")
    $(".charSelect").css("display", "block")
})

$(".charSelected").click(function(){
    $(".charSelect").css("display", "none");
    $(".charSelected").css("display", "none")
    $(".bg").css("display", "block")
})