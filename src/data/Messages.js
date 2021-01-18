import * as Type from "constants/Types";

const messages = [
  {
    type: Type.MESSAGE_COMMON,
    text: () => "시간 안갈거 같죠? 금방 옵니다. 화이팅!👻",
  },
  {
    type: Type.MESSAGE_COMMON,
    text: () => "만기일이 많이 남았나요..? 도비 포즈를 따라해보세요😎",
  },
  {
    type: Type.MESSAGE_COMMON,
    text: () => "디데이 기다리기 지루하신가요..?🥱",
  },
  {
    type: Type.MESSAGE_COMMON,
    text: () =>
      "추가 되었으면 하는 기능이 있나요? 피드백 버튼을 눌러 의견을 보내주세요! 🤔",
  },
  {
    type: Type.MESSAGE_COMMON,
    text: () =>
      "앱 이용에 불편한 점이 있으셨나요? 피드백 버튼을 눌러 의견을 보내주세요!😊 ",
  },
  {
    type: Type.MESSAGE_COMMON,
    text: () => "만기되면 뭐하실 건가요? 만기계획을 세워보세요!📝",
  },
  { type: Type.MESSAGE_DAYS, text: (n) => `1600만원 까지 ${n}일 남았어요!` },
  {
    type: Type.MESSAGE_WEEKS,
    text: (n) =>
      n > 0
        ? `1600만원 까지 약 ${n}주 남았어요! 힘내세요🥺`
        : "드디어 이번주가 만기일 이예요!!💸",
  },
  {
    type: Type.MESSAGE_MONTHS,
    text: (n) =>
      n > 0
        ? `1600만원 까지 약 ${n}달 남았어요!!!🙂`
        : "드디어 이번달이 만기일 이예요!!!😭",
  },
  {
    type: Type.MESSAGE_NEAREST_DAYS,
    text: (n) =>
      n > 0
        ? `D-${n}일이 얼마 남지 않았어요! 화이팅✨`
        : "만기일이 얼마 남지 않았어요!😀",
  },
];

export default messages;
