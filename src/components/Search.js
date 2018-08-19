import React from 'react';
import {Field, Control, Input} from 'bloomer';

class Search extends React.Component {
  state = {searchTerm: ''}

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let searchTerm = this.state.searchTerm.toLowerCase()
    this.props.getSearch(searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <Field style={{marginRight: '10px'}}>
          <Control>
            <Input
              style={{height: '10%'}}
              placeholder='Search...'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
      </form>
    )
  }
}

export default Search;