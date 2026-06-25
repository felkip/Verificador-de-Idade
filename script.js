
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var res = document.getElementById("res");
    var foto = document.getElementById("foto");
    var input_ano = Number(document.querySelector('#ano_nasc').value);
    
    if(input_ano == 0 || input_ano > ano){
        res.innerHTML ="<br>Houve um problema. Digite novamente !"
        foto.innerHTML = ""
    } else{
        var rad_sex = document.getElementsByName("radsex")
        var idade = ano - input_ano
        if(rad_sex[0].checked){
            if (idade >= 0 && idade < 12){
                foto.innerHTML = '<img src="assets/criança-m.png" alt="Garoto">'
                res.innerHTML = `<br>Ok, temos um garoto de ${idade} anos por aqui, seja bem-vindo`
            }else if(idade < 18){
                foto.innerHTML = '<img src="assets/jovem-m.png" alt="Jovem">'
                res.innerHTML = `<br>Ok, temos um jovem de ${idade} anos por aqui, seja bem-vindo`
            }else if(idade < 50){
                foto.innerHTML = '<img src="assets/adulto-m.png" alt="Homem adulto">'
                res.innerHTML = `<br>Ok, temos um homem adulto de ${idade} anos por aqui, seja bem-vindo`
            }else{
                foto.innerHTML = '<img src="assets/idoso-m.png" alt="Idoso">'
                res.innerHTML = `<br>Ok, temos um idoso de ${idade} anos por aqui, seja bem-vindo`
            }
                
        }else if (rad_sex[1].checked){
            if (idade >= 0 && idade < 12){
                foto.innerHTML = '<img src="assets/criança-f.png" alt="Garota">'
                res.innerHTML = `<br>Ok, temos uma garota de ${idade} anos por aqui, seja bem-vindo`
            }else if(idade < 18){
                foto.innerHTML = '<img src="assets/jovem-f.png" alt="Jovem">'
                res.innerHTML = `<br>Ok, temos uma jovem de ${idade} anos por aqui, seja bem-vindo`
            }else if(idade < 50){
                foto.innerHTML = '<img src="assets/adulto-f.png" alt="Mulher adulta">'
                res.innerHTML = `<br>Ok, temos uma mulher adulta de ${idade} anos por aqui, seja bem-vindo`
            }else{
                foto.innerHTML = '<img src="assets/idoso-f.png" alt="Idosa">'
                res.innerHTML = `<br>Ok, temos uma idosa de ${idade} anos por aqui, seja bem-vindo`
            }
        }
    }
}