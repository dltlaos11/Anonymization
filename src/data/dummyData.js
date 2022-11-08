export const dummyData = [
  {
    columnName: "memId",
    tableName: "memIdTable",
    groups: [
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
    ],
  },
  {
    columnName: "email",
    tableName: "emalTable",
    groups: [
      {
        groupName: "가명화",
        algorithms: [
          {
            algorithmName: "email_MASKING",
            types: [
              {
                typeName: "email_MASKING",
                typeValue: 1,
                degrees: ["level 1", "level 2"],
              },
            ],
          },
        ],
      },
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
    ],
  },
  {
    columnName: "birth",
    tableName: "birthTable",
    groups: [
      {
        groupName: "가명화",
        algorithms: [
          {
            // ??
            algorithmName: "birth_MASKING",
            types: [
              {
                typeName: "birth_MASKING",
                typeValue: 2,
                degrees: ["level 1", "level 2"],
              },
            ],
          },
        ],
      },
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
      {
        groupName: "일반화",
        algorithms: [
          {
            algorithmName: "TOP_AND_BOTTOM_CODING",
            // types: null,
          },
        ],
      },
      {
        groupName: "무작위화",
        algorithms: [
          {
            algorithmName: "ROUNDING",
            types: [
              {
                typeName: "birth_반올림라운딩",
                typeValue: 1,
              },
              {
                typeName: "birth_올림라운딩",
                typeValue: 2,
              },
              {
                typeName: "birth_내림라운딩",
                typeValue: 3,
              },
              {
                typeName: "birth_랜덤라운딩",
                typeValue: 4,
                degrees: ["level 1", "level 2", "level 3"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    columnName: "height",
    tableName: "heightTable",
    groups: [
      {
        groupName: "가명화",
        algorithms: [
          {
            // check
            algorithmName: "height_MASKING",
            types: [
              {
                typeName: "height_MASKING",
                typeValue: 3,
                degrees: ["level 1", "level 2", "level 3"],
              },
            ],
          },
        ],
      },
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
      {
        groupName: "일반화",
        algorithms: [
          {
            algorithmName: "TOP_AND_BOTTOM_CODING",
            // types: null,
          },
        ],
      },
      {
        groupName: "무작위화",
        algorithms: [
          {
            // ??
            algorithmName: "ROUNDING",
            types: [
              {
                typeName: "height_반올림라운딩",
                typeValue: 1,
              },
              {
                typeName: "height_올림라운딩",
                typeValue: 2,
              },
              {
                typeName: "height_내림라운딩",
                typeValue: 3,
              },
              {
                typeName: "height_랜덤라운딩",
                typeValue: 4,
                degrees: ["1"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    columnName: "weight",
    tableName: "weightTable",
    groups: [
      {
        groupName: "가명화",
        algorithms: [
          {
            // ?
            algorithmName: "weight_MASKING",
            types: [
              {
                typeName: "weight_MASKING",
                typeValue: 4,
                degrees: ["level 1", "level 2", "level 3"],
              },
            ],
          },
        ],
      },
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
      {
        groupName: "일반화",
        algorithms: [
          {
            algorithmName: "TOP_AND_BOTTOM_CODING",
            // types: null,
          },
        ],
      },
      {
        groupName: "무작위화",
        algorithms: [
          {
            // ?
            algorithmName: "ROUNDING",
            types: [
              {
                typeName: "weight_반올림라운딩",
                typeValue: 1,
              },
              {
                typeName: "weight_올림라운딩",
                typeValue: 2,
              },
              {
                typeName: "weight_내림라운딩",
                typeValue: 3,
              },
              {
                typeName: "weight_랜덤라운딩",
                typeValue: 4,
                degrees: ["1"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    columnName: "spermId",
    tableName: "spermIdTable",
    groups: [
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
    ],
  },
  {
    columnName: "activity",
    tableName: "activityTable",
    groups: [
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
    ],
  },
  {
    columnName: "co",
    tableName: "coTable",
    groups: [
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
      {
        groupName: "일반화",
        algorithms: [
          {
            algorithmName: "TOP_AND_BOTTOM_CODING",
            // types: null,
          },
        ],
      },
      {
        groupName: "무작위화",
        algorithms: [
          {
            // ?
            algorithmName: "ROUNDING",
            types: [
              {
                typeName: "co_반올림라운딩",
                typeValue: 1,
              },
              {
                typeName: "co_올림라운딩",
                typeValue: 2,
              },
              {
                typeName: "co_내림라운딩",
                typeValue: 3,
              },
              {
                typeName: "co_랜덤라운딩",
                typeValue: 4,

                degrees: [
                  "1의 자리",
                  "10의 자리",
                  "100의 자리",
                  "1000의 자리",
                  "10000의 자리",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    columnName: "date",
    tableName: "dateTable",
    groups: [
      {
        groupName: "가명화",
        algorithms: [
          {
            // ?
            algorithmName: "date_MASKING",
            types: [
              {
                typeName: "date_MASKING",
                typeValue: 5,
                degrees: ["level 1", "level 2", "level 3", "level 4"],
              },
            ],
          },
        ],
      },
      {
        groupName: "암호화",
        algorithms: [
          {
            algorithmName: "HASH_ALGORITHM",
            // types: null,
          },
          {
            algorithmName: "AES_ALGORITHM",
            // types: null,
          },
        ],
      },
      {
        groupName: "무작위화",
        algorithms: [
          {
            // ?
            algorithmName: "ADD_NOISE",
            types: [
              {
                typeName: "date_초",
                degrees: ["10초", "20초", "30초", "40초", "50초", "60초"],
                typeValue: 1,
              },
              {
                typeName: "date_분",
                degrees: ["10분", "20분", "30분", "40분", "50분", "60분"],
                typeValue: 2,
              },
              {
                typeName: "date_시",
                degrees: [
                  "3시간",
                  "6시간",
                  "9시간",
                  "12시간",
                  "15시간",
                  "18시간",
                ],
                typeValue: 3,
              },
              {
                typeName: "date_일",
                degrees: ["1일", "2일", "3일", "4일", "5일", "6일"],
                typeValue: 4,
              },
              {
                typeName: "date_월",
                degrees: ["1월", "2월", "3월", "4월", "5월", "6월"],
                typeValue: 5,
              },
              {
                typeName: "date_년",
                degrees: ["1년", "2년", "3년", "4년", "5년", "6년"],
                typeValue: 6,
              },
            ],
          },
        ],
      },
    ],
  },
];
