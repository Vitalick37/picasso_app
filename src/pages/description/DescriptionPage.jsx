import Header from "../../widgets/header/Header";
import { useParams } from "react-router-dom";
import { useGetGoodsItemQuery } from "../../shared/redux/goodsApi";
import LinkBack from "../../features/LinkBack";

const DescriptionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetGoodsItemQuery(id);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />

      <LinkBack />
      <div className="List">
        <div>{data.id}</div>
        <div>{data.body}</div>
      </div>
    </>
  );
};

export default DescriptionPage;
