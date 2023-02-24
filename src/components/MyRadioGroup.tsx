import { IStyle } from 'styles/IStyle';
import { useTheme } from 'context/ThemeContext';

// MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
    data: any;
    getSelected: Function;
    indexes?: any;
    value: string;
}

const MyRadioGroup: React.FC<Props> = ({ data, getSelected, indexes, value }) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        root: {
            margin: 0,
            '.MuiFormControlLabel-label': {
                color: mainColors.primary.main,
                fontSize: '20px',
                '@media screen and (max-width: 500px)': {
                    fontSize: '16px'
                }
            },
            '.MuiSvgIcon-root': {
                color: mainColors.primary.main
            }
        }
    }

    return (
        <FormControl>
            <RadioGroup
                row
                sx={{gap: '20px'}}
                onChange={(e) => getSelected(e, indexes)}
            >
                {
                    data.map((item: any) => (
                        <FormControlLabel
                            sx={style.root}
                            key={item.id}
                            value={item.id}
                            name={item.name}
                            label={item.name}
                            checked={value == item.id ? true : false}
                            control={<Radio />} 
                        />
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}
 
export default MyRadioGroup;