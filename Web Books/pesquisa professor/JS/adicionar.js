document.getElementById("adicionar").addEventListener('click',add)

function add(){
    alert("Livro adicionado a sua matéria");
    let estados = document.getElementById('adicionar');
    estados.remove(estados.selectedIndex);
}