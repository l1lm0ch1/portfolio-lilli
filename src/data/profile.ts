import type { Language } from '../i18n/translations';

export const BIRTH_DATE = '2004-08-04';

export const MASTER_START = '2026-09';
export const MASTER_SEMESTERS = 4;

const WINTER_SEMESTER_START_MONTH = 9;
const SUMMER_SEMESTER_START_MONTH = 2;

const MONTHS: Record<Language, string[]> = {
    de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const PRESENT: Record<Language, string> = { de: 'heute', en: 'present' };
const RECURRING: Record<Language, string> = { de: 'wiederkehrend', en: 'recurring' };

interface YearMonth {
    year: number;
    month?: number;
}

function parseYearMonth(value: string): YearMonth {
    const [year, month] = value.split('-').map(Number);
    return { year, month };
}

function semesterIndex(year: number, month: number): number {
    if (month >= WINTER_SEMESTER_START_MONTH) return year * 2 + 1;
    if (month >= SUMMER_SEMESTER_START_MONTH) return year * 2;
    return year * 2 - 1;
}

export function getAge(today: Date = new Date()): number {
    const [year, month, day] = BIRTH_DATE.split('-').map(Number);
    const hadBirthday =
        today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day);
    return today.getFullYear() - year - (hadBirthday ? 0 : 1);
}

export function getCurrentSemester(today: Date = new Date()): number {
    const start = parseYearMonth(MASTER_START);
    const semester =
        semesterIndex(today.getFullYear(), today.getMonth() + 1) - semesterIndex(start.year, start.month ?? 1) + 1;
    return Math.min(Math.max(semester, 1), MASTER_SEMESTERS);
}

export function formatSemester(semester: number, language: Language): string {
    if (language === 'de') return `${semester}.`;
    const suffixes: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd' };
    return `${semester}${suffixes[semester] ?? 'th'}`;
}

export function isOngoing(end?: string, today: Date = new Date()): boolean {
    if (!end) return true;
    const { year, month } = parseYearMonth(end);
    const currentYear = today.getFullYear();
    if (month === undefined) return year > currentYear;
    return year > currentYear || (year === currentYear && month >= today.getMonth() + 1);
}

function formatYearMonth({ year, month }: YearMonth, language: Language): string {
    return month === undefined ? `${year}` : `${MONTHS[language][month - 1]} ${year}`;
}

export function formatPeriod(language: Language, start: string, end?: string, recurring?: boolean): string {
    if (recurring) return RECURRING[language];

    const from = parseYearMonth(start);
    if (isOngoing(end)) return `${formatYearMonth(from, language)} – ${PRESENT[language]}`;

    const to = parseYearMonth(end as string);
    if (from.month !== undefined && to.month !== undefined && from.year === to.year) {
        if (from.month === to.month) return formatYearMonth(from, language);
        return `${MONTHS[language][from.month - 1]} – ${formatYearMonth(to, language)}`;
    }

    return `${formatYearMonth(from, language)} – ${formatYearMonth(to, language)}`;
}