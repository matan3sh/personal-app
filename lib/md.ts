import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Blog } from "../interfaces/Blog";
import { MarkdownItem } from "../interfaces/Markdown";

const getDir = (path: string): string => {
  return join(process.cwd(), path);
};

const BLOG_DIR = getDir("/content/blogs");

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as MarkdownItem;
};

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  return blog;
};

export { getBlogFileNames, getBlog };
