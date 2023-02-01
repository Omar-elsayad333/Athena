export interface ImageProps {
    mainImage: string;
    error: boolean;
    helperText: string;
    extension: string;
    base64Image: string | null | ArrayBuffer;
}

export const imageInitialValues = {
    mainImage: '',
    base64Image: '',
    error: false,
    helperText: '',
    extension: ''
}