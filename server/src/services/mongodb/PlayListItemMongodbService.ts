import type { IPlayListItemService } from "../../interfaces/play_list_item_service.interface";
import type { IPlayListItem } from "../../interfaces/play_list_item.interface";
import db from "./models";
import Item from "./models/play_list_item.model";
import { IPlayListItemResponse } from "../../interfaces/play_list_item_response.interface";

export default class PlayListItemMongodbService
  implements IPlayListItemService
{
  constructor() {
    db.mongoose.connect(
      "mongodb+srv://test:test@digitalsignageexample.eszfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      () => {
        console.log("Mongodb connected");
      }
    );

    db.initial();
  }

  add(Item: IPlayListItem): void {}

  async all(): Promise<IPlayListItemResponse> {
    let result = {} as IPlayListItemResponse;
    try {
      const Items = await Item.find<IPlayListItem>({});

      return {
        items: Items,
        message: "Success",
        status: 200,
      } as IPlayListItemResponse;
    } catch (e) {}

    Item.find<IPlayListItem>({})
      .then((response) => {
        result = {
          items: response,
          message: "Success",
          status: 200,
        } as IPlayListItemResponse;
      })
      .catch((err) => {
        result = {
          items: [],
          message: "Success",
          status: 200,
        } as IPlayListItemResponse;
      });

    return result;
  }
}