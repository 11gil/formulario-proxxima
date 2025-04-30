document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário
  
    // Pega o valor do nome
    const nome = document.getElementById("nome").value;
  
    // Mostra a mensagem personalizada
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = `Obrigado, ${nome}! Entraremos em contato em breve.`;
  
    // Limpa o formulário
    document.getElementById("formulario").reset();
  });
  