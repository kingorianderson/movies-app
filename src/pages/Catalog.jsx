import React from "react";
import { useParams } from "react-router";
import PageHeader from "../components/pageHeader/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movieGrid/ModalGrid";

const Catalog = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      {" "}
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
