import * as Type from "constants/Types";
import messages from "data/Messages";

type dataType = {
  [key: string]: number;
};
export function getRandomMessage(days: number): string {
  const randomIdx = Math.floor(Math.random() * messages.length) + 0;

  const { type, text } = messages[randomIdx];

  const paramByType: dataType = {
    [Type.MESSAGE_DAYS]: days,
    [Type.MESSAGE_WEEKS]: days > 7 ? Math.ceil(days / 7) : 0,
    [Type.MESSAGE_MONTHS]: Math.floor(days / 30),
    [Type.MESSAGE_NEAREST_DAYS]: days - (days % 100),
  };

  const param: number = paramByType[type];

  return days > 0 ? text(param) : Type.MESSAGE_D_DAY;
}
