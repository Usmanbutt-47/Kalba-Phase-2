export const dataForServer = (values:any) => {

    return {
        "firstName": values?.firstName,
        "lastName": values?.lastName,
        "email": values?.email,
        "zipCode": values?.zipCode,
        "password": values?.password,
        "agreeTerm": values?.agreeTerm
    }
}