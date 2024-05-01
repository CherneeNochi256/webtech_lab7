const prompt = window.prompt("Enter your name:","user1")

alert(`Hello ${prompt}! Nice to meet you!`)

const input = document.getElementById("user_interaction");
const button = document.getElementById("user_interaction_submit")

button.addEventListener("click", () => {
    console.log(input.value * 2)
})

