import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'
import { mainPages } from '../router/index'
import { history } from '../store/configureStore'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class AppDrawer extends React.Component {

  render() {
    const { classes, open, onClose, onMenuClick } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          { mainPages.map((page, index) => (
            <ListItem button key={index} onClick={ e => {
              onMenuClick(page.title)
              history.push(page.path)
            }}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['测试',].map((text, index) => (
            <ListItem button key={text} o>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={open} onClose={onClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);