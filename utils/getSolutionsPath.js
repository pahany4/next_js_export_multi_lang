import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getSolutionsPath() {
  //  Получить файлы из каталога с md
  const directories = fs.readdirSync(path.join("content/standard-solutions/en"));
  // Получить slug b frontmatter из каждого файла
  const temppaths = directories.map((directory) => {
    // Получить frontmatter
    const markdownWithMeta = fs.readFileSync(path.join(`content/standard-solutions/en/${directory}`, `index.mdx`), "utf-8");
    const {data: frontmatter} = matter(markdownWithMeta);
    // Если не черновик, вернуть slug как имя диретории
    if (!frontmatter.draft) {
      return directory
    } else {
      return null;
    }
  });
  //   Удалить null из массива tempPosts
  return temppaths.filter((path) => {
    return path && path;
  });
}
