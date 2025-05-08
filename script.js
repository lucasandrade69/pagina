function mostrarMensagem() {
    const mensagemDiv = document.getElementById("mensagem");
    const botao = document.getElementById("botao");


    if (mensagemDiv.innerHTML.trim() === "") {
        mensagemDiv.innerHTML = `
        <p>
          Estudar pode ser desafiador, mas lembre-se: cada hora de dedicação é um investimento no seu futuro. 
          O esforço de hoje será o conhecimento que abrirá portas amanhã. 
          Mantenha o foco, você é capaz!
        </p>`;
        botao.textContent = "Fechar";


        setTimeout(() => {
            mensagemDiv.scrollIntoView({ behavior: "smooth" });
        }, 100);
    } else {

        mensagemDiv.innerHTML = "";
        botao.textContent = "Mostrar Mensagem";
    }
}
