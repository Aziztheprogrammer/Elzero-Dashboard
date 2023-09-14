// Tasks List :
let removeButtons = document.querySelectorAll(".wrapper .tasks .list .box i");

removeButtons.forEach(function (button) {
	button.onclick = function (e) {
		button.parentElement.classList.toggle("completed");
	}
});

// Friends Remove Button
let friendsRemoveButtons = document.querySelectorAll(".wrapper .friend button");

friendsRemoveButtons.forEach(function (button) {
	button.onclick = function (e) {
		e.target.parentElement.parentElement.parentElement.remove();
	}
});
