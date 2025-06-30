document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nome);

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const telefoneValido = /^[0-9]{11}$/.test(telefone);

  if (!nome || !email || !telefone) {
    alert("Preencha todos os campos.");
    return;
  }

  if (!nomeValido) {
    alert("O nome deve conter apenas letras.");
    return;
  }

  if (!emailValido) {
    alert("Digite um email válido.");
    return;
  }

  if (!telefoneValido) {
    alert("O telefone deve conter apenas números e ter 11 dígitos (ex: DDD + número).");
    return;
  }

  const dados = {
    nome,
    email,
    telefone
  };

  console.log("Dados recebidos:", dados);

  document.getElementById('formulario').style.display = 'none';
  document.getElementById('mensagem').style.display = 'block';
});