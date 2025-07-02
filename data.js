   const db = [
    // {
    //   name: "卡片A",
    //   description: "這是卡片A的敘述",
    //   tags: {
    //     local: ["查詢", "編輯"],
    //     function: ["首頁", "管理頁"]
    //   }
    // }
    {
      name: "activity_reduction",
      description: `財務_費用折抵\n存放帳單相關的費用折抵\n 帳單計算會使用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部", "財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "activity_reduction",]
      }
    },   {
      name: "admin_permissions",
      description: `管理_角色清單\n權限`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "role",],
        nameSet: ["全部", "admin_permissions",]
      }
    },
      {
      name: "admin_role_menu_permissions",
      description: `管理_角色清單\n權限分menu`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "role",],
        nameSet: ["全部", "admin_role_menu_permissions",]
      }
    },  {
      name: "admin_role_menus",
      description: `管理_角色清單\n權限menu`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "role",],
        nameSet: ["全部", "admin_role_menus",]
      }
    }, {
      name: "admin_roles",
      description: `管理_角色清單\n角色權限`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "role",],
        nameSet: ["全部", "admin_roles",]
      }
      
    },{
      name: "admin_user_company",
      description: `管理_管理員清單\n管理員隸屬的company`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "Auth"],
        nameSet: ["全部", "admin_user_company",]
      }
      
    },{
      name: "admin_user_roles",
      description: `管理_管理員清單\n管理員隸屬的角色`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "Auth"],
        nameSet: ["全部", "admin_user_roles",]
      }
      
    },{
      name: "admin_users",
      description: `管理_管理員清單\n管理員`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "Auth"],
        nameSet: ["全部", "admin_users",]
      }
      
    },{
      name: "admin_visible_company",
      description: `管理_管理員清單\n管理員可以看見的營商`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "Auth"],
        nameSet: ["全部", "admin_visible_company",]
      }
      
    },
    {
      name: "assigin_currency",
      description: `財務_指定幣別\n指定帳單特定月份的結算幣別`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部","assigin_currency",]
      }
      
    },
     {
      name: "bill_group",
      description: `財務_帳單群組\n把vendor或者遊戲群組包成要出的group`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "bill_group",]
      }
      
    },
    {
      name: "bill_group_arrow",
      description: `財務_帳單群組\n有方向性的折抵`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "bill_group_arrow",]
      }
      
    },
    {
      name: "bill_set",
      description: `財務_帳單設置\n帳單資訊設置`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "bill_set",]
      }
      
    },
     {
      name: "bill_set",
      description: `財務_帳單設置\n帳單資訊設置`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "bill_set",]
      }
      
    },
    {
      name: "buiness_setting_list",
      description: `業務_開關設置\n買分跟預付使用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","業務"],
        backEnd: ["全部", "Buiness",],
        nameSet: ["全部", "buiness_setting_list",]
      }
      
    },
      {
      name: "business_exchange_rate",
      description: `業務_GF幣匯率\n買分跟預付使用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","業務"],
        backEnd: ["全部", "Buiness",],
        nameSet: ["全部", "business_exchange_rate",]
      }
      
    }, {
      name: "buy_point_list",
      description: `業務_買分歷程\n買分跟預付使用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","業務"],
        backEnd: ["全部", "Buiness",],
        nameSet: ["全部", "buy_point_list",]
      }
      
    },
    {
      name: "buy_point_summary",
      description: `後端產生與使用\n每小時統計一次 用來比對是否到達水位`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","後端用"],
        backEnd: ["全部", "Buiness",],
        nameSet: ["全部", "buy_point_summary",]
      }
      
    },

    {
      name: "chat_group_id",
      description: `系統_telegram機器人\n設計telegram 話題ID`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","系統"],
        backEnd: ["全部", "System",],
        nameSet: ["全部", "chat_group_id",]
      }
      
    },
    {
      name: "companies_precount",
      description: `後端使用與創建\n後端通知後台要重算的preocunt`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","後端用"],
        backEnd: ["全部", "System",],
        nameSet: ["全部", "companies_precount",]
      }
      
    },
     {
      name: "company_change",
      description: `營運設置_代理清單\n改掛op`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","營運設置"],
        backEnd: ["全部", "Operator",],
        nameSet: ["全部", "company_change",]
      }
      
    },
    {
      name: "cost_set",
      description: `財務_成本設置\n vendor成本設置`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "cost_set",]
      }
      
    },
      {
      name: "dashboard_precount",
      description: `首頁\n 後端產生 也會用來比對帳單結果`,
      tags: {
        local: ["全部","rep", "rep_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "rep_bonus",],
        nameSet: ["全部", "dashboard_precount",]
      }
      
    },
    {
      name: "db_basic",
      description: `系統_db群組\n 資料庫群組資料與設置`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","系統"],
        backEnd: ["全部", "System",],
        nameSet: ["全部", "db_basic",]
      }
      
    },
       {
           name: "k8s_basic",
           description: `k8s_db群組\n k8s資料與設置`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","系統"],
               backEnd: ["全部", "System",],
               nameSet: ["全部", "k8s_basic",]
           }

       },
     {
      name: "event_list",
      description: `業務_活動設置\n 帳單設置活動用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","業務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "event_list",]
      }
      
    },
    {
      name: "fail_db",
      description: `後端用\n 創建失敗的db資料`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","後端用"],
        backEnd: ["全部", "error",],
        nameSet: ["全部", "fail_db",]
      }
      
    },

      {
      name: "file_list",
      description: `後端用\n 創建檔案時創建資料 刪除用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","後端用"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "file_list",]
      }
      
    },
      {
      name: "game_group",
      description: `財務_遊戲群組\n帳單遊戲分群用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "game_group",]
      }
      
    },
      {
      name: "game_tags",
      description: `營運設置_遊戲標籤清單\n 遊戲標籤`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","營運設置"],
        backEnd: ["全部", "Vendor",],
        nameSet: ["全部", "game_tags",]
      }
      
    },

      {
      name: "games",
      description: `營運設置_遊戲清單\n 遊戲相關資料`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","營運設置"],
        backEnd: ["全部", "Vendor",],
        nameSet: ["全部", "games",]
      }
      
    },
    {
      name: "gf_exchange_rate",
      description: `系統_幣別轉換清單\n 後端們使用的匯率`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","系統"],
        backEnd: ["全部", "System",],
        nameSet: ["全部", "gf_exchange_rate",]
      }
      
    },
 {
      name: "global_params",
      description: `系統_全域參數清單\n 共用的資料`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","系統"],
        backEnd: ["全部", "Misc",],
        nameSet: ["全部", "global_params",]
      }
      
    },
     {
      name: "group_discount",
      description: `財務_群組優惠\n 帳單用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","財務"],
        backEnd: ["全部", "Finance",],
        nameSet: ["全部", "group_discount",]
      }
      
    },
     {
      name: "bulletins",
      description: `管理_公告清單\n公告使用`,
      tags: {
        local: ["全部","k8s", "k8s_ezadmin"],
        frontEnd: ["全部","管理"],
        backEnd: ["全部", "Misc",],
        nameSet: ["全部", "bulletins",]
      }
      
    },
   {
       name: "invoice_file",
       description: `財務 後端用\n 檔案創建後 aws上\n 把url存下來以便刪除`,
       tags: {
           local: ["全部","k8s", "k8s_ezadmin"],
           frontEnd: ["全部","財務"],
           backEnd: ["全部", "Finance",],
           nameSet: ["全部", "invoice_file",]
       }

   },
       {
           name: "invoice_need_vendor",
           description: `財務 後端用\n 目標月份需要哪些帳單\n op vendor`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","財務"],
               backEnd: ["全部", "Finance",],
               nameSet: ["全部", "invoice_need_vendor",]
           }

       },
       {
           name: "invoice_set",
           description: `財務_帳單設置\n 帳單相關設`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","財務"],
               backEnd: ["全部", "Finance",],
               nameSet: ["全部", "invoice_set",]
           }

       },
       {
           name: "monthly_exchange",
           description: `財務_每月匯率\n 每個月的匯率設置 帳單用`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","財務"],
               backEnd: ["全部", "Finance",],
               nameSet: ["全部", "monthly_exchange",]
           }

       },
       {
           name: "op_vendor_channel_mapping",
           description: `營運設置＿營運商清單\n op的channel`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","營運設置"],
               backEnd: ["全部", "Operator",],
               nameSet: ["全部", "op_vendor_channel_mapping",]
           }

       },
        {
           name: "operator_tags",
           description: `營運設置_標籤類型清單\n op的標記`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","營運設置"],
               backEnd: ["全部", "Operator",],
               nameSet: ["全部", "operator_tags",]
           }

       },

      {
           name: "operators",
           description: `營運設置_營運商清單\n operator 相關基本資料`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","營運設置"],
               backEnd: ["全部", "Operator",],
               nameSet: ["全部", "operators",]
           }

       },

      {
           name: "others_precount_params",
           description: `營運設置_營運商清單\n operator 內活動設置`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","營運設置"],
               backEnd: ["全部", "Operator",],
               nameSet: ["全部", "others_precount_params",]
           }

       },

         {
           name: "platform",
           description: `系統＿全域參數清單\n`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","系統"],
               backEnd: ["全部", "System",],
               nameSet: ["全部", "platform",]
           }

       },





       {
           name: "maintain_planning",
           description: `維護_api維護\n 維護相關設置與資料`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","維護"],
               backEnd: ["全部", "System",],
               nameSet: ["全部", "maintain_planning",]
           }

       },
       {
           name: "menus",
           description: `前端用\n 前端頁面相關設置`,
           tags: {
               local: ["全部","k8s", "k8s_ezadmin"],
               frontEnd: ["全部","管理"],
               backEnd: ["全部", " ",],
               nameSet: ["全部",  "menus",]
           }

       },





   ];
