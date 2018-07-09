import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { songname: 'DumpWeed', albumname: 'Enema of the State' },
  { songname: 'Aliens Exist', albumname: 'Enema of the State' },
  { songname: 'Cynical', albumname: 'California' },
  { songname: 'Bored to Death', albumname: 'California' },
]

class SongsTable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'songname' ? direction : null}
              onClick={this.handleSort('songname')}
            >
              Song Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'age' ? direction : null}
              onClick={this.handleSort('albumname')}
            >
              Album Name
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ albumname, songname }) => (
            <Table.Row key={songname}>
              <Table.Cell>{songname}</Table.Cell>
              <Table.Cell>{albumname}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default SongsTable