export function CheckData(type,userData){
    let Url = 'http://localhost:8080/user/';
    
        return new Promise((resolve,reject)=>{
            fetch(Url+type,{
                method:'POST',
                body:JSON.stringify(userData)
            })
            .then((res)=>res.json())
            .then((resjson)=>{
                resolve(resjson);
            })
            .catch((error)=>{
                reject(error);
            })
        });
}