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
  fab: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
});

export default defaultBtnTheme;
