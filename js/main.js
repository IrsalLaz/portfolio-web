const messageElement = document.getElementById("message");

function toggleMessage() {
	if (messageElement.classList.contains("show")) {
		closeMsg();
	} else {
		messageElement.classList.add("show");
	}
}

document.addEventListener("scroll", function () {
	closeMsg();
});

function closeMsg() {
	messageElement.classList.remove("show");
}
