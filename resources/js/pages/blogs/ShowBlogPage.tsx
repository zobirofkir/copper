import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

const ShowBlogPage = () => {
  const { blog } = usePage().props as any;

  const [comments, setComments] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      comment: "Amazing post! Really enjoyed the content and design.",
      date: new Date(),
    },
    {
      name: "Sarah Smith",
      email: "sarah@example.com",
      comment: "Very informative and beautifully structured.",
      date: new Date(),
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
      const newComment = {
        name: form.name,
        email: form.email,
        comment: form.comment,
        date: new Date(),
      };
      setComments([newComment, ...comments]);
      setForm({ name: "", email: "", comment: "" });
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <>
      <Head title={blog.title} />
      <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-20 px-6 md:px-12">
        <div className="container mx-auto space-y-16">
          {/* Blog Card */}
          <div className="bg-white dark:bg-stone-950 border border-gray-200/50 dark:border-gray-700/30 rounded-xl shadow-2xl overflow-hidden">
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
              />
              <p className="text-sm text-stone-500 dark:text-gray-300">
                Published on:{" "}
                <span className="font-medium">
                  {new Date(blog.created_at).toISOString().slice(0, 10)}
                </span>
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white dark:bg-stone-950 border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-xl space-y-10">
            <h2 className="text-3xl font-bold text-black dark:text-white">Leave a Comment</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <textarea
                name="comment"
                rows={4}
                placeholder="Write your comment here..."
                value={form.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
              >
                Post Comment
              </button>
            </form>

            {/* Comment List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-black dark:text-white">All Comments</h3>
              {comments.map((c, idx) => (
                <div key={idx} className="flex gap-4 items-start border-t pt-6 border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {getInitials(c.name)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-base font-semibold text-black dark:text-white">{c.name}</p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {c.date.toLocaleDateString()} at {c.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{c.comment}</p>
                  </div>
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
