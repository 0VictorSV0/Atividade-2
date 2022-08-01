let data = 20;
let idade = 15;
let pessoas = 100;
let capmax = 100;
let dataevento = 25;
let idadeevento = 18;
console.log("Iniciando Cadastro...")
if (data < dataevento) {
    console.log("Cadastro Recusado:");
    console.log("Data Inválida!");
} else{
    console.log("Data Aceita...");
    if (idade < idadeevento) {
        console.log("Cadastro Recusado:");
        console.log("Idade Não Permitida!");
    } else{
        console.log("Idade Aceita...");
        if (pessoas >= capmax) {
            console.log("Cadastro Recusado:");
            console.log("Limite de Pessoas Atingido!");
        } else {
            console.log("Cadastro Realizado com Êxito!");
        }
    }
}