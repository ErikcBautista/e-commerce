
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();



const postProduct = ({name,price,description,stack}) => {
    
}

const getProducts = () => {

}
const products = async (req, res) =>{
    switch (req.method) {
        case 'POST':
            prisma.$connect();
            await prisma.product.create({
                data: {
                    name : req.body.name,
                    price : parseFloat(req.body.price),
                    stack : parseInt(req.body.stack),
                    description : req.body.description
                } 
            }
            )
            prisma.$disconnect()
            return res.status(200).json({data:{name:'hola'}})
            break;
        case 'GET':
            let products = null;
            if(req.query.name){
                products = await prisma.product.findMany({
                    where : {
                        name : {
                            contains : req.query.name
                        }
                    }
                })
                return res.status(200).json({data:products,message:'Successful request'});
            }
            products = await prisma.product.findMany();
            return res.status(200).json({data:products,message:'Successful request'});
            break;
        default:
            break;
    }
    return res.status(200).json({data:{name:'hola'}})
}

export default products;