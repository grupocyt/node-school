 import { FileSync } from "./FileSync.applications";
import { UserModel } from "./models/user.model";

 
export class AuthApplications {

    //Lista todos los usuario
    get():UserModel[] {
        const users: UserModel[] = new FileSync('auth').read()
        return users
    }
    //busca un usuario por email
    findByEmail( email:string ):UserModel | undefined {
        
        const data: UserModel[] = new FileSync('auth').read()

        const user = data.find(u => u.email?.toLocaleLowerCase() === email.toLocaleLowerCase())

         if (!user) 
            return  undefined

        return user
    }

}