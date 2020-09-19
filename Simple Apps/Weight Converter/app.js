document.getElementById('output')
        .style.visibility = 'hidden';
let inputUnit = document.getElementById('kgInput');

inputUnit.addEventListener('input', function(e) {
            document.getElementById('output')
                    .style.visibility = 'visible';
            let kgs = e.target.value;
            document.getElementById('gramsOutput')
                    .innerHTML = kgs * 1000;
            document.getElementById('lbsOutput')
                    .innerHTML = kgs * 2.2046226218;
            document.getElementById('ozOutput')
                    .innerHTML = kgs * 35.27396195;
            document.getElementById('tonsOutput')
                    .innerHTML = kgs / 1000;        
        });
inputUnit.value = '';
