export const dataForServer = (values:any) => {

    return {
        "subjectId": Number(values?.subjectIds),

        "canDevelop": values?.canDevelop,

    }
}