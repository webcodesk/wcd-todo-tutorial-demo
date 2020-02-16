import React from 'react';
import ContainerMUI from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { ContainerTypes } from './Container.props';

const styles = theme => ({
  root: {
    position: 'relative'
  },
});

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, content, fixed, maxWidth, disableMaxWidth } = this.props;
    return (
      <ContainerMUI
        className={classes.root}
        fixed={fixed}
        maxWidth={disableMaxWidth ? false : maxWidth}
      >
        {content}
      </ContainerMUI>
    );
  }
}

Container.propTypes = ContainerTypes;

Container.defaultProps = {
  fixed: false,
  maxWidth: 'lg',
  disableMaxWidth: false,
  content: <span />
};

export default withStyles(styles)(Container);
