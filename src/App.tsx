import './App.css';
import ImageSlider from './image-slider';
import car1 from '/src/assets/img/car1.jpg';
import car2 from '/src/assets/img/car2.jpg';
import car3 from '/src/assets/img/car3.jpg';
import car4 from '/src/assets/img/car4.jpg';

const IMAGES = [
  {
    url: car1,
    alt: 'Nissan GTR',
  },
  {
    url: car2,
    alt: 'Nissan GTR',
  },
  {
    url: car3,
    alt: 'Nissan GTR',
  },
  {
    url: car4,
    alt: 'Nissan GTR',
  },
];

function App() {
  return (
    <div className='container'>
      <ImageSlider images={IMAGES} />
    </div>
  );
}

export default App;
