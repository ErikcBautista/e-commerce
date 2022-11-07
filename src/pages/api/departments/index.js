
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();



const postProduct = ({name,price,description,stack}) => {
    
}

const getProducts = () => {

}
const departments = async (req, res) =>{
    switch (req.method) {
        case 'POST':
            prisma.$connect();
            await prisma.department.create({
                data: {
                    name : req.body.name
                } 
            }
            )
            prisma.$disconnect()
            return res.status(200).json({message:'Department created'})
            break;
        case 'GET':
            let departments = null;
            if(req.query.name){
                departments = await prisma.department.findMany({
                    where : {
                        name : {
                            contains : req.query.name
                        }
                    }
                })
                return res.status(200).json({data:departments,message:'Successful request'});
            }
            departments = await prisma.department.findMany();
            return res.status(200).json({data:departments,message:'Successful request departments'});
            break;
        default:
            break;
    }
    return res.status(200).json({data:{name:'hola'}})
}

export default departments;