import './App.css';
import Gallery from './components/Gallery';
import HomePage from './components/HomePage';


const galleryContent = [
  {
      mainHeading: 'Nareoyjorden',
      subHeading: 'norway',
      id: 'card1'
  },
  {
      mainHeading: 'Antelop Canyon',
      subHeading: 'united states',
      id: 'card2'
  },
  {
      mainHeading: 'Grossglockner',
      subHeading: 'Austria',
      id: 'card3'
  }
]

function App() {
  return (
    <>
      <HomePage />
      <Gallery content={galleryContent} />
    </>
    
  );
}

export default App;
