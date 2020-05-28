import path from "path";

export const resolvedFilePath = (
  dir: string,
  filename?: string | undefined
) => {
  let filePath = process.cwd() + "/" + path.basename(dir);

  if (filename) {
    filePath += "/" + filename;
  }

  return path.resolve(filePath);
};
