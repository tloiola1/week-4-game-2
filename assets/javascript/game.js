// FIRST THREE LINES HIDE UNNECESSARY ELEMENTS FROM THE SCREEN
$(".text").hide();
$(".hero").hide();
$("button").hide();

function bigHero(){
	$(".hero").show();
	$("button").show();
	$("button").text("Click To Play");
	$("button").on("click", function(){
		location.reload();
	})
}

// THIS FUNCTION WILL HIDE THE ENEMY THAT HAS BEEN DESTROYED AND SET A VAR TO FALSE SO ANOTHER ENEMY CAN BE PICKED
function destroyEnemy(){	
	$("button").text("Pick An Enemy");
	pickEnemy = false;
	
	// THIS CONDITION HIDES ELEMENTS IN THE SCREEN AND SHOW THE JEDY/AVATAR IMG BIGGER
	if(counter == 3){
		$(".myHero").html(myImgAvatar);
		$("button").hide();
		$(".text").hide();
		$(".myPower").attr("style", "border: 0 ");
		myImgAvatar.attr("style", "width: inherit");
		myImgAvatar.removeClass("thumbnail","col-sm-3", "col-xs-3");
		$(".myPower").text("You Are Our Jedy!!");
		$(".myHero").attr("style", "pointer-events:none");
		wins++;
		$(".myScores").text(wins);
		setInterval(bigHero,1000);
		
	}
}

var wins = this.wins;
wins = 0;
var losses = this.losses;
losses = 0;
var pickAvatar = this.pickAvatar; 
pickAvatar = false;
var pickEnemy = this.pickEnemy; 
pickEnemy = false;
var counter = this.counter;
counter = 0;
var myImgAvatar = this.myImgAvatar;
var myImgEnemy = this.myImgEnemy;

// THIS STARTS THE GAME
$(".avatars").on("click", function(){
	$(".initialText").hide();
	$(".text").show();

	// SEETING ATTRIBUTES TO VARIABLES TO BE SHOWN IN THE BROWSER
	imgClicked = $("<img>");	
	imgClicked = $(this);
	imgClicked.addClass("avatars");
	imgClicked.attr("src","imgClicked");
	$("button").attr("style", "display: initial !important; margin-left: 20px; margin-right: 20px");

	// THIS CONDITION TESTS FOR IF AVATAR HAS NOT BEEN PICKED YET, IT PICKS AND MOVE TO THE BOTTON FOR ATACK SECTION
	if(pickAvatar == false && pickEnemy == false){
		pickAvatar = true;
		myImgAvatar = imgClicked;
		myImgAvatar.attr("style", "pointer-events:none");
		$(".myAvatar").html(myImgAvatar);
		$(".myAvatar .myPower").attr("style", "border: 10px solid green");
	}

	// THIS CONDITION TESTS FOR IF AVATAR HAS BEEN PICKED THEN IT WILL PICK THE ENEMY AND MOVE TO THE BOTTON FOR DEFENDOR SECTION
	else if(pickAvatar  == true && pickEnemy == false){
		pickEnemy = true;
		myImgEnemy = imgClicked;
		$(".myEnemy").html(myImgEnemy);
		$(".myEnemy .myPower").attr("style", "border: 10px solid green");
		$(".myEnemy").show();
		counter++;
		$("button").text("Attack");
	}

	// THIS CONDITION TESTS FOR BOTH AVATAR AND ENEMY HAVE BEEN PICKED
	if(pickAvatar == true && pickEnemy == true){
		var attackNumber = 0;
		$("button").on("click", function(){
			attackNumber++;

			//	THIS COUNTS ATTACK TO LOWER THE POWER OF THE AVATAR AND ENEMY
			// 	COUNTER KEEPS TRACK OF HOW MANY ENEMIES AVATAR IS FIGHTING AGAINST
			if(attackNumber == 1){
				if(counter == 1){
					$(".myAvatar .myPower").attr("style", "border: 10px solid green; width: 95%");
				}

				else if(counter == 2){
					$(".myAvatar .myPower").attr("style", "border: 10px solid orange; width: 75%");
				}

				else if(counter == 3){
					$(".myAvatar .myPower").attr("style", "border: 10px solid orange; width: 45%");
				}

				$(".myEnemy .myPower").attr("style", "border: 10px solid green; width: 90%");
			}
			else if(attackNumber == 2){
				if(counter == 1){
					$(".myAvatar .myPower").attr("style", "border: 10px solid green; width: 90%");
				}
				else if(counter == 2){
					$(".myAvatar .myPower").attr("style", "border: 10px solid orange; width: 70%");
				}
				else if(counter == 3){
					$(".myAvatar .myPower").attr("style", "border: 10px solid red; width: 30%");
				}

				$(".myEnemy .myPower").attr("style", "border: 10px solid orange; width: 70%");
			}
			else if(attackNumber == 3){
				if(counter == 1){
					$(".myAvatar .myPower").attr("style", "border: 10px solid green; width: 85%");
				}

				else if(counter == 2){
					$(".myAvatar .myPower").attr("style", "border: 10px solid orange; width: 60%");
				}

				else if(counter == 3){
					$(".myAvatar .myPower").attr("style", "border: 10px solid red; width: 25%");
				}

				$(".myEnemy .myPower").attr("style", "border: 10px solid orange; width: 40%");
			}
			else if(attackNumber == 4){
				if(counter == 1){
					$(".myAvatar .myPower").attr("style", "border: 10px solid green; width: 80%");
				}

				else if(counter == 2){
					$(".myAvatar .myPower").attr("style", "border: 10px solid orange; width: 50%");
				}

				else if(counter == 3){
					$(".myAvatar .myPower").attr("style", "border: 10px solid red; width: 15%");
				}

				$(".myEnemy .myPower").attr("style", "border: 10px solid red; width: 5%");
			}

			// CALLING FUNCTION DESTROY TO DESTROY THE ENEMY
			else if(attackNumber == 5){
				destroyEnemy();
				$(".myEnemy").hide();
			}
		});
	}


    sessionStorage.setItem(wins,losses);
 console.log(wins);
    // Retrieve data
    localStorage.getItem(wins);
 console.log(wins);

	
});
