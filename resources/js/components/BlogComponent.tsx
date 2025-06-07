import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const BlogComponent = ({ blogs }: { blogs: any[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-20 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 py-4 dark:text-white"
        >
          Blogs
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/20 dark:to-transparent border border-gray-200/50 dark:border-gray-700/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blogs/${blog.id}`}>
                <motion.div
                  className="relative"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, scale: 1.1 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-500 mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-stone-700 dark:text-gray-100 mb-4">
                    {blog.content.substring(0, 10)} ...
                  </p>
                  <p className="text-sm text-stone-500 dark:text-gray-300">
                    {new Date(blog.created_at).toISOString().slice(0, 10)}
                  </p>                
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogComponent;