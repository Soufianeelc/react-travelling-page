import React from 'react';
import GalleryItem from './GalleryItem';



function Gallery({ content }) {
    return ( 
        <div className="flex-col md:flex-row flex justify-center space-x-8 ">
            {
                content.map((contentItem) => <GalleryItem {...contentItem}/>)
            }
        </div>
     );
}

export default Gallery;