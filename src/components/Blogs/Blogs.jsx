

import React, { use, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogsFetch}) => {
    const [blogCount,setBlogCount]=useState([])


    const blogs=use(blogsFetch)

    const handleBlogCount=(blog)=>{
        const newBlogCount=[...blogCount,blog]
        setBlogCount(newBlogCount)


    }
    


    const handleDelete=(id)=>{

        const remainingBlogMarked=blogCount.filter(blog=>blog.id!==id)
        const newCount=[...remainingBlogMarked]
        setBlogCount(newCount)

    }


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
           <div> {blogCount.map(title=>< p className='flex' key={title.id} >


                {title.title.slice(0,15)} <button onClick={()=>handleDelete(title.id)} className="btn btn-active btn-error ml-4 mb-4" >Delete</button>

            </p>)}</div>
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