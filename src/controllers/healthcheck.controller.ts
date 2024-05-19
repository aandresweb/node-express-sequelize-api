import { Request, Response } from "express";
import { successResponse } from "../helpers/http-responses.helper";

class HealthcheckContoller {
  async server(request: Request, response: Response) {
    return successResponse(response, { message: "Server healthcheck" });
  }
}

export default new HealthcheckContoller();
