var pickAvatar = false;
var pickEnemy = false;


$(".avatars").on("click", function(){
	var imgClicked = $("<img>");
	imgClicked = $(this);
	imgClicked.addClass("avatars");
	imgClicked.attr("src","imgClicked");

if(pickAvatar == false && pickEnemy == false){
	pickAvatar = true;
	$(".myAvatar").html(imgClicked);
	console.log(pickAvatar);
	console.log(pickEnemy);
}
else if(pickAvatar  == true && pickEnemy == false){
		pickEnemy = true;
		$(".myEnemy").html(imgClicked);
}




});