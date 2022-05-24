
~~~JS
function calculaSalario(qtdeCarrosVendidos, 
valorTotalVendas){
let salario = 2000
let porcentagemSobreValor = valorTotalVendas*0.05
let comisao = qtdeCarrosVendidos * 100
let totalcomisao = porcentagemSobreValor + comisao
let salarioTotal = salario + totalcomisao
if(qtdeCarrosVendidos === 0){
return salario
}else{
return salarioTotal
}
return salario
}
~~~
