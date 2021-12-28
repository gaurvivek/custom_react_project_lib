import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '../Icon/SearchIcon';
import FormGroupSelect from '../form/FormGroupSelect';
import FormInput from '../form/FormInput';
import '../../assets/css/SearchBar.scss';

export default function SearchBar({ filterProps, serachInputProps, handleSubmit }) {
  return (
    <div data-testid="searchbar" className="searchbar-container">
      <Form onSubmit={handleSubmit} data-testid="searchForm">
        <InputGroup size="lg">
          <FormGroupSelect {...filterProps} />
          <FormInput {...serachInputProps} />
          <InputGroup.Text onClick={handleSubmit}>
            <SearchIcon Fill="#9A9A9A" />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  filterProps: PropTypes.objectOf(
    PropTypes.shape({
      inputProps: PropTypes.objectOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          placeholder: PropTypes.string,
          options: PropTypes.arrayOf(
            PropTypes.shape({ key: PropTypes.string, value: PropTypes.string }),
          ),
          onChange: PropTypes.func.isRequired,
        }),
      ),
    }),
  ),
  serachInputProps: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func.isRequired,
      isInvalid: PropTypes.bool,
    }),
  ),
  handleSubmit: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  filterProps: {
    inputProps: {
      placeholder: 'All',
      options: [
        { key: 'filter', value: 'Search Filter' },
      ],
      value: '',
    },
  },
  serachInputProps: {
    type: 'text',
    placeholder: 'Search',
    value: '',
    isInvalid: false,
  },
};
