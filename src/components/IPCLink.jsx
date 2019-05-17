import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    link: {
        textDecoration: 'none',
        height: '20px',
        lineHeight: '20px'
    },
    img: {
        width: '20px',
        display: 'inline'
    },
    content: {
        margin: theme.spacing.unit,
        height: '20px',
        lineHeight: '20px',
        color: '#939393'
    }
})

const IPCLink = ({ classes, user }) => (
    <Typography align="center">
          <img className={classes.img} src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" />
          <Typography inline align="center" className={classes.content}>
          京ICP备19021303号
          </Typography>
    </Typography>
)

export default withStyles(styles)(IPCLink)