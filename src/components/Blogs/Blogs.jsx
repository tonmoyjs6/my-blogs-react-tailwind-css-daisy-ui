

import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogsFetch}) => {
    const blogs=use(blogsFetch)
    

    return (
        <>
        <div className='flex '>


        <div className='grid grid-flow-col grid-rows-4 gap-2 '>
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>


        <div>
            <div className="card bg-neutral text-neutral-content w-96 h-full ml-4">
        <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p>We are using cookies For no reason.</p>
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