const msgSecreta = ['Aprender', 'não', 'é', 'sobre', 'o',
    'que', 'você', 'consegue', 'facilmente', 'na', 'primeira', 'vez',
    'mas', 'sobre', 'o', 'que', 'você', 'pode', 'descobrir.', '<br> 2015',
    'Chris', 'Pine', 'Aprenda', 'JavaScript',];

console.log(msgSecreta.pop());
msgSecreta.push('a', 'programar');
msgSecreta.splice(8, 1, 'certo');
msgSecreta.shift();
msgSecreta.unshift('Programação');
msgSecreta.splice(7, 5, 'sabe');
const segredo = msgSecreta.join(' ');

//document.write(`<p> ${segredo} </p>`);
