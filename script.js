
var peso = prompt("Coloque seu peso")
var altura = prompt("Coloque sua altura")
var imc = peso/altura * altura;
 
if(imc < 20)
    		{
    			alert('Você esta abaixo do peso!');
    		} 
    		else if(imc >20 && imc <= 25)
    		{
    			alert("Peso Ideal");
    		}
    		else if(imc >25 && imc <= 30)
    		{
    			alert("Levemente acima do peso");
    		}
    		else if(imc >30 && imc <= 35)
    		{
    			alert("obesidade I");
    		}
    		else if(imc >35 && imc <= 40)
    		{
    			alert("Obesidade II");
    		}
    		else if(imc >40 && imc <= 50)
    		{
    			alert("Obesidade III");
    		}
    		else
    		{
    			alert('coloque valores existentes');
    		}
 
