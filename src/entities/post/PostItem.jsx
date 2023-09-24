import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const PostItem = ({ item, pageNumber, setPageNumber }) => {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let count = pageNumber + 10;
      setPageNumber(count);
    }
  }, [inView]);

  return (
    <>
      <li key={item.id} ref={ref} className={item.id % 2 ? 'List ListItemEven' : 'List ListItemOdd'} >
        <div>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
          <p>
            {item.body.length > 150
              ? `${item.body.slice(0, 150)}...`
              : item.body}
          </p>

          {item.body.length > 150 && (
            <NavLink className='Button' to={`/description/${item.id}`}>More</NavLink>
          )}
        </div>
      </li>
    </>
  );
};

export default PostItem;
