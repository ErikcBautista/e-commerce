
const getProducts = async () => {
    let response = await fetch('http://localhost:3000/api/products/',{
        departmentId : 1
    }).then(
        re => re.json()
    )
    return response;
}

export {getProducts}