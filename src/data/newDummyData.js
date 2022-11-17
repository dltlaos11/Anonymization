export const newDummyData = [
  {
    columns: [
      {
        tableName: "tb_mber_detail",
        columnName: "mem_sn",
        dataType: 0,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "email_agree_ty1",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "email_agree_ty2",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "birth",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "height",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "mber_height_ty",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "weight",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "mber_weight_ty",
        dataType: 4,
      },
      {
        tableName: "tb_mber_detail",
        columnName: "mber_sn1", //
        dataType: 0,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "mber_sn",
        dataType: 0,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "agree_ty1",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "agree_ty2",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "agree_ty3",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "join_dt",
        dataType: 3,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "mber_email",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "mber_nm",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "mber_password",
        dataType: 4,
      },
      {
        tableName: "tb_mber_manage",
        columnName: "mber_sttus",
        dataType: 4,
      },
      {
        tableName: "tb_sperm_data",
        columnName: "sperm_data_sn",
        dataType: 0,
      },
      {
        tableName: "tb_sperm_data",
        columnName: "sperm_activity",
        dataType: 4,
      },
      {
        tableName: "tb_sperm_data",
        columnName: "sperm_con",
        dataType: 0,
      },
      {
        tableName: "tb_sperm_data",
        columnName: "sperm_data_dt",
        dataType: 3,
      },
      {
        tableName: "tb_sperm_data",
        columnName: "mber_sn3", //
        dataType: 0,
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
                types: null,
              },
              {
                algorithmName: "AES",
                types: null,
              },
            ],
          },
          {
            groupName: "일반화",
            algorithms: [
              {
                algorithmName: "총계 처리",
                types: null,
              },
              {
                algorithmName: "상하단 코딩",
                types: null,
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
                types: null,
              },
              {
                algorithmName: "AES",
                types: null,
              },
            ],
          },
          {
            groupName: "일반화",
            algorithms: [
              {
                algorithmName: "총계 처리",
                types: null,
              },
              {
                algorithmName: "상하단 코딩",
                types: null,
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
                    type: "가명화",
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
                types: null,
              },
              {
                algorithmName: "AES",
                types: null,
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
                types: null,
              },
              {
                algorithmName: "AES",
                types: null,
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
                types: null,
              },
              {
                algorithmName: "AES",
                types: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
