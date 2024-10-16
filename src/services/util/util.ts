import { TimePeriodEnum } from "../enums/enums"

export const getTimePeriod = (startTime:any, endTime:any) => {
    let timePeriod = ''

    if(startTime == '00:00:00' && endTime == '10:00:00'){
        timePeriod = TimePeriodEnum.Morning

    } else if(startTime == '10:00:00' && endTime == '13:00:00'){
        timePeriod = TimePeriodEnum.Day

    } else if(startTime == '13:00:00' && endTime == '16:00:00'){
        timePeriod = TimePeriodEnum.Afternoon

    } else if(startTime == '16:00:00' && endTime == '19:00:00'){
        timePeriod = TimePeriodEnum.Evening

    } else if(startTime == '19:00:00' && endTime == '00:00:00'){
        timePeriod = TimePeriodEnum.Night
    } 
    
    return timePeriod
}

export const getTimeSlots = (timePeriod:any) => {
    let startTime = ''
    let endTime = ''

    switch(timePeriod){
        case TimePeriodEnum.Morning:
                startTime = '00:00:00'
                endTime = '10:00:00'
            break;
        case TimePeriodEnum.Day:
                startTime = '10:00:00'
                endTime = '13:00:00'
            break;
        case TimePeriodEnum.Afternoon:
                startTime = '13:00:00'
                endTime = '16:00:00'
            break;
        case TimePeriodEnum.Evening:
                startTime = '16:00:00'
                endTime = '19:00:00'
            break;
        case TimePeriodEnum.Night:
                startTime = '19:00:00'
                endTime = '00:00:00'
            break;
    }

    return {startTime:  startTime, endTime: endTime}

}

export const getDay = (dayId:any) => {
    let day = ''

    if(dayId == '0'){
        day = 'Sunday'

    } else if(dayId == '1'){
        day = 'Monday'

    } else if(dayId == '2'){
        day = 'Tuesday'

    } else if(dayId == '3'){
        day = 'Wednesday'

    } else if(dayId == '4'){
        day = 'Thursday'

    } else if(dayId == '5'){
        day = 'Friday'

    } else if(dayId == '6'){
        day = 'Saturday'

    }
    
    return day
}

export const isCurrentTimeInRange = (targetDate:any, startTime :any, endTime :any) => {
    const currentDate = new Date();

    const targetStartDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), startTime.getHours(), startTime.getMinutes());
    const targetEndDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), endTime.getHours(), endTime.getMinutes());
    const fiveMinutesBeforeStart = new Date(targetStartDateTime.getTime() - 5 * 60000);

    return currentDate >= fiveMinutesBeforeStart && currentDate <= targetEndDateTime;
}

export const isCurrentTimeGreaterThanEndTime = (targetDate:any, endTime :any) => {
    const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes());

    const targetEndDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), endTime.getHours(), endTime.getMinutes());

    return currentDate >= targetEndDateTime;
}

export const isCurrentTimeGreaterThanOneMinEnd = (targetDate:any, endTime :any) => {
    const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes());

    const targetEndDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), endTime.getHours(), endTime.getMinutes());

    return currentDate >= targetEndDateTime;
}

export const isCancelReductionShown = (targetDate:any, startTime :any, endTime :any, cancelMin:any) => {
    const currentDate = new Date();

    const targetStartDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), startTime.getHours(), startTime.getMinutes());
    const targetEndDateTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), endTime.getHours(), endTime.getMinutes());
    const cancelMinutesBeforeStart = new Date(targetStartDateTime.getTime() - cancelMin * 60000);

    return currentDate >= cancelMinutesBeforeStart && currentDate <= targetEndDateTime;
}

export const formatVideoDuration = (duration:string) => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);

    let formattedDuration = '';
    if (hours > 0) {
        formattedDuration += `${hours} hour${hours > 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
        formattedDuration += `${minutes} min${minutes > 1 ? 's' : ''} `;
    }
    if (seconds > 0) {
        formattedDuration += `${seconds} sec`;
    }

    return formattedDuration.trim() || '0 sec';
}

export const getVideo = (lectures:any) => {
    let lecture = {id: 0, fileDescriptor: ''}

    if(lectures?.length > 0){
        const filteredLecture = lectures?.filter((lec:any) => lec?.mimeType?.startsWith('video/') && {id: lec?.id, fileDescriptor:lec?.fileDescriptor})
        lecture = filteredLecture[0] || {id: 0, fileDescriptor: ''}
    }
    
    return lecture 
}

export const getAttachments = (lectures:any) => {
    let lecture = []

    if(lectures?.length > 0){
        const filteredLecture = lectures?.filter((lec:any) => !lec?.mimeType?.startsWith('video/'))
        lecture = filteredLecture || []
    }
    
    return lecture 
}