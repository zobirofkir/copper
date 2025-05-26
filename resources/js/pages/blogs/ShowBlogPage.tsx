import React from "react";
import { Head, usePage } from "@inertiajs/react";

const ShowBlogPage = () => {
  const { blog } = usePage().props as any;

  return (
    <>
    <Head title={blog.title}/>
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold text-amber-700 dark:text-amber-500 mb-6">
              {blog.title}
            </h1>
            <p className="text-stone-700 dark:text-amber-100 mb-4">
              {blog.description}
            </p>
            <p className="text-sm text-stone-500 dark:text-amber-300">
              Published on: {blog.date}
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ShowBlogPage;