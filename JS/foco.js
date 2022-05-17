let foco = document.querySelector('img');

        foco.onclick = function() {
            let mySrc = foco.getAttribute('src');
            if (mySrc === 'img/focoOff.png') {
            foco.setAttribute ('src', 'img/focoOn.png');
            } else {
            foco.setAttribute ('src', 'img/focoOff.png');
            }
        }