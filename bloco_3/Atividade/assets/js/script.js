let nome = window.document.getElementById('nome')
let nomeOk = false
let txtNome = document.querySelector('#txtNome')
let email = window.document.querySelector('#email')
let emailOk = false
let txtEmail = document.querySelector('#txtEmail')
let mensagem = document.querySelector('#mensagem')
let mensagemOk = false
let txtMensagem = document.querySelector('#txtMensagem')
let mapa = document.querySelector('#mapa')

function validaNome() {
    if (nome.value.length < 3) {
        nome.style.color = 'red'   
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else{
        nome.style.color = 'green'
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.color = 'red'
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else {
        email.style.color = 'green'
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}


function validaMensagem() {
    if (mensagem.value.length >= 100) {
        mensagem.style.color = 'red'
        txtMensagem.innerHTML = 'Ops, exagerou no texto!'
        txtMensagem.style.color = 'red'
        mensagemOk = false
    }
    else{
        mensagem.style.color = 'green'
        txtMensagem.innerHTML = 'Caracteres: ' + mensagem.value.length + '/100'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Tóp! Enviado com sucesso.')
    }
    else {
        alert('Vish, algo errado não está certo!')
    }
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

function mapaZoom() {
    mapa.style.width = '550px'
    mapa.style.height = '350px'
}