export const dataForServer = (values:any) => {

    return {
        "password": values?.password,
        "confirmPassword": values?.confirmPassword,
    }
}