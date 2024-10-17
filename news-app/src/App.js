import logo from './logo.svg';
import newspaper from './images/vecteezy_love-book-reading-watercolor-books-hand-painted_13181664.png';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NewsCard from './NewsCard'; 

//React components are JavaScript functions that return markup (JSX)
//Components MUST start with capital letter; HTML tags are lowercase
function App() {
  return (
    <div className="App">
      {/*p-padding, y-top and bottom, bg-light-background color*/}
      <div class="album py-5 bg-light">
        <div class="container">
        <h3>Politics</h3>
          <div class="row">
              <NewsCard></NewsCard>
              <NewsCard></NewsCard>
              <NewsCard></NewsCard>
          </div>
          <h3>Technology</h3>
          <div class="row">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </div>
        </div>
      </div>
      <a href="https://www.vecteezy.com/free-png/news-icon">News Icon PNGs by Vecteezy</a>
    </div>
  );
}
//default export used to export singular value or component -> allows it to be imported elsewhere
export default App;
