const defaultBtnTheme = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
});

export const customBtnTheme = (theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
  },
});

export default defaultBtnTheme;
