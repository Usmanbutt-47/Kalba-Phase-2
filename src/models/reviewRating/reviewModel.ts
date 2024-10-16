export const dataForServer = (values:any) => {

    return {

        "teacherId": Number(values?.teacherId),

        "lectureId": Number(values?.lectureId),

        "comment": values?.comment,

        "rating": Number(values?.rating),

    }
}