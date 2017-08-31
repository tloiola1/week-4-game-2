function attack(){

	$(".myEnemy").empty();
	$("button").text("Pick another enemy");
	pickEnemy = false;



	if(counter == 3){
		$("button").attr("style", "display:none");
		alert("We Have Our Savier??");
	}
	console.log("Attack Porra");
}



var pickAvatar = this.pickAvatar; 
var pickEnemy = this.pickEnemy; 
var counter = this.counter;

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
	var myImgAvatar = imgClicked;
	$(".myAvatar").html(myImgAvatar);	
}
else if(pickAvatar  == true && pickEnemy == false){
		pickEnemy = true;
		counter++;
		var myImgEnemy = imgClicked;
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