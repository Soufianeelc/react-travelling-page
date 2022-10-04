import React from 'react';
import GalleryItem from './GalleryItem';



function Gallery() {

    const content = [
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
    return ( 
        <div className="container mx-auto flex-col md:flex-row items-center flex justify-center md:space-x-8 flex-wrap ">
            {
                content.map((contentItem) => <GalleryItem {...contentItem}/>)
            }
        </div>
     );
}

export default Gallery;