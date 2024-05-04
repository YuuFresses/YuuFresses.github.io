function questao1() 
{
    var textoDigitado = document.getElementById("texto").value;
    var palavraChave = "OI";

    if (textoDigitado === palavraChave) 
    {
        alert("GANHOU!");
        window.location.href = "jogo2.html";
    } 
    else 
    {
        alert("ERROU!");
    }
}