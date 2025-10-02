
    let alarme = setInterval(function() {
        let horas = parseInt(document.getElementById('horas').value);
        let minutos = parseInt(document.getElementById('minutos').value);
        let mensagem = document.getElementById('mensagem').value;
        let data = new Date();
        let aviso = document.getElementById('aviso');
        aviso.textContent = 'Alarme Ativado';

        console.log(horas);
        console.log(minutos);

        if (horas === data.getHours() && minutos === data.getMinutes()) {
            window.alert(mensagem);
            clearInterval(alarme);
        }
    }, 1000);