function displayModal() {
    const modal = document.getElementById("contact_modal");
    console.log('contactForm:',modal)
	modal.style.display = "block";
    // console.log('contactForm:',modal)
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    console.log('modal:',modal)
    modal.style.display = "none";
}
