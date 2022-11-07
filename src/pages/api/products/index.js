import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const postProduct = ({ name, price, description, stack }) => {};

const getProducts = () => {};
const products = async (req, res) => {
  switch (req.method) {
    case "POST":
      prisma.$connect();
      await prisma.product.create({
        data: {
          name: req.body.name,
          price: parseFloat(req.body.price),
          stack: parseInt(req.body.stack),
          description: req.body.description,
          departmentId: parseInt(req.body.departmentId),
        },
      });
      prisma.$disconnect();
      return res.status(200).json({ message: "Product created" });
      break;
    case "GET":
      let products = null;
      if (req.query.name) {
        products = await prisma.product.findMany({
          where: {
            name: {
              contains: req.query.name,
            },
          },
          include: {
            department: {
              select: {
                name: true,
              },
            },
          },
        });
        return res
          .status(200)
          .json({ data: products, message: "Successful request" });
      }
      if (req.query.departmentId) {
        products = await prisma.product.findMany({
          where: {
            departmentId: parseInt(req.query.departmentId),
          },
          include: {
            department: {
              select: {
                name: true,
              },
            },
          },
        });
        return res
          .status(200)
          .json({ data: products, message: "Successful request" });
      }
      products = await prisma.product.findMany({
        include: {
          department: {
            select: {
              name: true,
            },
          },
        },
      });
      return res
        .status(200)
        .json({ data: products, message: "Successful request" });
      break;
    default:
      break;
  }
  return res.status(200).json({ message: "Product created" });
};

export default products;
