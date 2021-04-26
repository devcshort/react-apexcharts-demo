import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(7),
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(7),
    },
  },
  drawerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default useStyles;
