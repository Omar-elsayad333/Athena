class Urls {
    // Main url
    static URL_MAIN: string = 'https://athenaapi.azurewebsites.net'
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
    static URL_PROFILE: string = '/api/teacher/profile'

    static URL_YEARS: string = '/api/teacher/years'
    static URL_YEARS_END: string = '/api/teacher/years/end'
    static URL_YEARS_LEVEL: string = '/api/teacher/years/level'
    static URL_YEARS_LEVELS: string = '/api/teacher/years/levels'

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
    static URL_TEACHERSTUDENTS_EXAMS: string = '/api/teacher/teacherstudents/info/examsresult'

    static URL_TEACHER_EXAMS: string = '/api/teacher/exams'
    static URL_TEACHER_EXAMS_GROUPS: string = '/api/teacher/exams/groups'
    static URL_TEACHER_EXAMS_SECTION: string = '/api/teacher/exams/section'
    static URL_TEACHER_EXAMS_SECTION_IMAGE: string = '/api/teacher/exams/section/sectionimage'
    static URL_TEACHER_EXAMS_SECTION_QUESTION: string = '/api/teacher/exams/section/question'
    static URL_TEACHER_EXAMS_SECTION_QUESTION_IMAGE: string =
        '/api/teacher/exams/section/question/questionimage'
    static URL_TEACHER_EXAMS_SECTION_QUESTION_CHOICE: string =
        '/api/teacher/exams/section/question/questionchoice'
    static URL_TEACHER_EXAMS_SECTION_QUESTION_CHOICE_IMAGE: string =
        '/api/teacher/exams/section/question/questionchoice/image'

    // App sections required urls
    static URL_YEARS_REQUIRED: string = '/api/teacher/years/required'
    static URL_GROUPS_REQUIRED: string = '/api/teacher/groups/required'
    static URL_TEACHER_EXAMS_REQUIRED: string = '/api/teacher/exams/required'
    static URL_TEACHERSTUDENT_REQUIRED: string = '/api/teacher/teacherstudents/required'
}

export default Urls
