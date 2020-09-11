const modalTheme = (theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-${50}%, -${50}%)`,
    width: 400,
    height: 450,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '6px',
    overflow: 'hidden',
    padding: '2em',
  },
  h1: {
    fontSize: '24px',
    fontWeight: '700',
  },
  h2: {
    fontSize: '20px',
    fontWeight: '500',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '18px',
  },
  paragraphSM: {
    fontSize: '14px',
    lineHeight: '20px',
  },
});

export default modalTheme;

//#181818 -bg
