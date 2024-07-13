import Navigation from "./Navigation";
import classes from "./Header.module.css";
import Images from "./Images";
import productImg from "../Images/productImg.png";
import imgObject from "../Assets/images";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(0);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
 
  useEffect(() => {
    const fetchMovies = async()=>{
      try{
        const response = await fetch(`/api/products?organization_id=92bd4485ce7e4659829d85b3795839c4&reverse_sort=false&page=1&size=30&Appid=PGLH2UD8S96IEQG&Apikey=d5f2bb89b34f4cb8aedfa1319d8feef320240712122839218351`)
        if (!response){
          throw new Error('There seems to be a problem. Try Again')
        }
        const data  = await response.json();
        setItems(data.items);
        setTotalPages(Math.ceil(data.total / 30)); 
      }catch (error){
       console.log(error);
      }
    }

    fetchMovies()
  }, [currentPage]);


  const handleClick = (index) => {
    setActiveHeader(index);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <Navigation />
      <div className={classes.home}>
        <img src={productImg} alt="" />
        <div className={classes.text}>
          <h2>Shop</h2>
          <p>HOME/SHOP</p>
        </div>
      </div>

      <main className={classes.main}>
        <div className={classes["main-headers"]}>
          <p
            className={activeHeader === 0 ? classes.active : ""}
            onClick={() => handleClick(0)}
          >
            Best Sellers
          </p>
          <p
            className={activeHeader === 1 ? classes.active : ""}
            onClick={() => handleClick(1)}
          >
            New Arrivals
          </p>
          <p
            className={activeHeader === 2 ? classes.active : ""}
            onClick={() => handleClick(2)}
          >
            Hot Sales
          </p>
        </div>
        <div className={classes.products}>
          {imgObject.map((image) => (
            <Images src={image.image} title={image.title} price={image.price} id={image.id} />
          ))}

          {/* {items.map((image)=>
            <Images key={image.id} title={image.name} price={image.current_price[0].USD}/>
          )} */}
          {console.log(items)}

        </div>
        <div className={classes.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`${currentPage} / ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Header;
