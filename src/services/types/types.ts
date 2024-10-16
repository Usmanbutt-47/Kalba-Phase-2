export type User = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    subjects: any[],
}

export type Education = {
    id?: number,
    college: string,
    degree: string,
    year: string,
    major: string
}

export type Experience = {
    id?: number,
    jobTitle: string,
    toDate: Date | null,
    fromDate: Date | null,
    companyName: string,
}

export type Subject = {
    id?: number,
    name: string,
    grade: string,
    subjectCategoryId: string,
}

export type Certification = {
    id?: number,
    title: string,
    certificateAttachmentId: number,
}

export type Country = {
    id: number,
    name: string,
    nativeName: string,
    iso2: string,
    iso3: string,
}

export type Chat = [{
    messageId: number,
    threadId: number,
    message: string,
    receiverId: number,
    senderId: number,
    timestamp?: any,
}]

export type ChangeData = {
    selected: number,
}

export type Course = {
    id?: number,
    title: string,
    courseRate: number,
    teacherId: number,
    description: string,
    bannerUrl: string,
    isPaidCourse: boolean,
    thumbnailUrl: string,
    bannerDescriptor: string,
    thumbnailDescriptor: string,
}

export type Lecture = {
    id?: number,
    title: string,
    courseId: number,
    lectureAttachmentId: number,
    description: string,
    isApproved: boolean
}