import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { toast } from "react-toastify";

import {
  Button,
  ButtonLabel,
  Input,
  SearchContainer,
  SearchForm,
} from "./Searchbar.styled";

class Searchbar extends Component {
  static propTypes = {
    isSybmitting: PropTypes.bool.isRequired,
  };

  handleSubmit = (values, { resetForm }) => {
    const { search } = values;
    const { onSubmit } = this.props;

    if (search.trim() === "") {
      toast("Please enter a value");
      return;
    }

    onSubmit(search);
    resetForm();
  };

  render() {
    const { isSybmitting } = this.props;
    return (
      <SearchContainer>
        <Formik initialValues={{ search: "" }} onSubmit={this.handleSubmit}>
          <SearchForm>
            <Button type="submit" disabled={isSybmitting}>
              <ButtonLabel>Search</ButtonLabel>
            </Button>

            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="search"
            />
          </SearchForm>
        </Formik>
      </SearchContainer>
    );
  }
}

export { Searchbar };
