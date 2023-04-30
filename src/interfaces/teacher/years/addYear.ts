export interface LevelsProps {
    id: string
    introFee: number
    monthFee: number
}

export interface YearProps {
    name: string
    error: boolean
}

export const YearInitialValue = {
    name: '',
    error: false,
}
