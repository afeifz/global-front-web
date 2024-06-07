function validarCadastro() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var confirmaSenha = document.getElementById('confirmaSenha').value.trim();

    if (nome === '' || email === '' || senha === '' || confirmaSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem. Por favor, digite novamente.');
        return false;
    }

    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    
    window.location.href = '/index.html';
    alert('Cadastro realizado com sucesso!\nNome: ' + nome + '\nEmail: ' + email);
    return true;
}
