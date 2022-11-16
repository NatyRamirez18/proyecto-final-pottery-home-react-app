import products from '../data/data';
function getItems (id2){

    return new Promise ((resolve) =>{
        if(id2===undefined){
        setTimeout (()=> {
        
                resolve(products);
               
        }, 1000);
    }
    else{
        setTimeout (()=> {
            let itemsFound= products.filter((item)=> item.category === id2);
    
         resolve(itemsFound);
           
    }, 1000);
        
    }

    });
}

export function getOneItem (idParam){

    return new Promise ((resolve,reject) =>{
        let itemFound= products.find((item)=> item.id === parseInt(idParam))

        if(itemFound=== undefined) reject ('Item no encontrado')
        setTimeout (()=> {
        
                resolve(itemFound);
               
        }, 1000);


    });
}

export default getItems;