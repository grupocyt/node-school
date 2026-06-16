import fs from "fs" //nosonar
import path from "path" // nosonar

export class FileSync {

    name:string
    
    constructor ( name:string) {
        this.name = name
    }

    read() {
        return JSON.parse( 
            fs.readFileSync(
                path.join(__dirname, `/db/${this.name}.local_db.json`), 
                "utf-8"
            ) 
        )
    }
    write( data:any ){ 
        fs.writeFileSync(
            path.join(__dirname, `/db/${this.name}.local_db.json`),
            JSON.stringify(data, null, 2),
            "utf-8"
        )
    }
    
    
}    