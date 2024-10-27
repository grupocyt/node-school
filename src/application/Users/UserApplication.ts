const fs = require('fs');
 
const dataPath = './src/ORM/users.json' // path to our JSON file
export async function AllUsresApplicatons (){
    // util functions

    const jsonData = fs.readFileSync(dataPath)
 
    
    const  users = JSON.parse(jsonData)
   
 
    return  users

}

export async function RegistrarUsersApplicatons (params:any) {
    const jsonData = fs.readFileSync(dataPath)
    const  users:any = JSON.parse(jsonData)
 
    //busca el ultimo
    const ultimoUser = users[users.length-1]
     
    // organiza el nuevo usuario
    const newUser ={
        id:ultimoUser.id +1,
        ...params
    }
 
    //añade el nuevo usuario a la base de datos
    users.push(newUser )
     
    //graba los datos
     const stringifyData = JSON.stringify(users)
     fs.writeFileSync(dataPath, stringifyData)
 
     return newUser
}

export async function UpdateUsersApplicatons() {
    
}

export async function RemoveUsersApplicatons() {
    
}