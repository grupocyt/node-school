import { AllUsresApplicatons, RegistrarUsersApplicatons } from "../../application/Users/UserApplication"
import { MessageServerErrorContoller } from "../../utility/https"

export async function AllController()  {
    

      const newuser:any = await AllUsresApplicatons ()

  
        return {
          status: true,
          message:'Lista info del usuario',
          data:newuser
        } 
  }
  
  export async function RegistrarController( users:any)  {
    

    const data = {
            name: users.name,
            last_name: users.last_name,
            age: users.age
    }

      const newuser:any = await RegistrarUsersApplicatons(data)

    
        return {
          status: true,
          message:'Lista info del usuario',
          data: newuser
        } 
  }

  export async function UpdateController( users:any)  {
    

    const data = {
            id:users.id,
            name: users.name,
            last_name: users.last_name,
            age: users.age
    }

      const newuser:any = "Con Update capa archivos"

      if(!newuser.status)
        return MessageServerErrorContoller()

        return {
          status: true,
          message:'Lista info del usuario',
        } 
  }

  export async function RemoveController( users:any)  {
    

    const data = {
            id:users.id,
            name: users.name,
            last_name: users.last_name,
            age: users.age
    }

      const newuser:any = "Con Remove capa archivos"

      if(!newuser.status)
        return MessageServerErrorContoller()

        return {
          status: true,
          message:'Lista info del usuario',
        } 
  }