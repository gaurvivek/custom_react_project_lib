import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../searchBar/SearchBar';
import FormButton from '../form/FormButton';
import '../../assets/css/TitleBar.scss';
import BreadCrumbs from '../breadcrum/Breadcrum';

export default function TitleBar({
  title, searchBar, serachBarProps, actionBtn, action, breadCrumsProps,
}) {
  return (
    <>
      <BreadCrumbs data={breadCrumsProps} />
      <div className="titlebar-container">
        <span className="title">{title}</span>
        {searchBar && <SearchBar {...serachBarProps} />}
        {actionBtn && (
        <FormButton
          btnText={actionBtn}
          onClick={action}
          otherProps={{
            className: 'fw-bold title-btn',
            alt: 'create-user',
            'data-testid': 'titlebar-button',
          }}
        />
        )}
      </div>
    </>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool,
  serachBarProps: PropTypes.object,
  actionBtn: PropTypes.string,
  action: PropTypes.func,
  breadCrums: PropTypes.bool,
  breadCrumsProps: PropTypes.array,
};

TitleBar.defaultProps = {
  searchBar: false,
  serachBarProps: { filterProps: {}, serachInputProps: {} },
  actionBtn: '',
  action: () => null,
  breadCrums: false,
  breadCrumsProps: [],
};
