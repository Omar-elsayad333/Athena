// Translate day into arabic
export const dayTranslateToArabic = (day: string | undefined | null) => {
    switch (day) {
        case 'Monday':
            return 'الاثنين'
        case 'Tuesday':
            return 'الثلاثاء'
        case 'Wednesday':
            return 'الاربعاء'
        case 'Thursday':
            return 'الخميس'
        case 'Friday':
            return 'الجمعة'
        case 'Saturday':
            return 'السبت'
        case 'Sunday':
            return 'الاحد'
        default:
            return 'يوم -'
    }
}

// Translate gender into arabic
export const genderTranslate = (gender: string) => {
    switch (gender) {
        case 'male':
            return 'ذكر'
        case 'female':
            return 'انثي'
        case 'ذكر':
            return 'male'
        case 'انثي':
            return 'female'
        default:
            return ''
    }
}

// Translate gender into arabic
export const examStudentStatesTranslate = (state: string) => {
    switch (state) {
        case 'Failure':
            return 'راسب'
        case 'Absent':
            return 'متغيب'
        case 'Excellent':
            return 'متميز'
        case 'Successful':
            return 'ناجح'
        default:
            return ''
    }
}
