import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog/img-3.jpg'
import gl2 from '/public/images/blog/img-2.jpg'

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails?.title} pagesub="blog" />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails?.blogSingleImg} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link href="/">{BlogDetails?.author}</Link> </li>
                                      
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>{BlogDetails?.description}</p>
                                    <blockquote>
                                        {BlogDetails?.quote}
                                    </blockquote>
                                    <p>{BlogDetails.more}</p>

                                  
                                </div>

                               
                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Link href="/" target="_blank"><Image src={blog6} alt="" /></Link>
                                    </div>
                                    <div className="author-content">
                                        <Link href="/" className="author-name">Author: St. anne HouseKeeping</Link>
                                       
                                    </div>
                                </div>

                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href="/">

                                            <span className="post-control-link">Previous Post</span>
                                            <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>

                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="/">

                                            <span className="post-control-link">Next Post</span>
                                            <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>

                                        </Link>
                                    </div>
                                </div>

                      
                            </div>
                        </div>
                        <BlogSidebar blLeft={props.blLeft} />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default BlogSingle;
