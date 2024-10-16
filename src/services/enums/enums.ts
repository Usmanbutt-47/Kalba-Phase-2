export enum RolesEnum {
	STUDENT = 1,
	TEACHER = 2,
	ADMIN = 3,
}

export enum TeachingLevelEnum {
	Basic = "Basic",
    Intermediate = "Intermediate",
    Professional = "Professional"
}

export enum EducationLevelEnum {
	Any = "Any",
    Elementary = "Elementary",
    School = "School",
    "High School" = "High School",
    College = "College",
    Adult = "Adult"
}

export enum timeSlotsEnum {
	"01:00:00" = '1 am',
    "02:00:00" = '2 am',
    "03:00:00" = '3 am',
    "04:00:00" = '4 am',
    "05:00:00" = '5 am',
    "06:00:00" = '6 am',
    "07:00:00" = '7 am',
    "08:00:00" = '8 am',
    "09:00:00" = '9 am',
    "10:00:00" = '10 am',
    "11:00:00" = '11 am',
    "12:00:00" = '12 pm',
    "13:00:00" = '1 pm',
    "14:00:00" = '2 pm',
    "15:00:00" = '3 pm',
    "16:00:00" = '4 pm',
    "17:00:00" = '5 pm',
    "18:00:00" = '6 pm',
    "19:00:00" = '7 pm',
    "20:00:00" = '8 pm',
    "21:00:00" = '9 pm',
    "22:00:00" = '10 pm',
    "23:00:00" = '11 pm',
    "00:00:00" = '12 am'
}

export enum TimePeriodEnum {
	'Morning' = 'Morning',
    'Day' = 'Day',
    'Afternoon' = 'Afternoon',
    'Evening' = 'Evening',
    'Night' = 'Night',
}

export enum GenderEnum {
	MALE = 'Male',
	FEMALE = 'Female',
    OTHER = 'Other'
}

export enum LectureStatusEnum {
	PENDING = 'PENDING',
	ACCEPTED = 'ACCEPTED',
	REJECTED = 'REJECTED',
	COMPLETED = 'COMPLETED',
	CANCELLED = 'CANCELLED',
	EXPIRED = 'EXPIRED',
	DISPUTED = 'DISPUTED',
	RESCHEDULED = 'RESCHEDULED'
}

export enum sortOrderEnum {
	ASC = 'ASC',
	DESC = 'DESC',
}

export enum RequestStatusEnum {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
}

export enum teacherListingSortEnum {
	Price = 'Price',
	Rating = 'Rating',
}

export enum PaymentStatusEnum {
    PENDING = "Pending",    // Payment created but uncaptured
    CAPTURED = 'Captured',
    REFUNDED = "Refunded",
    REFUNDED_CAPTURED = "Refunded_Captured",
}

export enum TransactionStatusEnum {
    PARTIAL_CAPTURED = 'Partial_Captured',
    CAPTURED = 'Captured',
    PARTIAL_REFUNDED = "Partial_Refunded",
    REFUNDED = "Refunded",
    APPLICATION_FEE = 'Application_Fee'
}

export enum NotificationTypeEnum {
	LECTURE = 1,
	MESSAGE = 2,
	GENERAL = 3,
	MEETING = 4,
	SEEKER_ACCOUNT = 5,
	CUSTOM_REQUEST = 6,
	PAYMENT = 7,
	SUBJECT = 8,
	SKILLER_ACCOUNT = 9,
}

export enum DisputedLectureActionEnum {
    COMPLETED = 'COMPLETED',
    REFUNDED = "REFUNDED",
    REFUNDED_CAPTURED = "REFUNDED_CAPTURED",
}

export enum sqsEnumTypes {
	CHAT = 'chat',
	NOTIFICATION = 'notification',
	MEETING = 'meeting',
	LECTURE = 'lecture',
	SUBJECT = 'subject',
}

export enum ExpressTypeEnum {
	account_onboarding = 'account_onboarding',
}

export enum listingLimitEnum {
	TEN = '10',
	TWENTYfIVE = '25',
	FIFTY = '50',
	HUNDRED = '100',
}