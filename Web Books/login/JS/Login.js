function logar(){

    var matricula = document.getElementById('matricula').value;
    var senha = document.getElementById('senha').value;

    if(matricula == "20232024" && senha == "20232024"){
        alert("Bem vindo aluno!");
        location.href= "/Web Books/pesquisa/pesquisa.html";
    }

    if(matricula == "202320242023" && senha == "202320242023"){
        alert("Bem vindo Professor!");
        location.href= "/Web Books/pesquisa professor/pesquisa-prof.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }
}