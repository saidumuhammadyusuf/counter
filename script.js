const countElement = document.querySelector('.count');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
let num = parseInt(countElement.innerText);

function colorCount() {
	if (num <= 5) {
		countElement.style.color = 'red';
	} else {
		countElement.style.color = 'blue';
	}
}

function updateCount() {
	countElement.innerText = num;
	colorCount();
}

increment.addEventListener('click', () => {
	num++;
	updateCount();
});
decrement.addEventListener('click', () => {
	num--;
	updateCount();
});

reset.addEventListener('click', () => {
	num = 0;
	updateCount();
});
