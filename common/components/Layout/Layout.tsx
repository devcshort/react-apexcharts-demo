import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './hooks/useStyles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" noWrap>
            React Apex Charts Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
