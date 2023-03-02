
/* 
    > - maior
    < - menor
    == - igual
    >= - maior ou igual
    <= - menor ou igual
    != - diferente

*/ 
function idade()
{
    var idade = prompt("digite sua idade");
    if(idade >= 60)
    {
        console.log("é um idoso")
    }else if(idade >= 18)
    {
        console.log("A idade é maior que 18")
    } else if(idade >= 12)
    {
        console.log("é um adolescente")
    }else 
    {
        console.log("é uma criança")
    }
}

function maior()
{
    var n1 = prompt("digite o n1");
    var n2 = prompt("digite o n2");
    var n3 = prompt("digite o n3");

    if (n1 > n2)
    {
        if (n1 > n3) 
        {
            console.log("O maior é" + n1)
        }
        
    } else if(n2 > n3) 
    {    
        console.log("O maior é" + n2)
    } else 
    {
        console.log("O maior é" + n3)
    }
       
}