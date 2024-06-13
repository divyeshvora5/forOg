import Link from "next/link";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { usePopulerCollection } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useBlog } from "@/hooks/useFetchHooks";
import Blogbox from "@/components/Blogs/Blogbox";
const Blog = () => {
	
    const { loading, items, page, hasMore, handlePageChange } = useBlog({
        limit: 9,
      });

	return (
    <div className='popular-collection-main'>
      <Container>
        <div className='common-title-block desktop-view-title'>
          <h2>Blog Posts</h2>
          {!loading && items?.length > 0 && (
            <Link
         href={PATH_DASHBOARD.blog.root}
              className='group hover:translate-x-[-3px] transition-all ease-in'>
              {/* <Link href="/collection/all-collections"> */}
              <span className='inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text'>
                Explore
              </span>
              <svg width='25' height='14' viewBox='0 0 25 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
                <path
                  d='M22.4482 7.00293L0.749512 7.00293'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
              </svg>
            </Link>
          )}
        </div>
        {loading ? (
          <>
            <div className='d-flex justify-content-center'>
              <Spinner animation='border' size='lg' />
            </div>
          </>
        ) : !items?.length > 0 ? (
          <>{/* <div className='d-flex justify-content-center'>No Popular collections Found!</div> */}</>
        ) : (
          <>
            {/* {populerCollection.length > 5 ? ( */}
            {/* <Slider {...popularslider}> */}
            <div className="grid grid-cols-1 md:grid-cols-4  gap-12 md:gap-12  mt-8 sm:mt-8 mb-[100px]">
                  {items.slice(0,4).map((item, index) => (
                    <article key={index} className="">
                      <Blogbox blog={item} layoutOne={true} />
                    </article>
                  ))}
                </div>
            {/* </Slider> */}
            {/* ) : (
				<>
					<div className="d-flex justify-content-center">
						{populerCollection?.map((ele, index) => (
							<div key={index}>
								<PopularCollectionCard item={ele} key={index} />
							</div>
						))}
					</div>
				</>
			)} */}
          </>
        )}
        <div className='common-title-block mobile-view-block'>
          {!loading && items?.length > 0 && (
            <Link href={PATH_DASHBOARD.blog.root
            }>
              {/* <Link href="/collection/all-collections"> */}
              <span>Explore</span>
              {/* <img src={'../../images/right-link-img.svg'} alt='right-arrow-img'></img> */}
              <svg width='25' height='14' viewBox='0 0 25 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'></path>
                <path
                  d='M22.4482 7.00293L0.749512 7.00293'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'></path>
              </svg>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
