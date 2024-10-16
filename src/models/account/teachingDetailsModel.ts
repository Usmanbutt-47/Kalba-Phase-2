export const dataForServer = (values:any) => {

    return {
        "profileTitle": values?.profileTitle || "",
        "profileDescription": values?.profileDescription || "",
        "educationLevel": values?.educationLevel || null,
        "teachingLevel": values?.teachingLevel || null,
        "termsAndPolicies": values?.termsAndPolicies || "",
        "hourlyRate": Number(values?.hourlyRate) || null,
        "flatRate": Number(values?.flatRate) || null,
        "priceType": Number(values?.priceType),
    }
}