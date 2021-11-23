import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  projectPortfolio,
  articlePortfolio,
  videoPortfolio,
  blogPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "article",
      title: "Articles",
    },
    {
      id: "video",
      title: "Videos",
    },
    {
      id: "blog",
      title: "Blogs",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "Projects":
        setData(projectPortfolio);
        break;
      case "Articles":
        setData(articlePortfolio);
        break;
      case "Videos":
        setData(videoPortfolio);
        break;
      case "Blogs":
        setData(blogPortfolio);
        break;
      
      default:
        setData(projectPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
