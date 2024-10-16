export const dataForServer = (values:any) => {

    return {
        "subjectId": Number(values?.subjectId),
        "price": Number(values?.price),
        "canStartAt": values?.canStartAt,
        "description": values?.description,
    }
}