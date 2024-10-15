
document.querySelector("form").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault(); 
    }
});


document.querySelector(".comprar button").addEventListener("click", function() {
    const quantidade = document.getElementById("quantidade").value;
    const pagamento = document.getElementById("pagamento").value;
    
    if (quantidade > 0 && pagamento) {
        alert("Compra realizada com sucesso!");
    } else {
        alert("Por favor, selecione a quantidade e a forma de pagamento.");
    }
});

let carrinho = 0;

document.querySelectorAll('.produto button').forEach(function(button) {
    button.addEventListener('click', function() {
        carrinho++;
        document.getElementById('carrinho-contador').textContent = carrinho;
        alert('Produto adicionado ao carrinho!');
    });
});

const modal = document.getElementById('modal-compra');
const btnComprar = document.querySelector('.comprar button');
const spanClose = document.querySelector('.close');
const btnConfirmar = document.getElementById('confirmar-compra');
const btnCancelar = document.getElementById('cancelar-compra');


btnComprar.addEventListener('click', function() {
    modal.style.display = 'block';
});


spanClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

btnCancelar.addEventListener('click', function() {
    modal.style.display = 'none';
});


btnConfirmar.addEventListener('click', function() {
    alert('Compra confirmada!');
    modal.style.display = 'none';
});

// comprar.html
function voltarInicio() {
    window.location.href = "index.html";
}
