export interface LevelsProps {
    id: string
    introFee: number | undefined | string
    monthFee: number | undefined | string
    error: boolean
    open: boolean
}

export interface YearProps {
    name: string
    error: boolean
}

export const YearInitialValue = {
    name: '',
    error: false,
}
