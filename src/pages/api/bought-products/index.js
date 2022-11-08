
import { PrismaClient } from "@prisma/client";
import {getProducts} from '../../../service/productsService.js';
const prisma = new PrismaClient();

const boughtProducts = async ( req , res ) => {
    switch (req.method) {
        case 'POST':{
            //save many bought
            // if(Array.isArray(req.body))
            // {
                
            //     for (let index = 0; index < req.body.length; index++) {
            //         getProducts(req.body[index].productId).then(r => {
            //             getProducts(r.data.idProduct,'PUT',{stack : r.data.stack - 1}).then(
            //                 re => console.log(re)
            //             )
            //         })
            //     }
            //     req.body.forEach(
            //         async function(bought){
            //             let product = await getProducts(bought.productId)
            //             console.log(product.data.idProduct)
            //             // console.log('data')
            //             let productUpdate = await getProducts(product.data.idProduct,'PUT',{stack : product.data.stack - 1})
            //             console.log(productUpdate)
            //         }
            //     )
            //     return res.status(200).json({message : "Many products created"})
            // }
            //creating bought
            let boughtCreate = await prisma.boughtProducts.create(
                {
                    data : {
                        user : 'Default',
                        productId : parseInt(req.body.productId)
                    }
                }
            )
            let product = await getProducts(parseInt(req.body.productId)).then(r => r.data)
            let productUpdateStack = await getProducts(parseInt(req.body.productId) ,"PUT" ,{stack: product.stack -1 }).then(r => r)
            return res.status(200).json({data : boughtCreate,product:productUpdateStack.message,message : "post bought products"})
            break;
            
        }
        case 'GET' :{
            let boughts = await prisma.boughtProducts.findMany({
                include : {
                    product : {
                        select :{
                            name : true,
                            price : true,
                            description : true
                        }
                    }
                }
            });
            return res.status(200).json({data : boughts,message : "Successful request"})
        } 
        default:
            break;
    }
}

export default boughtProducts;