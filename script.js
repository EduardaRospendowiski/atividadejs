let ic = 1;


function CadastrarAluno(){
    localStorage.setItem("Nome"+ic,document.getElementById("Nome").value);
    localStorage.setItem("Curso"+ic,document.getElementById("Curso").value);
    localStorage.setItem("Ano"+ic,document.getElementById("Ano").value);
    ic += 1;
}

function MostrarTodos(){
    var texto = "";
    for (let index = 0; index < ic; index++) {
        texto += "<br>"+index+"° - Registro"        
        tetxo += localStorage.getItem("Nome"+index)+"<br>";
        tetxo += localStorage.getItem("Curso"+index)+"<br>";
        tetxo += localStorage.getItem("Ano"+index)+"<br>";
    }
    document.getElementById("Pesquisa").innerHTML = texto;
}
