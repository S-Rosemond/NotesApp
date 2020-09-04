import { makeStyles } from '@material-ui/core/styles';
import defaultBtnTheme, { customBtnTheme } from '../templates/customBtn';
import navTheme from './../templates/navigation';

export const useNavStyles = makeStyles(navTheme);
export const useBtnTheme = makeStyles(customBtnTheme);
export default makeStyles(defaultBtnTheme);
