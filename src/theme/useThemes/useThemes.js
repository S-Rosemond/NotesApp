import { makeStyles } from '@material-ui/core/styles';
import defaultBtnTheme, { customBtnTheme } from '../templates/customBtn';
import navTheme from './../templates/navigation';
import modalTheme from '../templates/modal';
import cardTheme from '../templates/cards';

export const useNavStyles = makeStyles(navTheme);
export const useBtnTheme = makeStyles(customBtnTheme);
export const useModalTheme = makeStyles(modalTheme);
export const useCardTheme = makeStyles(cardTheme);
export default makeStyles(defaultBtnTheme);
