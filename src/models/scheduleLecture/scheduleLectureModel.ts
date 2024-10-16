export const dataForServer = (values:any) => {

    return {
        "studentId": Number(values?.studentId),

        "meetingId": values?.meetingId || undefined,

        "recordingLink": values?.recordingLink || undefined,

        "name": values?.name  || undefined,
        
        "subjectId": Number(values?.subjectId),
        
        "dayId": Number(values?.dayId),

        "date": values?.date,
        
        "timeStart": values?.timeStart,
        
        "timeEnd": values?.timeEnd,
        
        "description": values?.description || undefined,
        
        "priceType": Number(values?.priceType),
        
        "ratePerHour": Number(values?.ratePerHour) || undefined,
        
        "flatRate": Number(values?.flatRate) || undefined,

    }
}