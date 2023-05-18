
import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import * as pixabayAPI from '../../services/pixabayAPI';
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Container, LoadButton } from "./App.styled";



const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);
  const [scrollRef, setScrollRef] = useState(null)



  useEffect(() => {
    if (query) {
      const getSearchImages = async () => {
        setIsLoading(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));

          const foundPictures = await pixabayAPI.getPictures(query, page);

          if (foundPictures.length === 0) {
            setError("Nothing found for your request");
          }
          setImages((prevImages) => [...prevImages, ...foundPictures.hits]);

        } catch (error) {
          setError(error.message);
        }
        finally {
          setIsLoading(false);
        }
      }

      getSearchImages();
    }
  }, [query, page])

  const handelSubmit = (searchQuery) => {

    if (query !== searchQuery) {
      setImages([]);
      setPage(1);
      setError(null);
    }
    setQuery(searchQuery);
  }

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }


  const scrollTofirstImageInCollection = (ref) => {
    if (ref.current.children.length > 0) {
      const firstImageInCollection =
        ref.current.children[ref.current.children.length - 12];
      
      setScrollRef(firstImageInCollection)

      if (scrollRef !== firstImageInCollection) {
        firstImageInCollection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <Container>
      <ToastContainer autoClose={3000} position="top-left" />
      <Searchbar onSubmit={handelSubmit} isSybmitting={isLoading} />
      {error && <h2>{error}</h2>}
      <ImageGallery images={images} getRef={scrollTofirstImageInCollection} />
      {isLoading && <Loader />}
      {images.length > 0 &&
        <LoadButton onClick={loadMore}>
          Load more
        </LoadButton>}
    </Container>
  );
}

export { App };

