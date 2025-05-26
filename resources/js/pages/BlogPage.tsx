import BlogComponent from '@/components/BlogComponent';
import { Head, usePage } from '@inertiajs/react';

const BlogPage = () => {
  const { blogs } = usePage().props as any;

  return (
    <>
      <Head title="Blog" />
      <section>
        <div>
          <BlogComponent blogs={blogs} />
        </div>
      </section>
    </>
  );
};

export default BlogPage;