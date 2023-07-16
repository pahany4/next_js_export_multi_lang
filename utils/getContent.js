import fs from "fs";
import path from "path";
import matter from "gray-matter";
import showdown from "showdown";

/** Обработка информации из md */
export async function getContent({path_file}) {
  const mainContent = fs.readFileSync(path.join(process.cwd(),path_file), "utf-8");

  const {data, content: main} = matter(mainContent);

  /** Для рендера в дальнейшем HTML */
  //const main_content = (await remark().use(html).process(matter(main).content)).toString();
  let converter = new showdown.Converter({tables: true})
  let main_content = converter.makeHtml(main)

  return {
    data, // Объект из md
    content: main_content, // markdown
  };
}
