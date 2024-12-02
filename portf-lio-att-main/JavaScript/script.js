const responseMessage = document.getElementById("responseMessage");
document.getElementById('myform').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById("exampleFormControlInput1").value;
    const inputText = document.getElementById("exampleFormControlTextarea1").value;

    console.log(inputEmail, inputText);

    try {
        const response = await fetch("http://localhost:3000/add-email", { // Rota corrigida para "/add-email"
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input_email: inputEmail, input_text: inputText }) // Campos ajustados
        });

        const result = await response.json();

        // Exibe mensagem de resposta
        const responseMessage = document.getElementById("responseMessage"); // Certifique-se de ter esse elemento no HTML
        responseMessage.textContent = result.message || "Sua mensagem foi enviada!";
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);

        const responseMessage = document.getElementById("responseMessage");
        responseMessage.textContent = "Sua mensagem não foi enviada.";
    }

    
});


