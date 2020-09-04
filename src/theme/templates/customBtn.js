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
  fabSM: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
    transition: '0.7s',
  },
  fab: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
    transition: '0.7s',
    scale: 1.75,
    '&:hover': {
      scale: 1.5,
    },
  },
  fabPosition: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    zIndex: 1000,
  },
});

export default defaultBtnTheme;
