const getDepartmentService = async () => {
    let response = await fetch('http://localhost:3000/api/departments/').then(
        re => re.json()
    )
    return response;
}

export {getDepartmentService}