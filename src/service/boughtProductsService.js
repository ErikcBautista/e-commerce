const URI = "http://localhost:3000/api/bought-products/{id}";
const boughtProductsService = async ( id = null,method = "GET",data = {}) => {
    let url = URI.replace(
        '{id}',
        id ?? '',
    )
    let config = (method === 'GET' || method === 'DELETE')  ? {
        method : method
    }
    :{
        method : method,
        body : JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let response = await fetch(`${url}`,config).then(
        re => {
            if(re.status === 204)
            {
                return true;
            }
            return re.json()
        }
    )
    return response;
}

export {boughtProductsService}