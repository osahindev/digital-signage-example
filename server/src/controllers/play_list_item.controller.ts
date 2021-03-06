import { Request } from "express";
import { IPlayListItem } from "../interfaces/play_list_item.interface";
import service from "../services";

const getAllItems = async (
  request: Request,
  response: {
    status: (arg0: number) => {
      send: { (arg0: { message: string; items?: IPlayListItem[] }): void };
    };
  }
) => {
  const all = await service.all();
  response.status(all.status).send({ message: all.message, items: all.items });
};

const addNewItem = async (
  request: Request,
  response: {
    status: (arg0: number) => {
      send: { (arg0: { message: string; items?: IPlayListItem[] }): void };
    };
  }
) => {
  const add = await service.add({
    name: request.body.name,
    url: request.body.url,
    type: request.body.type,
    duration: request.body.duration,
  });

  response.status(add.status).send({ message: add.message, items: add.items });
};

export default {
  getAllItems,
  addNewItem,
};
