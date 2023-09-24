import Header from "../../widgets/header/Header";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetGoodsQuery } from "../../shared/redux/goodsApi";
import { useInView } from "react-intersection-observer";
import PostItem from "../../entities/post/PostItem";

const HomePage = () => {

  const [pageNumber, setPageNumber] = useState(10);

  const { data = [], isLoading } = useGetGoodsQuery(pageNumber);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />

      <ul>
        {data.map((item, index) => (
          <PostItem key={index} item={item} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
