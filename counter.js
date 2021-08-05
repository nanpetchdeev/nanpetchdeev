let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");
document.querySelector("#counterReset");

var counter = 0;

document.addEventListener("keydown", (e) => {
	if(e.keyCode === 32,38) {
		counter++
		counterValue.innerText = counter
	}
	else if(e.keyCode === 8,40) {
		if(counter > 0) {
			counter--
			counterValue.innerText = counter
		}
	}
})
