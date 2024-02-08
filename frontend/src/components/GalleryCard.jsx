
import React from 'react';
import { Link } from 'react-router-dom';
//import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; // Change to free-solid-svg-icons for arrow up

const GalleryCard = ({ product }) => {
    //const [bookmarkId, setBookmarkId] = useState(post.bookmark_id);
    //For handling Bookmarks
    // const handleBookmark = async (e) => {
    //     const bookmarkIcon = document.querySelector('.bookmark-icon');
        
    //     if (bookmarkId) {
    //       const data = await deleteBookmark({ bookmark_id: bookmarkId });
    //       setBookmarkId(null);
    //       bookmarkIcon.classList.remove('bookmarked');
    //     } else {
    //       const data = await createBookmark({ post_id: post.id, post_type: true });
    //       setBookmarkId(data.id);
    //       bookmarkIcon.classList.add('bookmarked');
    //     }
    //   };
  return (
    <div className="gallery-card">
      <img src={product.image} alt={product.name} />
      <div className="gallery-info">
        <h3 className="gallery-name">{product.name}</h3>
        <h3 className="gallery-date">{product.date}</h3>
        {/* Additional details if needed */}
        <Link to={`/gallery/${product.id}`} className="gallery-description">View Details</Link>
        <div className="post-bookmarks">
        <FontAwesomeIcon icon={faBookmark} />
        </div>

      </div>
    </div>
  );
};

export default GalleryCard;