import newspaper from './images/vecteezy_love-book-reading-watercolor-books-hand-painted_13181664.png';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function NewsCard() {
    return (
    <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src={newspaper} alt="newspaper"/>
          <div class="card-body">
            <p class="card-text">News title of article 1</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Save</button>
              </div>
              <small class="text-muted">Source: News Site</small>
            </div>
          </div>
        </div>
    </div>
    );      
}
export default NewsCard;
