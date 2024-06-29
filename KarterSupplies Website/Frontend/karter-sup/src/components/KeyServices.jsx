import React from 'react';
import './style.css';
import articleImage from '../assets/image.png'; // Adjust the path if necessary

const ArticleLayout = () => {
  return (
    <section className="article-layout">
      <h1>Add Your Title Here</h1>
      <div className="articles">
        <div className="article">
          <img src={articleImage} alt="Article 1" />
          <h3>Your Article Title Goes Here</h3>
          <p>This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.</p>
          <p>Whatever you choose, don't give everything away! After all, you want them to read the full article.</p>
        </div>
        <div className="article">
          <img src={articleImage} alt="Article 2" />
          <h3>Your Article Title Goes Here</h3>
          <p>This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.</p>
          <p>Whatever you choose, don't give everything away! After all, you want them to read the full article.</p>
        </div>
        <div className="article">
          <img src={articleImage} alt="Article 3" />
          <h3>Your Article Title Goes Here</h3>
          <p>This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.</p>
          <p>Whatever you choose, don't give everything away! After all, you want them to read the full article.</p>
        </div>
        <div className="article">
          <img src={articleImage} alt="Article 4" />
          <h3>Your Article Title Goes Here</h3>
          <p>This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.</p>
          <p>Whatever you choose, don't give everything away! After all, you want them to read the full article.</p>
        </div>
      </div>
    </section>
  );
};

export default ArticleLayout;
