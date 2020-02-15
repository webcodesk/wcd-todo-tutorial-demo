import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import gridSpacingMap from './utils/gridSpacingMap';
import gridMap from './utils/gridMap';
import { GridTypes } from './Grid.props';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { grid, cellOptions, cells } = this.props;
    const { spacing, alignContent, alignItems, direction, justify, wrap } = grid;
    const contentList = [];
    if (cells && cells.length > 0) {
      for (let i = 0; i < cells.length; i++){
        if (cellOptions[i]) {
          const { lg, md, sm, xl, xs, zeroMinWidth } = cellOptions[i];
          contentList.push(
            <GridMUI
              key={`cell${i}`}
              item={true}
              lg={gridMap[lg]}
              md={gridMap[md]}
              sm={gridMap[sm]}
              xl={gridMap[xl]}
              xs={gridMap[xs]}
              zeroMinWidth={zeroMinWidth}
            >
              {cells[i]}
            </GridMUI>
          );
        }
      }
    }
    return (
      <GridMUI
        container={true}
        alignContent={alignContent}
        alignItems={alignItems}
        justify={justify}
        wrap={wrap}
        direction={direction}
        spacing={gridSpacingMap[spacing]}
      >
        {contentList}
      </GridMUI>
    );
  }
}

Grid.propTypes = GridTypes;

Grid.defaultProps = {
  grid: {
    spacing: '0',
    alignContent: 'stretch',
    alignItems: 'stretch',
    direction: 'row',
    justify: 'flex-start',
    wrap: 'nowrap',
  },
  cellOptions: [
    {
      lg: 'false',
      md: 'false',
      sm: 'false',
      xl: 'false',
      xs: 'auto',
      zeroMinWidth: false,
    }
  ],
  cells: [
    <span/>
  ]
};

export default Grid;
