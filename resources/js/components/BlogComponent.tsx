import React from "react";
import { motion } from "framer-motion";

const BlogComponent = () => {
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

  const blogs = [
    {
      id: 1,
      title: "The Art of Copper Crafting",
      description:
        "Discover the timeless techniques and artistry behind copper crafting.",
      image: "https://images.unsplash.com/photo-1609387433510-d2ca76dd0259?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "Sustainability in Copper Production",
      description:
        "Learn how copper production is evolving to meet sustainability goals.",
      image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-09-15",
    },
    {
      id: 3,
      title: "Innovative Uses of Copper",
      description:
        "Explore the innovative ways copper is being used in modern design.",
      image: "https://images.unsplash.com/photo-1548357204-82fc6c4a0c67?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2023-09-05",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900 py-20 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600"
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-500 mb-4">
                  {blog.title}
                </h3>
                <p className="text-stone-700 dark:text-amber-100 mb-4">
                  {blog.description}
                </p>
                <p className="text-sm text-stone-500 dark:text-amber-300">
                  {blog.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogComponent;