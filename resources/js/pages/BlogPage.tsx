import BlogComponent from '@/components/BlogComponent'
import { Head } from '@inertiajs/react'

const BlogPage = () => {
  return (
    <>
    <Head title="Blog"/>
      <section>
          <div>
              <BlogComponent />
          </div>
      </section>
    </>
  )
}

export default BlogPage