
import Accordion from './Accordion';

export default function App() {
    return (
      <div className='p-4'>
        {accordionDetails.map((accordionItem, index) => (
          <Accordion
            key={index}
            title={accordionItem.title}
            text={accordionItem.text}
          />
        ))}
      </div>
    );
  }
  


const accordionDetails = [
    {
      title: 'Iphone and mac',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores temporibus quaerat tempore est totam aperiam, quas sit placeat mollitia! Deleniti eos sequi recusandae minima expedita ab non, ratione rem ducimus.',
    },
    {
      title: 'Iphone and App Watch',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores temporibus quaerat tempore est totam aperiam, quas sit placeat mollitia! Deleniti eos sequi recusandae minima expedita ab non, ratione rem ducimus.',
    },
    {
      title: 'Iphone and AirPods',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores temporibus quaerat tempore est totam aperiam, quas sit placeat mollitia! Deleniti eos sequi recusandae minima expedita ab non, ratione rem ducimus.',
    },
  ];
