export interface LevelsProps {
    id: string
    name: string
    introFee: number | string
    monthFee: number | string
    error: boolean
    open: boolean
    fristSemeterStartDate: Date | string
    fristSemeterEndDate: Date | string
    secondSemeterStartDate: Date | string
    secondSemeterEndDate: Date | string
}

export interface YearProps {
    name: string
    error: boolean
    helperText: string
}

export const YearInitialValue = {
    name: '',
    error: false,
    helperText: '',
}
