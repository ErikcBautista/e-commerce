
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const products =  async(req, res) => {
    const product = await prisma.products.findUnique({
        where :{
            idProduct : parseInt(req.query.id)
        }
    })
    if(!product){
        return res.status(404).json({message:'Product not found'})
    }
    return res.status(200).json({data:product,message:'Success request'})
}

export default products;