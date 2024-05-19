import { Response } from "express";
import { ResponseMessages } from "./messages.helper";

export const successResponse = (response: Response, data: any) => {
  response.status(200).json({ success: true, data });
};

export const successSave = (
  response: Response,
  objectName: string,
  data: any
) => {
  response.status(200).json({
    success: true,
    message: `${objectName} ${ResponseMessages.SUCCESS_CREATED}`,
    data,
  });
};

export const sendConflict = (response: Response, message: string) => {
  response.status(409).json({
    success: false,
    message: `${message}`,
  });
};

export const successUpdate = (response: Response, objectName: string) => {
  response.status(200).json({
    success: true,
    message: `${objectName} ${ResponseMessages.SUCCESS_UPDATED}`,
  });
};

export const successDelete = (response: Response, objectName: string) => {
  response.status(200).json({
    success: true,
    message: `${objectName} ${ResponseMessages.SUCCESS_DELETED}`,
  });
};

export const notFound = (response: Response) => {
  response.status(404).json({ success: false });
};

export const sendUnauthorized = (response: Response) => {
  response.status(401).json({ error: "You are not authenticated" });
};

export const serverError = (response: Response) => {
  response.status(500).json({ error: "Server internal error" });
};

export const badRequest = (response: Response, errors?: any) => {
  let jsonResponse: any = {
    success: false,
    message: "We have a bad request, verify the endpoint and call it again...",
  };

  if (errors) {
    jsonResponse = { ...jsonResponse, errors };
  }

  response.status(400).json(jsonResponse);
};
