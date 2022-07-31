import User from "../model/user.model";
import db from "../db";
import DatabaseError from "../model/errors/database.error.model";



class UserRepository {
   
    async findAllUsers(): Promise<User[]> {
        const query = `select uuid, username from application_user`;
        const result = await db.query<User>(query); 
        const rows = result.rows;
        return rows || [];
    }

    async findbyId(uuid: string): Promise<User>{
        try{
            const query = `select uuid, username from application_user where uuid = $1`;
    
            const values = [uuid];
            const { rows} = await db.query<User>(query, values); 
            const [user] = rows;
            return user;

        }catch(error){
            console.log(error);
            throw new DatabaseError('Erro no ID', error);
        };
        
    }

   async create(user:User): Promise<string>{
        const script = `insert into application_user (username, password) values ($1, crypt($2, 'mt')) returning uuid`;

        const values = [user.username, user.password];
        const{ rows } = await db.query<{uuid: string}>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
   }

   async update(user:User): Promise<void>{
    const script = `update application_user set username = $1 password = crypt($2, 'mt') where uuid = $3`;

    const values = [user.username, user.password, user.uuid];
    await db.query(script, values);
   }

   async remove(uuid:string): Promise<void>{
    const script = `delete from application_user where uuid = $1`;
    await db.query(script, [uuid])
   }

   
}



export default new UserRepository();