import React from 'react';


function GalleryItem({backgroundImageId, mainHeading, subHeading }) {
    return ( 
        <div className="w-60 h-80 flex items-end justify-center rounded-md my-16" id="img">

            <div className="px-6 py-2 text-center">
                <h3 className="text-white font-graphikBold"> { mainHeading } </h3>
                <p className="text-white font-graphikRegular"> { subHeading } </p>
            </div>

        </div>
    );
}
export default GalleryItem;
