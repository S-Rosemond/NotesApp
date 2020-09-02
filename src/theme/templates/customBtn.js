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
    zIndex: 1000,
    transition: '0.7s',
    scale: 1.75,
    '&:hover': {
      scale: 1.5,
    },
  },
});

export default defaultBtnTheme;
