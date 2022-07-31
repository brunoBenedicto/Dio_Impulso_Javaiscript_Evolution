const alunos = [
	{
		nome: 'João',
		nota: 4,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 4,
		turma: '2C',
	},
];

function alunosAprovados(array, media){
    let aprovados =[];
    for (let i =0; i<array.length; i++){
        const {nota, nome} = array[i];
        if(nota >= media) aprovados.push(nome);
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));//sofia