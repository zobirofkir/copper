import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

const ShowBlogPage = () => {
  const { blog } = usePage().props as any;

  const [comments, setComments] = useState([
    {
      name: "John Doe",
      comment: "Amazing post! Really enjoyed the content and design.",
    },
    {
      name: "Sarah Smith",
      comment: "Very informative and beautifully structured.",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.comment) {
      setComments([{ name: form.name, comment: form.comment }, ...comments]);
      setForm({ name: "", email: "", comment: "" });
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Head title={blog.title} />
      <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-20 px-6 md:px-12">
        <div className="container mx-auto space-y-16">
          <div className="bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/20 dark:to-transparent border border-gray-200/50 dark:border-gray-700/30 rounded-xl shadow-2xl overflow-hidden">
            <motion.div className="relative" initial="hidden" animate="visible" variants={imageVariants}>
              <img src={blog.image} alt={blog.title} className="w-full h-screen object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <motion.h1
                  className="text-5xl font-extrabold drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {blog.title}
                </motion.h1>
              </div>
            </motion.div>
            <div className="p-8 md:p-12">
              <p
                className="text-lg leading-relaxed text-stone-700 dark:text-gray-100 mb-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></p>
              <p className="text-sm text-stone-500 dark:text-gray-300">
                Published on:{" "}
                <span className="font-medium">
                  {new Date(blog.created_at).toISOString().slice(0, 10)}
                </span>
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white dark:bg-stone-950 border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-xl space-y-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-stone-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-stone-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <textarea
                name="comment"
                rows={4}
                placeholder="Write a comment..."
                value={form.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-stone-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition duration-300 shadow-md"
              >
                Post Comment
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((c, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl bg-gray-50 dark:bg-stone-900"
                >
                  <p className="text-lg font-semibold text-black dark:text-white">{c.name}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{c.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBlogPage;
