
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const department =  async(req, res) => {
    switch (req.method) {
        case 'GET':
            const department = await prisma.department.findUnique({
                where :{
                    id : parseInt(req.query.id)
                }
            })
            if(!department){
                return res.status(404).json({message:'department not found'})
            }
            return res.status(200).json({data:department,message:'Success request'})
            break;
        case 'DELETE':
            prisma.$connect();
            const departmentFind = await prisma.department.findUnique({
                where :{
                    id : parseInt(req.query.id)
                }
            })
            if(!departmentFind){
                return res.status(404).json({message:'Product not found'})
            }
            await prisma.department.delete({
                where : {
                    id : parseInt(req.query.id)
                }
            })
            prisma.$disconnect()
            return res.status(204).end();
        case 'PUT':
            const departmentUpdate = await prisma.department.update({
                where : {
                    id : parseInt(req.query.id)
                },
                data: {
                    name : req.body.name
                }
            })
            return res.status(200).json({
                data : departmentUpdate,message: 'Department is updated'
            });
        default:
            break;
    }
    
    
}

export default department;