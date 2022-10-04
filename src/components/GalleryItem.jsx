import React from 'react';


function GalleryItem({backgroundImageId, mainHeading, subHeading }) {
    return ( 
        <div className=" max-w-60 w-60 h-60 flex items-end justify-center rounded-md my-4 bg-blue-600" id="img">

            <div className="px-6 py-2 text-center">
                <h3 className="text-white font-graphikBold"> { mainHeading } </h3>
                <p className="text-white font-graphikRegular"> { subHeading } </p>
            </div>

        </div>
    );
}
export default GalleryItem;

