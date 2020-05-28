import fs from "fs";
import { resolvedFilePath } from "../resolved-file-path/resolved-file-path";

export const getRoutes = () => {
  const dirContent = fs.readdirSync(resolvedFilePath("../../data/"));

  return dirContent.map(file => {
    return "http://localhost:3000/" + file.slice(0, file.indexOf(".json"));
  });
};
