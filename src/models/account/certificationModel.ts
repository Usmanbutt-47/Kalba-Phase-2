export const dataForServer = (values:any) => {

    return {
        "title": values?.title,
        "certificateAttachmentId": values?.certificateAttachmentId
    }
}