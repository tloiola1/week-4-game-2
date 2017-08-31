
function attack(){

	$(".myEnemy").empty();
	$("button").text("Pick another enemy");
	pickEnemy = false;



	if(counter == 3){
		$("button").attr("style", "display:none");
		$(".myAvatar").empty();
		$(".text").empty();
		myImgAvatar.attr("style", "width: inherit")
		myImgAvatar.removeClass("thumbnail");
		$(".myHero").html(myImgAvatar);
		$(".myPower").text("Here IS Our Hero!!")
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
	var imgClicked = $("<img>");
	var a = $(".avatars").attr("id");
	imgClicked = $(this);
	a = $(this.id);
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