export const dataForServer = (values:any) => {

    return {
        "firstName": values?.firstName || undefined,
        "lastName": values?.lastName || undefined,
        "zipCode": values?.zipCode || undefined,
        "phoneNumber": values?.phoneNumber || undefined,
        "state": values?.state || null,
        "city": values?.city || undefined,
        "countryId": Number(values?.countryId) || undefined,
        "profileVisibility": values?.profileVisibility || false,
        "isDeveloper": values?.isDeveloper || undefined,
        "profilePicAttachmentId": values?.profilePicAttachmentId || null,
        "latitude": values?.latitude || undefined,
        "longitude": values?.longitude || undefined,
        "address": values?.address || undefined,
        "gender": values?.gender || undefined,
        "remote": values?.remote || false,
        "introAttachmentId": values?.introAttachmentId || null,
    }
}