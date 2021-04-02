let cadastros = []
let i = 0
class cadastrados {
    constructor(nome, sobrenome, email, senha, nascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha; 
        this.nascimento = nascimento;
    }
}

function cadastrar_conta() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let nascimento = document.getElementById("nascimento").value
    cadastros[i] = new cadastrados(nome, sobrenome, email, senha, nascimento)
    i+=1; 
    document.getElementById("nome").value = ''
    document.getElementById("sobrenome").value = ''
    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("nascimento").value = ''
}

function entrar() {
    let login = document.getElementById("login").value
    let senha_login = document.getElementById("senha_login").value

    for(j=0;j<cadastros.length;j++) {
        if(login == cadastros[j].email) {
            if(senha_login == cadastros[j].email) {
                window.alert("Parabens, voce entrou na sua conta")
                break;
            } 
        }
    } 
}
