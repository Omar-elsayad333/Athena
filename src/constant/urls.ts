class Urls {
    // Main url
    static URL_MAIN: string = 'https://athena.linkers.at'
    static URL_MAIN_STUDENT = 'https://athena-student.vercel.app/'
    static URL_MAIN_STUDENT_LOGIN = 'https://athena-student.vercel.app/login'

    // Token urls
    static URL_AUTH_TOKENS: string = '/api/auth/tokens'
    static URL_AUTH_TOKENS_REFRESH: string = '/api/auth/tokens/refresh'

    // Users urls
    static URL_STUDENTS: string = '/api/students'
    static URL_TEACHERS: string = '/api/teachers'
    static URL_EMPLOYEE: string = '/api/employee'
    static URL_DASHBOARD_TEACHERS_BASE: string = '/api/dashboard/teachers/base'

    // Teacher app sections urls
    static URL_YEARS: string = '/api/teacher/years'
    static URL_YEARS_END: string = '/api/teacher/years/end'
    static URL_YEARS_OPEN_SEMESTER: string = '/api/teacher/years/level/semster'
    static URL_LEVELS: string = '/api/teacher/levels'
    static URL_COURSES: string = '/api/teacher/courses'
    static URL_GROUPS: string = '/api/teacher/groups'
    static URL_HEADQUARTERS: string = '/api/teacher/headquarters'
    static URL_CLASSIFICATIONS: string = '/api/teacher/classifications'
    static URL_TEACHERSTUDENTS: string = '/api/teacher/teacherstudents'
    static URL_TEACHERSTUDENTS_CODE: string = '/api/teacher/teacherstudents/code'
    static URL_TEACHERSTUDENTS_ASSIGN: string = '/api/teacher/teacherstudents/assign'
    static URL_TEACHERSTUDENTS_INFO: string = '/api/teacher/teacherstudents/info'
    static URL_TEACHERSTUDENTS_GROUP: string = '/api/teacher/teacherstudents/group'
    static URL_TEACHER_EXAMS: string = '/api/teacher/exams'
    static URL_TEACHER_EXAMS_GROUPS: string = '/api/teacher/exams/groups'

    // App sections required urls
    static URL_YEARS_REQUIRED: string = '/api/teacher/years/required'
    static URL_GROUPS_REQUIRED: string = '/api/teacher/groups/required'
    static URL_TEACHER_EXAMS_REQUIRED: string = '/api/teacher/exams/required'
    static URL_TEACHERSTUDENT_REQUIRED: string = '/api/teacher/teacherstudents/required'
}

export default Urls
