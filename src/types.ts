export interface User {
    school: string;
    username: string;
    password: string;
    baseurl: string;
    friendlyName: string;
    /* If non-empty, only lessons whose WebUntis subject identifier (e.g. "2b3") is in this list are included */
    subjectsWhitelist?: string[];
    /* Lessons whose WebUntis subject identifier is in this list are always excluded, even if also whitelisted */
    subjectsBlacklist?: string[];
    language?: "en" | "de";
    cancelledDisplay?: "hide" | "mark" | "show";
    showHolidays?: boolean;
    /* Whether generated school-day break ("Pause") events are included. Defaults to true */
    showBreaks?: boolean;
    accessToken?: string;
    /* Maps WebUntis subject identifiers (e.g. "2ku1") to a custom, human-readable event title */
    subjectTitles?: Record<string, string>;
    /* Maps WebUntis subject identifiers (e.g. "2ku1") to a CSS3 color name (RFC 7986 COLOR) for the generated event */
    subjectColors?: Record<string, string>;
    /* Maps the exam type abbreviation from the WebUntis lesson text (e.g. "SA" from "SA E") to a title (e.g. "Schularbeit"). The same keys also work in subjectColors */
    examTypeTitles?: Record<string, string>;
}

export interface Config {
    daysBefore: number;
    daysAfter: number;
    cacheDuration: number;
    timezone?: string;
    users: User[];
}

export interface Lesson {
    startTime: number;
    endTime: number;
    subject: string;
    teacher: string[];
    room: string;
    class: string[];
    date: Date;
    endDate?: Date;
    lstext: string;
    status: string;
    /* Renders as all day event */
    allDay?: boolean;
    /* WebUntis lstype "ex" */
    isExam?: boolean;
    /* Exam type abbreviation, first word of the exam lesson text (e.g. "SA") */
    examType?: string;
}

export interface CacheEntry {
    timestamp: number;
    ics: string;
}

export enum UntisElementType {
    CLASS = 1,
    TEACHER = 2,
    SUBJECT = 3,
    ROOM = 4,
    STUDENT = 5,
}
