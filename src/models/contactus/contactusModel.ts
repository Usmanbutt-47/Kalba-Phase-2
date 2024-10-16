export const dataForServer = (values:any) => {

    return {
        "email": values?.email,
        "name": values?.name,
        "message": values?.message,
    }
}