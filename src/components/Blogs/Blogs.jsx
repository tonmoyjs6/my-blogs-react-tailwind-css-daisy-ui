

import React, { use, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogsFetch}) => {
    const [blogCount,setBlogCount]=useState([])


    const blogs=use(blogsFetch)

    const handleBlogCount=(blog)=>{
        const newBlogCount=[...blogCount,blog]
        setBlogCount(newBlogCount)

    }
    console.log(blogCount);


    return (
        <>
        <div className='flex '>


        <div className='grid grid-flow-col grid-rows-4 gap-2 '>
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id} handleBlogCount={handleBlogCount}></Blog>)
            }
        </div>


        <div>
            <div className="card bg-neutral text-neutral-content w-96 h-full ml-4">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Blogbookmarked:{blogCount.length}</h2>
            <p className='text-white'>{blogCount.map(title=><p>
                {title.title}
            </p>)}</p>
            <div className="card-actions justify-end">
           
            </div>
        </div>
        </div>
        </div>

        </div>
        </>
    );
};

export default Blogs;