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

const Searchbar = ({ isSybmitting, onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { search } = values;

    if (search.trim() === "") {
      toast("Please enter a value");
      return;
    }

    onSubmit(search);
    resetForm();
  };

  return (
    <SearchContainer>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
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
};

Searchbar.propTypes = {
  isSybmitting: PropTypes.bool.isRequired,
};

export { Searchbar };
