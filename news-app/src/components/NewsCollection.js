import newspaper from '../vecteezy_love-book-reading-watercolor-books-hand-painted_13181664.png';
import "bootswatch/dist/cyborg/bootstrap.min.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function NewsCard({article_title, article_link}) {
    return (
    <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src={newspaper} alt="newspaper"/>
          <div class="card-body">
            <p class="card-text">{article_title}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="https://www.npr.org/sections/politics/" class="btn btn-sm btn-outline-primary" role="button">View</a>
                <button type="button" class="btn btn-sm btn-outline-secondary">Save</button>
              </div>
              <small class="text-muted">Source: <a href={article_link}>{article_link}</a></small>

            </div>
          </div>
        </div>
    </div>
    );      
}

function NewsCollection({title}) {
  const links = ["https://www.npr.org/", "https://www.npr.org/", "https://www.npr.org/", "https://www.npr.org/", "https://www.npr.org/", "https://www.npr.org/"]; 
  const listLinks = links.map((link) => 
    <NewsCard article_title={"article_title"} article_link={link} />
  );
  return (
  <><h3>{title}</h3>
  <div class="row">
    {listLinks}
  </div>
  <div class="row">
    {listLinks}
  </div>
  </>
  );
}
export default NewsCollection;
