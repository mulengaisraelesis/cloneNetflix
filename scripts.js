const showResponse = (a) => {
    const buttonQuestion = document.getElementById(`buttonQuestion${a}`);
    const response = document.getElementById(`response${a}`);
    const icon = buttonQuestion.querySelector("i");

    // Initialiser l'état de l'élément
    if (!buttonQuestion.classList.contains("not-clicked")) {
        buttonQuestion.classList.add("not-clicked");
    }
    response.style.display = "none"; // Assurez-vous que la réponse est cachée au départ
    icon.classList.add("fa-plus");

    buttonQuestion.addEventListener("click", () => {
        if (buttonQuestion.classList.contains("not-clicked")) {
            response.style.display = "block";
            buttonQuestion.classList.remove("not-clicked");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-times");
        } else {
            response.style.display = "none";
            buttonQuestion.classList.add("not-clicked");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-plus");
        }
    });
}


