export const dataForServer = (values:any) => {

    return {
        "courseId": Number(values?.courseId),

        "comment": values?.comment,

        "rating": Number(values?.rating),

    }
}