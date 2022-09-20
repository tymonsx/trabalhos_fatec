function abrirpagina(objAluno) {
    let aluno = objAluno.value;
    let frmConteudo = document.getElementById('frmConteudo');
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    // checa se a página existe
        if (this.readyState == 4) {
            fechaMenu();
            if (this.status == 200) {
                frmConteudo.src = 'alunos/' + aluno;
            }
            else {
                frmConteudo.src = 'alunos/';
            }
        }
        
        }
    ajax.open('GET','alunos/' + aluno);
    ajax.send();
    
}

function fechaMenu() {
    let menu = document.getElementById('menu');
    menu.className = 'fechado';
}

function abreMenu() {
    let menu = document.getElementById('menu');
    menu.className = 'aberto';
}