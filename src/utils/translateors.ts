// Translate day into arabic
export const dayTranslateToArabic = (day: string | undefined | null) => {
    switch(day) {
        case 'Monday':
            return 'الأثنان'
        case 'Tuesday':
            return 'الثلاثاء'
        case 'Wednesday':
            return 'الأربعاء'
        case 'Thursday':
            return 'الخميس'
        case 'Friday':
            return 'الجمعه'
        case 'Saturday':
            return 'السبت'
        case 'Sunday':
            return 'الحد'
        default:
            return 'يوم -'          
    }
}

// Translate gender into arabic
export const genderTranslate = (gender: string) => {
    switch(gender) {
        case 'male': 
            return 'ذكر'
        case 'female':
            return 'انثي'
        default:
            return ''
    }
} 