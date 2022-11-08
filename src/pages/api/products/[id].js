
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const products =  async(req, res) => {
    switch (req.method) {
        case 'GET':
            const product = await prisma.product.findUnique({
                where :{
                    idProduct : parseInt(req.query.id)
                },
                include: {
                    department: {
                      select: {
                        name: true,
                      },
                    },
                  },
            })
            if(!product){
                return res.status(404).json({message:'Product not found'})
            }
            return res.status(200).json({data:product,message:'Success request'})
            break;
        case 'DELETE':
            prisma.$connect();
            const productFind = await prisma.product.findUnique({
                where :{
                    idProduct : parseInt(req.query.id)
                }
            })
            if(!productFind){
                return res.status(404).json({message:'Product not found'})
            }
            await prisma.product.delete({
                where : {
                    idProduct : parseInt(req.query.id)
                }
            })
            prisma.$disconnect()
            return res.status(204).end();
        case 'PUT':
            const departmentUpdate = await prisma.product.update({
                where : {
                    idProduct : parseInt(req.query.id)
                },
                data: {
                    name: req.body.name,
                    price: parseFloat(req.body.price),
                    stack: parseInt(req.body.stack),
                    description: req.body.description,
                    departmentId: parseInt(req.body.departmentId),
                }
            })
            return res.status(200).json({
                data : departmentUpdate,message: 'Department is updated'
            });
        default:
            break;
    }
    
    
}

export default products;