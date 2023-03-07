function gerar() {
    var num = Number(document.getElementById('numero').value);
    var sel = document.getElementById('tabuada');
    sel.innerHTML = '';
  
    if (num == 0) {
      window.alert('Insira um numero válido');
    } else {
      for (let i = 1; i <= 10; i++) {
        var resultTab = i * num;
        var option = document.createElement('option');
        option.innerText = (`${num} * ${i} = ${resultTab}`);
        sel.appendChild(option);
      }
    }
  }
  