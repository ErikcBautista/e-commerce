
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
            const product = await prisma.products.create({
                data: {
                    name : req.body.name,
                    price : parseFloat(req.body.price),
                    stack : parseInt(req.body.stack),
                    description : req.body.description
                } 
            }
            )
            prisma.$disconnect()
            console.log(product)
            return res.status(200).json({data:{name:'hola'}})
            break;
        case 'GET':         
            const products = await prisma.products.findMany();
            console.log(products)
            return res.status(200).json({data:products,message:'Successful request'});
            break;
        default:
            break;
    }
    return res.status(200).json({data:{name:'hola'}})
}

export default products;