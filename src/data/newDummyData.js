export const newDummyData = [
  {
    columns: [
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_email",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_country_num",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_phone_num",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_birth",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_gender",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_height",
        dataType: 1,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_weight",
        dataType: 1,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_lastday",
        dataType: 2,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_name",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "user_signup_date",
        dataType: 2,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "inspirator_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "inspirator_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "stethoscope_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "stethoscope_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "body_part_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "body_part_name",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "led_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "led_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "led_use_time",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "otoscope_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "otoscope_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "otoscope_division",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "file_extension_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "file_extension_name",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_onset_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_onset_date",
        dataType: 2,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "severity_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "severity_level",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_medicine_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_medicine_date",
        dataType: 2,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "medicine_info_sn",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "medicine_info_item_name",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "medicine_info_item_seq",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_tkng_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_tkng_no",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "asthma_tkng_cycle",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "washer_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "washer_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_use_time",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_medicine",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_dosage",
        dataType: 1,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_unit",
        dataType: 4,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "nebulizer_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "thermometer_pk",
        dataType: 0,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "thermometer_datetime",
        dataType: 3,
      },
      {
        tableName: "VIEW_TOTAL",
        columnName: "thermometer_temperature",
        dataType: 1,
      },
    ],
    algorithms: [
      {
        dataType: 0,
        groups: [
          {
            groupName: "가명화",
            algorithms: [
              {
                algorithmName: "마스킹",
                types: [
                  {
                    type: "마스킹",
                    typeValue: 0,
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
                algorithmName: "해시 알고리즘",
                types: [
                  {
                    type: "해시 알고리즘",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "AES",
                types: [
                  {
                    type: "AES",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
          {
            groupName: "일반화",
            algorithms: [
              {
                algorithmName: "총계 처리",
                types: [
                  {
                    type: "평균값",
                    typeValue: 1,
                    degrees: null,
                  },
                  {
                    type: "중앙값",
                    typeValue: 2,
                    degrees: null,
                  },
                  {
                    type: "최빈값",
                    typeValue: 3,
                    degrees: null,
                  },
                  {
                    type: "최대값",
                    typeValue: 4,
                    degrees: null,
                  },
                  {
                    type: "최소값",
                    typeValue: 5,
                    degrees: null,
                  },
                  {
                    type: "최소값",
                    typeValue: 5,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "상하단 코딩",
                types: [
                  {
                    type: "상하단 코딩",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        dataType: 1,
        groups: [
          {
            groupName: "가명화",
            algorithms: [
              {
                algorithmName: "마스킹",
                types: [
                  {
                    type: "마스킹",
                    typeValue: 0,
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
                algorithmName: "해시 알고리즘",
                types: [
                  {
                    type: "해시 알고리즘",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "AES",
                types: [
                  {
                    type: "AES",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
          {
            groupName: "일반화",
            algorithms: [
              {
                algorithmName: "총계 처리",
                types: [
                  {
                    type: "평균값",
                    typeValue: 1,
                    degrees: null,
                  },
                  {
                    type: "중앙값",
                    typeValue: 2,
                    degrees: null,
                  },
                  {
                    type: "최빈값",
                    typeValue: 3,
                    degrees: null,
                  },
                  {
                    type: "최대값",
                    typeValue: 4,
                    degrees: null,
                  },
                  {
                    type: "최소값",
                    typeValue: 5,
                    degrees: null,
                  },
                  {
                    type: "최소값",
                    typeValue: 5,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "상하단 코딩",
                types: [
                  {
                    type: "상하단 코딩",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        dataType: 2,
        groups: [
          {
            groupName: "가명화",
            algorithms: [
              {
                algorithmName: "마스킹",
                types: [
                  {
                    type: "마스킹",
                    typeValue: 0,
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
                algorithmName: "해시 알고리즘",
                types: [
                  {
                    type: "해시 알고리즘",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "AES",
                types: [
                  {
                    type: "AES",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
          {
            groupName: "무작위화",
            algorithms: [
              {
                algorithmName: "잡음 추가",
                types: [
                  {
                    type: "일",
                    typeValue: 4,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "월",
                    typeValue: 5,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "년",
                    typeValue: 6,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        dataType: 3,
        groups: [
          {
            groupName: "가명화",
            algorithms: [
              {
                algorithmName: "마스킹",
                types: [
                  {
                    type: "마스킹",
                    typeValue: 0,
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
                algorithmName: "해시 알고리즘",
                types: [
                  {
                    type: "해시 알고리즘",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "AES",
                types: [
                  {
                    type: "AES",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
          {
            groupName: "무작위화",
            algorithms: [
              {
                algorithmName: "잡음 추가",
                types: [
                  {
                    type: "초",
                    typeValue: 1,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "분",
                    typeValue: 2,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "시",
                    typeValue: 3,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "일",
                    typeValue: 4,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "월",
                    typeValue: 5,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                  {
                    type: "년",
                    typeValue: 6,
                    degrees: ["level 1", "level 2", "level 3"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        dataType: 4,
        groups: [
          {
            groupName: "가명화",
            algorithms: [
              {
                algorithmName: "마스킹",
                types: [
                  {
                    type: "마스킹",
                    typeValue: 0,
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
                algorithmName: "해시 알고리즘",
                types: [
                  {
                    type: "해시 알고리즘",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
              {
                algorithmName: "AES",
                types: [
                  {
                    type: "AES",
                    typeValue: 0,
                    degrees: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
