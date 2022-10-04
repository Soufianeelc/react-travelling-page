import React from 'react';
import GalleryItem from './GalleryItem';



function Gallery() {

    const content = [
        {
            imageId: 'greeny',
            mainHeading: 'Nareoyjorden',
            subHeading: 'norway',
            
        },
        {
            imageId: 'tower',
            mainHeading: 'Antelop Canyon',
            subHeading: 'united states'
            
        },
        {
            mainHeading: 'Grossglockner',
            subHeading: 'Austria',
            imageId: 'nature'
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