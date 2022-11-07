
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const products =  async(req, res) => {
    switch (req.method) {
        case 'GET':
            const product = await prisma.products.findUnique({
                where :{
                    idProduct : parseInt(req.query.id)
                }
            })
            if(!product){
                return res.status(404).json({message:'Product not found'})
            }
            return res.status(200).json({data:product,message:'Success request'})
            break;
        case 'DELETE':
            prisma.$connect();
            const productFind = await prisma.products.findUnique({
                where :{
                    idProduct : parseInt(req.query.id)
                }
            })
            if(!productFind){
                return res.status(404).json({message:'Product not found'})
            }
            await prisma.products.delete({
                where : {
                    idProduct : parseInt(req.query.id)
                }
            })
            prisma.$disconnect()
            return res.status(204).end();
        
        default:
            break;
    }
    
    
}

export default products;