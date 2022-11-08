for this test is necesary execute the next petition on postman

server = http://localhost:3000/

endpoint = server + api/departments

method = 'POST'

body = {
    "name" : "Department default"
}

this for generate a new department why the products are in a department

if you don't have postman you can use 
1- google extension https://chrome.google.com/webstore/detail/rester/eejfoncpjfgmeleakejdcanedmefagga?hl=es-419
{this is a extension of postman}

------------------------------

if you can use with rester or postman

product

endpoint = server + api/product

{
  name : "",
  description: "",
  price:"",
  stack: "",
  departmentId : ""
}

bought

endpoint = server + api/bought-products

in this endpoint need set a product id exiting

{
    "productId" : ""
}
