export const dataForServer = (values:any) => {

    return {
        "firstName": values?.firstName || undefined,
        "lastName": values?.lastName || undefined,
        "zipCode": values?.zipCode || undefined,
        "phoneNumber": values?.phoneNumber || undefined,
        "state": values?.state || null,
        "city": values?.city || undefined,
        "countryId": Number(values?.countryId) || undefined,
        "profilePicAttachmentId": values?.profilePicAttachmentId || undefined,
        "gender": values?.gender || undefined
    }
}