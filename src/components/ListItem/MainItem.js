import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "../../common/CustomLink";

// styles
import "./MainItem.scss";

// actions
import { requestAddLikeList, requestAddSuperLikeList } from "../../actions";

// helpers
import { getCats } from "../../helpers";
import ListItem from "./ListItem";

const MainItem = () => {
  const [cats, setCats] = useState([]);
  const [filterCats, setFilterCats] = useState([]);
  const [page, setPage] = useState(1);
  const [renderCats, setRenderCats] = useState([]);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);

  useEffect(() => {
    setRenderCats(filterCats.slice((page - 1) * 5, page * 5));
  }, [filterCats, page]);

  useEffect(() => {
    if (keyword === "") {
      setFilterCats(cats);
    } else {
      setFilterCats(
        cats.filter((cat) =>
          cat.name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }
  }, [cats, keyword]);

  const updateCatsAfterClick = (arrCats) => {
    return arrCats.slice(1);
  };

  const handleNope = (id) => {
    const curCat = cats.find((cat) => cat.id === id);
    const index = cats.indexOf(curCat);
    setCats(
      updateCatsAfterClick([...cats.slice(0, index), ...cats.slice(index + 1)])
    );
  };

  const handleSuperLike = (id) => {
    const curCat = cats.find((cat) => cat.id === id);
    dispatch(requestAddSuperLikeList(curCat));
    setCats(updateCatsAfterClick(cats));
  };

  const handleLike = (id) => {
    const curCat = cats.find((cat) => cat.id === id);
    dispatch(requestAddLikeList(curCat));
    setCats(updateCatsAfterClick(cats));
  };

  const nextPage = () => {
    if (!filterCats[5 * page]) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  // let renderCats = [...cats.slice(page - 1, page * 5)];
  // console.log(renderCats)
  return (
    <div className="MainItem">
      <div
        className="input-group mt-3 d-flex justify-content-center"
        style={{
          width: 500,
        }}
      >
        <input
          type="text"
          className="form-control"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div className="BodyItem">
        {renderCats.map((cat, index) => (
          <ListItem
            key={index}
            cat={cat}
            handleNope={handleNope}
            handleSuperLike={handleSuperLike}
            handleLike={handleLike}
          />
        ))}
      </div>

      <Link to="/">
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </Link>
      <div className="d-flex">
        <button className="btn btn-primary mx-2" onClick={prevPage}>
          {"<"}
        </button>
        <button className="btn btn-primary mx-2" onClick={nextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MainItem;
