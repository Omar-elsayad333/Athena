import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { useTheme } from 'context/ThemeContext'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    // 'June',
    // 'July',
    // 'August',
    // 'September',
    // 'October',
    // 'November',
    // 'December',
]

type Props = {
    examData: any
}

const HomeChartComponent: React.FC<Props> = ({ examData }) => {
    const { mainColors, darkMode } = useTheme()

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: mainColors.primary.main,
                    font: {
                        size: 18,
                    },
                    padding: 30,
                },
            },
            title: {
                display: false,
                text: 'Exam Chart',
            },
            tooltip: {
                backgroundColor: mainColors.paper.main, // Change the tooltip background color
                bodyColor: mainColors.title.main, // Change the tooltip body text color
                titleColor: mainColors.title.main, // Change the tooltip title text color
                padding: 15,
                bodyFont: {
                    size: 14, // Set the font size for tooltip body text
                    weight: 'bold',
                },
                titleFont: {
                    size: 16, // Set the font size for tooltip title text
                },
            },
            labels: {
                color: mainColors.primary.main,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: mainColors.primary.main,
                    font: {
                        size: 15,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: darkMode ? 'rgba(224, 238, 255, .3)' : 'rgba(63, 114, 164, .3)', // Change the y-axis grid lines color
                },
            },
            y: {
                ticks: {
                    color: mainColors.primary.main,
                    font: {
                        size: 15,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: darkMode ? 'rgba(224, 238, 255, .3)' : 'rgba(63, 114, 164, .3)', // Change the y-axis grid lines color
                },
            },
        },
    }

    const getAdjustedData = (type: string) => {
        const newData: any = []
        if (examData && examData.length > 0) {
            examData.map((month: any) => {
                month.map((item: any) => {
                    newData.push[item[type]]
                })
            })
        }

        return newData
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'عدد الطلاب المتميزين',
                data: getAdjustedData('distinctive'),

                hoverBackgroundColor: '#FFCC00',
                backgroundColor: 'rgba(255, 204, 0, 0.25)',

                borderColor: '#FFCC00',
                borderWidth: 2,
                borderRadius: 50,
            },
            {
                label: 'عدد الطلاب الناجحين',
                data: getAdjustedData('successed'),

                hoverBackgroundColor: '#29D277',
                backgroundColor: 'rgba(41, 210, 119, 0.25)',

                borderColor: '#29D277',
                borderWidth: 2,
                borderRadius: 50,
            },
            {
                label: 'عدد الطلاب الراسبين',
                data: getAdjustedData('failed'),

                hoverBackgroundColor: '#AE0000',
                backgroundColor: 'rgba(174, 0, 0, 0.25)',

                borderColor: '#AE0000',
                borderWidth: 2,
                borderRadius: 50,
            },
            {
                label: 'عدد الطلاب المتغيبين',
                data: getAdjustedData('absent'),

                hoverBackgroundColor: '#AE0000',
                backgroundColor: 'rgba(174, 0, 0, 0.25)',

                borderColor: '#AE0000',
                borderWidth: 2,
                borderRadius: 50,
            },
        ],
    }

    return <Bar style={{ maxWidth: '100%' }} options={options} data={data} />
}

export default HomeChartComponent
