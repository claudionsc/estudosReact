export const getQuote = () => 
    fetch(process.env.REACT_APP_API).then((response) => response.json());
    
    
    //O ARQUIVO . ENV SERVE PRA SUBSTITUIR O CAMINHO ABAIXO
    // fetch('http://127.0.0.1:500').then(response => response.json());