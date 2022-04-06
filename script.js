const email = document.getElementById("EmailInput");
const err = document.getElementById("BadEmailNote");
const outPutMessage = document.getElementById("OutputMessage");
const btnEmail = document.getElementById("BtnEmail");
const emailIsValid = email => /\S+@\S+\.\S+/.test(email);
btnEmail.addEventListener("click", () => {
	let val = email.value;
	if (emailIsValid(val)) {
		email.style.border = "1px solid hsl(0, 36%, 70%)";
		outPutMessage.textContent = "";
		err.classList.remove("badEmail");
		outPutMessage.textContent = "You successfully signed to a newsletter!";
		outPutMessage.style.color = "hsl(0, 6%, 24%)";
		email.value = "";
	} else {
		outPutMessage.textContent = "Please provide a valid email";
		outPutMessage.style.color = "hsl(0, 93%, 68%)";
		email.style.border = "2px solid hsl(0, 93%, 68%)";
		err.classList.add("badEmail");
	}
});
