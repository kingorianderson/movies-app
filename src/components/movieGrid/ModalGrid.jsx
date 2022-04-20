import "./modalGrid.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../movieCard/ModalCard";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

const ModalGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);
  return (
    <div className="movie-grid">
      {items.map((item, i) => (
        <MovieCard category={props.category} item={item} key={i} />
      ))}
    </div>
  );
};

export default ModalGrid;
