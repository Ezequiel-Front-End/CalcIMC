
const resultado = document.getElementById('resultado')
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const btn = document.querySelector('.btn-submit')

btn.addEventListener('click', ()=>{
    const imc = (parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))).toFixed(2);
    checagemDePeso(imc);
})

function checagemDePeso(medidas) {
        switch (true) {
            case medidas <  16:
                    alert('Magreza Grave')
                break;
            case medidas == 16 || medidas < 17:
                console.log('Magreza moderada')
            break

            case medidas == 17  || medidas < 18.5: 
                console.log('Magreza leve')
            break;

            case medidas == 18.5 || medidas < 25:
                console.log('Saudável')
            break;

            case medidas == 25 || medidas < 30:
                console.log('Sobrepeso')
            break;

            case medidas == 30 || medidas < 35:
                console.log('Obesidade Grau I')
            break;

            case medidas == 35 || medidas < 40:
                console.log('Obesidade Grau II (severa)')
                break;

            case medidas > 40:
                console.log('Obesidade Grau III (mórbida)')
                break;
            default:
                console.log('nenhum calculo a ser feito')
                break;
        }
}


