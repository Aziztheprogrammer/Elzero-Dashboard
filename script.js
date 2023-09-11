// Tasks List :
let removeButtons = document.querySelectorAll(".wrapper .tasks .list .box i");
console.log(removeButtons);

removeButtons.forEach(function (button) {
	button.onclick = function (e) {
		button.parentElement.classList.toggle("completed");
	}
});
