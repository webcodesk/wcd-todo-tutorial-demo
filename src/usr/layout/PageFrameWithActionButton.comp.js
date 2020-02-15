import React from 'react';
import { PageFrameWithActionButtonTypes } from './PageFrameWithActionButton.props';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  actionButtonCell: {
    position: 'fixed',
    bottom: '1em',
    right: '1em',
    zIndex: 10,
  },
});

class PageFrameWithActionButton extends React.Component {
  render() {
    const { classes, children, actionButtonCell } = this.props;
    return (
      <div className={classes.root}>
        {children}
        <div className={classes.actionButtonCell}>
          {actionButtonCell}
        </div>
      </div>
    );
  }
}

PageFrameWithActionButton.propTypes = PageFrameWithActionButtonTypes;

PageFrameWithActionButton.defaultProps = {
  children: [
    <span/>,
  ],
  actionButtonCell: <span/>
};

export default withStyles(styles, { withTheme: true })(PageFrameWithActionButton);
