export const dataForServer = (values:any) => {

    return {

        "receiverId": Number(values?.receiverId),

        "message": values?.message,

    }
}