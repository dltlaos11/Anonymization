let algorithms = {
  MAPPING_TABLE: { name: "매핑 테이블", type: "가명화", value: 1 },
  MASKING: { name: "마스킹", type: "가명화", value: 2 },
  SAMPLING: { name: "샘플링", type: "통계", value: 3 },
  TOTAL_PROCESSING: { name: "총계처리", type: "통계", value: 4 },
  HASH_ALGORITHM: { name: "해시", type: "가명화", value: 5 },
  AES_ALGORITHM: { name: "AES", type: "암호화", value: 6 },
  ROUNDING: { name: "라운딩", type: "일반화", value: 7 },
  TOP_AND_BOTTOM_CODING: {
    name: "top and bottom coding",
    type: "일반화",
    value: 8,
  },
  ADD_NOISE: { name: "잡음추가", type: "무작위화", value: 9 },
  SWAPPING: { name: "스와핑", type: "가명화", value: 10 },
  SUBTOTAL: { name: "부분총계", type: "무작위화", value: 11 },
};

const relation = [
  {
    filedName: "MemID",
    type: "Integer",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
    ],
  },
  {
    filedName: "Email",
    type: "String",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
    ],
  },
  {
    filedName: "Birth",
    type: "String",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
      algorithms.ROUNDING,
      algorithms.TOP_AND_BOTTOM_CODING,
    ],
  },
  {
    filedName: "Height",
    type: "Integer",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
      algorithms.ROUNDING,
      algorithms.TOP_AND_BOTTOM_CODING,
      algorithms.TOTAL_PROCESSING,
    ],
  },
  {
    filedName: "Weight",
    type: "Integer",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.TOTAL_PROCESSING,
      algorithms.AES_ALGORITHM,
      algorithms.ROUNDING,
      algorithms.TOP_AND_BOTTOM_CODING,
    ],
  },
  {
    filedName: "SpermId",
    type: "Integer",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
    ],
  },
  {
    filedName: "Activity",
    type: "Integer",
    checkbox: false,
    algorithm: [algorithms.HASH_ALGORITHM, algorithms.AES_ALGORITHM],
  },
  {
    filedName: "Co",
    type: "Integer",
    checkbox: false,
    algorithm: [
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
      algorithms.TOTAL_PROCESSING,
      algorithms.ROUNDING,
      algorithms.TOP_AND_BOTTOM_CODING,
    ],
  },
  {
    filedName: "Date",
    type: "String",
    checkbox: false,
    algorithm: [
      algorithms.MASKING,
      algorithms.HASH_ALGORITHM,
      algorithms.AES_ALGORITHM,
      algorithms.ADD_NOISE,
    ],
  },
];
