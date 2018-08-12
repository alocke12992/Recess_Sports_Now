import React from 'react';
import {Icon, Label, Field, Control, Input, Button} from 'bloomer';

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

  closeSearch = () => {
    this.props.toggleSearch()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field>
          <Control hasIcons>
            <Input
              isColor='success'
              placeholder='Search...'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <Icon isSize='small' isAlign='left'>
              <span className="fa fa-search" />
            </Icon>
          </Control>
        </Field>
        <Button onClick={this.closeSearch}>
          <Icon isSize='small' isAlign='right'>
            <span className="fa fa-times" />
          </Icon>
        </Button>
      </form>
    )
  }
}

export default Search;