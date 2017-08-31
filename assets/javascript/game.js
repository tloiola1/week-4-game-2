

$(".text").attr("style", "display: none");
$(".hero").attr("style", "display: none");
$("button").attr("style", "display: none");


function attack(){

	$(".myEnemy").empty();
	$("button").text("Pick another enemy");
	pickEnemy = false;



	if(counter == 3){
		$(".hero").attr("style", "display: initial");
		$("button").attr("style", "display:none");
		$(".myAvatar").empty();
		$(".text").attr("style", "display: none");
		myImgAvatar.attr("style", "width: inherit")
		myImgAvatar.removeClass("thumbnail","col-sm-3", "col-xs-3");
		$(".myHero").html(myImgAvatar);
		$(".myPower").text("Here Is Our Hero!!")
		$("myHero").on("click", function(){
			location.reload(true);
		});
	}
}



var pickAvatar = this.pickAvatar; 
var pickEnemy = this.pickEnemy; 
var counter = this.counter;
var myImgAvatar = this.myImgAvatar;
var myImgEnemy = this.myImgEnemy;
pickAvatar = false;
pickEnemy = false;
counter = 0;



$(".avatars").on("click", function(){
	$(".initialText").attr("style", "display: none !important");
	$(".text").attr("style", "display: initial");
	var imgClicked = $("<img>");
	var a = $(".avatars").attr("id");
	imgClicked = $(this);
	// a = $(this.id);
	imgClicked.addClass("avatars");
	imgClicked.attr("src","imgClicked");
	$("button").attr("style", "display: initial !important; margin-left: 20px; margin-right: 20px");

if(pickAvatar == false && pickEnemy == false){
	pickAvatar = true;
	myImgAvatar = imgClicked;
	$(".myAvatar").html(myImgAvatar);	
}
else if(pickAvatar  == true && pickEnemy == false){
		pickEnemy = true;
		counter++;
		myImgEnemy = imgClicked;
		$(".myEnemy").html(myImgEnemy);

		$("button").text("Attack");

		// console.log(a.selector);
}


if(pickAvatar == true && pickEnemy == true){
	$("button").on("click", function(){
		attack();
	});
}

});