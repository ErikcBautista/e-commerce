
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
            const productFinded = await prisma.product.findFirst({
                where : {
                    idProduct : parseInt(req.query.id)
                }
            })
            const updateProduct = await prisma.product.update({
                where:{
                    idProduct: productFinded.idProduct
                },
                data : {
                    name: req.body.name ?? productFinded.name,
                    price: parseFloat(req.body.price ?? productFinded.price),
                    stack: parseInt(req.body.stack ?? productFinded.stack),
                    description: req.body.description ?? productFinded.description,
                    departmentId: parseInt(req.body.departmentId ?? productFinded.departmentId),
                }
            })
            console.log(updateProduct)
            return res.status(200).json({
                data : updateProduct,message: 'Product is updated'
            });
        default:
            break;
    }
    
    
}

export default products;