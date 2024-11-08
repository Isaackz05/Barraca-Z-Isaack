// Seleciona todos os botões de "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
// Adiciona um evento de clique para cada botão
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Exibe a mensagem ao clicar no botão
        alert("Você adicionou esse produto, clique no carrinho para vê-lo!");
    });
});
