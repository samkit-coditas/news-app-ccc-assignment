import React, { useState, useEffect } from "react";
import CategorySelector from "./components/CategorySelector";
import SearchBar from "./components/SearchBar";
import Article from "./components/Article";
import { fetchNewsByCategory } from "./services/api";
import { Article as ArticleType } from "./common/types";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetchNewsByCategory(selectedCategory)
      .then((data) => {
        setArticles(data.articles);
        setFilteredArticles(data.articles);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [selectedCategory]);

  const handleSearch = (searchQuery: string) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="app">
      <h1>News Aggregator</h1>
      <CategorySelector setSelectedCategory={setSelectedCategory} />
      <SearchBar onSearch={handleSearch} />
      <div className="article-list">
        {filteredArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
