import axios from 'axios';
//import LineChart from './LineChart';

export async function getDados(symbol){
        
       const response = await axios.get(`http://localhost:3001/values?symbol=${symbol}`);
       
        var valores = [];
        var datas = [];
        var contador = 0;
        var nomeProduto;
        response.data.map(k =>{
           
        if(nomeProduto !== k.produto && contador ===0){
            nomeProduto = k.produto;
            ;
        }

        ;
        datas[contador] = k.dataEmissao;
        ;
        valores[contador] = parseFloat(k.valorUn);
        contador++;
           return null;
       })
       debugger;
       console.log(valores);
       return valores;
       
}

export async function getDataEmissao(symbol){
    ;
   const response = await axios.get(`http://localhost:3001/values?symbol=${symbol}`);
   ;
   
    var datasEm = [];
    var contador = 0;

    response.data.map(k =>{
       
   


        datasEm[contador] = k.dataEmissao;
        contador++;

       return null;
   })
   debugger;
   console.log(datasEm);
   return datasEm;
   
}
