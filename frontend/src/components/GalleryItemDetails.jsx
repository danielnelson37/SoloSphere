// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import products from '../productsData';

// const GalleryItemDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === parseInt(id, 10));

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);

// useEffect(() => {
//     const productIndex= products.findIndex((p)=> p.id ===parseInt(id, 10));
//     const itemsPerPage = 12;
//     const newPage = Math.ceil((productIndex + 1) / itemsPerPage);
//     setCurrentPage(newPage);
// }, [id]);

//   const handleNextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % product.image.length;
//     setCurrentImageIndex(nextIndex);
//   };

//   const handlePrevImage = () => {
//     const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
//     setCurrentImageIndex(prevIndex);
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   const handleGoBack = () => {
//     navigate(`/gallery?page=${currentPage}`);
//   };

//   return (
//     <div className="gallery-details">
//       <div className='gallery-nav'>
//       <button className="back-button" onClick={handleGoBack}>
//         Back to Gallery
//       </button>
//       {/* <div className="post-bookmarks">
//               <FontAwesomeIcon icon={faBookmark} />
//             </div> */}
//       </div>
//       <div className="details-container">
//         <div className="details-section">
//           <div className="details-title">
//             <h1>{product.name}</h1>
//             <p className="gallery-date">{product.date}</p>
//             <p>Media: {product.media}</p>
//             {product.dimensions && (
//             <p className="gallery-dimensions">Dimensions: {product.dimensions}</p>
//           )}
//            {product.description && (
//           <div className="gallery-bio">
//             <p>Description: {product.description}</p>
//             {/* Additional details as needed */}
//           </div>
//         )}
            
//           </div>

//           <div className="image-section">
//             <img src={product.image[currentImageIndex]} alt={product.name} />
//             {product.image.length > 1 && (
//               <div className="image-navigation">
//                 <button onClick={handlePrevImage}>&lt; Prev</button>
//                 <button onClick={handleNextImage}>Next &gt;</button>
//               </div>
//             )}
//           </div>

//           {/* Add row of alternative image thumbnails */}
//           {product.image.length > 1 && (
//             <div className="thumbnail-row">
//               {product.image.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`${product.name} - Thumbnail ${index}`}
//                   className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
//                   onClick={() => handleThumbnailClick(index)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryItemDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../productsData';

const GalleryItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const productIndex = products.findIndex((p) => p.id === parseInt(id, 10));
    const itemsPerPage = 12;
    const newPage = Math.ceil((productIndex + 1) / itemsPerPage);
    setCurrentPage(newPage);
  }, [id]);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % product.image.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleThumbnailClick = (index) => {
    if (product.image[index].includes('/videos/')) {
      // If the clicked thumbnail is a video, set the index to the first video in the array
      const videoIndex = product.image.findIndex((item) => item.includes('/videos/'));
      setCurrentImageIndex(videoIndex);
    } else {
      // If it's an image, set the index to the clicked image index
      setCurrentImageIndex(index);
    }
  };

  const handleGoBack = () => {
    navigate(`/gallery?page=${currentPage}`);
  };

  return (
    <div className="gallery-details">
      <div className="gallery-nav">
        <button className="back-button" onClick={handleGoBack}>
          Back to Gallery
        </button>
      </div>
      <div className="details-container">
        <div className="details-section">
          <div className="details-title">
            <h1>{product.name}</h1>
            <p className="gallery-date">{product.date}</p>
            <p>Media: {product.media}</p>
            {product.dimensions && (
              <p className="gallery-dimensions">Dimensions: {product.dimensions}</p>
            )}
            {product.description && (
              <div className="gallery-bio">
                <p>Description: {product.description}</p>
              </div>
            )}
          </div>

          <div className="image-section">
            {product.image[currentImageIndex].includes('/videos/') ? (
              <video
                className="gallery-video"
                autoPlay
                width="500"
                controls
                src={product.image[currentImageIndex]}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={product.image[currentImageIndex]} alt={product.name} />
            )}
            {product.image.length > 1 && (
              <div className="image-navigation">
                <button onClick={handlePrevImage}>&lt; Prev</button>
                <button onClick={handleNextImage}>Next &gt;</button>
              </div>
            )}
          </div>

          {/* Add row of alternative image thumbnails */}
          {product.image.length > 1 && (
            <div className="thumbnail-row">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {image.includes('/videos/') ? (
                    <video >
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={image} alt={`${product.name} - Thumbnail ${index}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryItemDetails;

