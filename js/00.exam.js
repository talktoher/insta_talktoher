// 브라우저 콘솔에 속성 출력
var soldier = {
	name: "talktoher",
	age: 18,
	gun: "AK-47",
	shoot: function(){
		console.log("pew pew pew");
	}
}


console.log(soldier.name)
console.log(soldier.shoot())
alert(soldier.age)


// 입력값 받아서, if와 else인 경우 값 출력 
var userAge = prompt("What is your age?")

console.log("You are " + userAge + " years old");

if(userAge < 18){
	console.log("You can't drink");
} else if(userAge > 19 && userAge < 50){
	console.log("You are a adult");
} else if(userAge > 99){
	console.log("You are dead");
} else{
	console.log("FUCK");
}