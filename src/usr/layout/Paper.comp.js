import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PaperMUI from '@material-ui/core/Paper';
import { PaperTypes } from './Paper.props';
import pickWithValues from './utils/pickWithValues';

const styles = theme => ({
  root: {
    width: '100%'
  }
});

/**
 * Replace this comment with a valuable description.
 */
class Paper extends React.Component {
  render() {
    const { classes, elevation, square, variant, children} = this.props;
    return (
      <PaperMUI
        className={classes.root}
        elevation={parseInt(elevation)}
        {...pickWithValues({square, variant})}
      >
        {children}
      </PaperMUI>
    );
  }
}

Paper.propTypes = PaperTypes;

Paper.defaultProps = {
  elevation: '1',
  square: false,
  variant: 'elevation',
  children: [<span />]
};

export default withStyles(styles)(Paper);
