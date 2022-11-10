import { join } from "path";
import { Blog } from "@interfaces/Blog";
import { getAllItems, getDir, getFileNames, getItemInPath } from "@lib/md";

const BLOG_DIR = getDir("/content/blogs");

const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR);
};

const getBlogsSlugs = (): string[] => {
  return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
};

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  blog.slug = fileName.replace(/\.md$/, "");
  return blog;
};

const getBlogBySlug = (slug: string): Blog => {
  const fileName = slug + ".md";
  return getBlog(fileName);
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names, getBlog) as Blog[];
};

export { getBlogs, getBlogsSlugs, getBlogBySlug };
