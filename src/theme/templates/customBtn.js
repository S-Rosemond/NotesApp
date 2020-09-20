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
    transform: 'scale(1.75)',
    '&:hover': {
      transform: 'scale(1.5)',
    },
  },
  fabPosition: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    zIndex: 1000,
  },
  flexChangeLayout: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    paddingRight: '40px',
  },
  spaceLayoutBtn: {
    display: 'flex',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
  },
  iconClass: {
    fontSize: '2rem !important',
    width: '1.5em !important',
  },
});

export default defaultBtnTheme;
