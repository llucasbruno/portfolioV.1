function request() {
    console.log('click')
    //requisição com fetch usada exclusivamente para requisições urls, smepre deve retornar uma response 
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data[0].title)
    })

}

document.querySelector('#button').addEventListener('click', request)



/*

function seconds(n) {
    return new Promise(resolve => 
    setTimeout(()=> 
    resolve(n), 
    1000))
}




async function contagemRegressiva(n) {
    
    if(n <= 0) {
        let msg = console.log('Fim da contagem!!!')
        return seconds(msg)
    }
    console.log(await seconds(n))
    return contagemRegressiva(n - 1)
}
contagemRegressiva(3);*/
/*
function somaArray(n) {
    if(n <= 1 ) {
        return 1
    }
    
    return n + somaArray(n - 1)
   
}
console.log(somaArray(5))*/



let arrayNumbers = [1, 2, 3, 4, 5];

function somaArray(array = []) {
    // Se o array estiver vazio, retornamos 0
    if (array.length === 0) {
        return 0;
    }
  
    return array[0] + somaArray(array.slice(1));
    
}

let soma = somaArray(arrayNumbers);
console.log(soma)
    
    
    

