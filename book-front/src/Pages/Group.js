import { useEffect, useState } from "react";
import { getTopicsForBook } from "../Infrastructure/BookClient";
import TopicsFactory from "../Topic/TopicsFactory";
import AddBook from "./layouts/AddBook";

function Group() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopicsForBook().then((res) => {
          setTopics(res);
        })
      },[]);
      
    return (
        <>
        <AddBook />
        <div className="container">
            <TopicsFactory topics={topics} />
        </div>
        </>
    );
  }
  
  export default Group;