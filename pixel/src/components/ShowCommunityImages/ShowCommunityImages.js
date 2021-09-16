import React from 'react';

const ShowCommunityImages = ({ image }) => {
    return (
        <div data-testid="test-ShowCommunityImages" className="col-md-3 text-center m-3 p-3 bg-light text-info rounded shadow">
            <img className="rounded" style={{ height: '100%', width: '100%' }} src={image.url} alt={image.title} />
            <h3 className="mt-3 mb-2">{image.title}</h3>
        </div>
    );
};

export default ShowCommunityImages;