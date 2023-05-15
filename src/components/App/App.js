
import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import * as pixabayAPI from '../../services/pixabayAPI';
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Container, LoadButton } from "./App.styled";



class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    currentQuery: null,
    error: null
  }


  getSearchImages = async (searchQuery) => {
    const { page, currentQuery } = this.state;

    if (currentQuery !== searchQuery) {
      this.setState({ images: [], page: 1, error: null });
    }

    try {
      this.setState({ isLoading: true });

      await new Promise(resolve => setTimeout(resolve, 2000));

      const images = await pixabayAPI.getPictures(searchQuery, page);

      if (images.hits.length === 0) {
        this.setState({ error: "Nothing found for your request" });
      }
      this.setState({ currentQuery: searchQuery });
      this.setState((prevState) => ({
        images: [...prevState.images, ...images.hits],
        isLoading: false,
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
    finally {
      this.setState({ isLoading: false });
    }
  }


  render() {
    const { images, isLoading, currentQuery, error } = this.state

    return (
      <Container>
        <ToastContainer autoClose={3000} position="top-left" />
        <Searchbar onSubmit={this.getSearchImages} isSybmitting={isLoading} />
        {error && <h2>{error}</h2>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 &&
          <LoadButton onClick={() => this.getSearchImages(currentQuery)}>
            Load more
          </LoadButton>}
      </Container>
    );
  }

}

export { App };

