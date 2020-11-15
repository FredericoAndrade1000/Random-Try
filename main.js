var message, ntry = 0
const char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0", " ",",",".","!","@","#","$","%","&","*","(",")","_","-","ç","[","]","{","}","°","º","?","/","|","'\'","=","+","§",'"', ]

document.getElementById("tryButton").onclick = function(){
	document.getElementById("outputElementMessage").innerHTML = ""
	message = document.getElementById("inputElementMessage").value.toLowerCase().split('')
	document.getElementById("inputElementMessage").value = ""
	ntry = 0
	message.forEach(randomTry)
	alert("Tentativas: " + ntry)
}
function randomTry(item){
	while (rand != item && ntry < 10000){
		var rand = char[Math.floor(Math.random() * char.length)]
		ntry++
		console.log(rand)
		if (rand == item){
			document.getElementById("outputElementMessage").innerHTML += rand
		}
		if (ntry >= 10000){
			alert("Parada de emergêcia, número de tentativas passou do limite")
		}
	}
	
}