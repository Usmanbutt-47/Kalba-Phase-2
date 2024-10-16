export const dataForServer = (values:any) => {

    return {

        "receiverId": Number(values?.receiverId),

        "message": values?.message,

        "threadId": Number(values?.threadId),
        
        "messageType": values?.messageType,
        
        "voiceAttachmentId": values?.voiceAttachmentId ? Number(values?.voiceAttachmentId) : undefined

    }
}