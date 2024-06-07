function validarLogin() {
    var email = document.getElementById('emailLogin').value.trim();
    var senha = document.getElementById('senhaLogin').value.trim();

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    var usuarioArmazenado = localStorage.getItem('usuario');
    if (!usuarioArmazenado) {
        alert('Usuário não cadastrado. Por favor, realize o cadastro.');
        return false;
    }

    var usuario = JSON.parse(usuarioArmazenado);
    if (usuario.email !== email || usuario.senha !== senha) {
        alert('Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
        return false;
    }

    

    window.location.href = '/index.html';
    alert('Login realizado com sucesso!\nBem-vindo, ' + usuario.nome + '!');
    return true;
}
