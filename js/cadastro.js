function cadastrar(){

    let formulario = [];

    let nome = document.getElementById('nome').value;

    formulario.push(nome);


    let fone = document.getElementById('fone').value;
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);

    let sexo = '';
    if(document.getElementById('masc').checked){
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked){
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }
    formulario.push(sexo);

    console.log(formulario);

    limparFormulario();

}

function limparFormulario(){
    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Natal';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();
}


function validaForm(form) {
    let texto = nome.trim().toUpperCase();

    for(let i = 0; i < texto.lenght; i++){
        if(ehnumero(texto[i])){
            return false;
        }
    }
        return texto;
       
      
}
