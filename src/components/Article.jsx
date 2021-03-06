import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Markdown from './markdown/Markdown';
import { connect } from 'react-redux';
import { queryArticle, deleteArticle } from '../store/actions/articles'
import { getQueryStringByName } from '../utils/url'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import Avatar from './Avatar'
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { history } from '../store/configureStore'
import CommentList from './comment/CommentList'
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  title: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  author: {
    marginTop: theme.spacing.unit * 2,
    'align-items': 'center',
  },
  markdown: {
    width: 'auto',
    marginTop: theme.spacing.unit * 100,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  content: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: theme.primary
    },
  },
  meta: {
    margin: theme.spacing.unit * 2,
  },
  inline: {
    display: 'inline'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  picAvatar: {
    objectFit: 'cover'
  }
});

const Meta = ({ classes, meta }) => (
  <React.Fragment>
    <EyeIcon /> 1
    <MessageIcon type="message" /> 0
    <FavoriteIcon type="heart" /> 2
    <Typography inline component="span" className={classes.meta}>
      {meta.time}
    </Typography>
  </React.Fragment>
)

const Author = ({ classes, article, edite, deleteArticle }) => (
  <Grid container alignItems="center">
    <Avatar user={article.user} />

    <Grid item xs>
      <Typography className={classes.author} variant="h5" color="textSecondary">
        {article.user.username}
      </Typography>
      <Meta classes={classes} meta={article.blog} />
    </Grid>
    {edite ?
      (<Grid container xs justify='flex-end'>
        <Button className={classes.edite} onClick={event => history.push('/editor?article_id=' + article.blog.id)}>
          编辑
        </Button>
        <Button className={classes.edite}
          onClick={event => deleteArticle(article.blog.id)}>
          删除
        </Button>
      </Grid>) : ''}
  </Grid >
)

class Article extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
    this.props.queryArticle(getQueryStringByName('article_id'))
  }

  render() {
    const { classes, article, user, deleteArticle } = this.props
    const edite = user !== null && user.id === article.user.id

    return (
      <div className={classes.content}>
        <CssBaseline />
        <p className={classes.title}></p>
        <Typography variant="h3" align="center">
          {article.blog.title}
        </Typography>
        <Author classes={classes} article={article} edite={edite} deleteArticle={deleteArticle} />
        <Markdown className={classes.markdown}
          markdown={article.blog.content}>
        </Markdown>
        <CommentList blogID={article.blog.id} />
      </div>
    )
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  article: state.article,
  user: state.user,
})

const mapDispatchToProps = { queryArticle, deleteArticle }

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Article))

export default ArticleContainer;