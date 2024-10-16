export const dataForServer = (values:any) => {

    return {
        "jobTitle": values?.jobTitle || undefined,

        "companyName": values?.companyName || undefined,

        "fromDate": values?.fromDate || undefined,

        "toDate": values?.toDate || undefined,
    }
}