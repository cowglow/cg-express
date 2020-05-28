import express from "express";
import { resolvedFilePath } from "../common/resolved-file-path/resolved-file-path";
import { getRoutes } from "../common/get-routes/get-routes";

export const defaultOutput = (req: express.Request, res: express.Response) => {
  res.json({
    message: "cg-express v1",
    routes: getRoutes()
  });
};

export const resourceLoader = (req: express.Request, res: express.Response) => {
  const resourcePath = "../../data/";
  const { resource } = req.params;
  const fileName = resource + ".json";

  res.sendFile(resolvedFilePath(resourcePath, fileName));
};
