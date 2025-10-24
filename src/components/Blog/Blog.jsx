import React from 'react';

const Blog = ({blog,handleBlogCount}) => {

    const {title,author,cover_img,reading_time,tags}=blog


    return (
        <>
         <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src={cover_img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>{title}</p>
            <div className="card-actions justify-self-start">
            <button className="btn btn-active btn-success">
                Mark As Read
            </button>
            <button className="btn btn-primary" onClick={()=>handleBlogCount(blog)}>BookMarked</button>

            </div>
        </div>

        </div>

        




        </>
    );
};

export default Blog;