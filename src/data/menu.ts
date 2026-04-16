export type MenuItem = { name: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };
export type MenuGroup = { title: string; sections: MenuSection[] };

export const menuGroups: MenuGroup[] = [
  {
    "title": "INDIAN MENU",
    "sections": [
      {
        "title": "STARTER ITEMS",
        "items": [
          {
            "name": "VEG PAKODA",
            "price": "₹70"
          },
          {
            "name": "CRAB ONION PAKODA",
            "price": "₹70"
          },
          {
            "name": "ONION PAKODA",
            "price": "₹70"
          },
          {
            "name": "PANEER PAKODA",
            "price": "₹90"
          },
          {
            "name": "CHICKEN PAKODA",
            "price": "₹140"
          }
        ]
      },
      {
        "title": "SNACKS ITEMS",
        "items": [
          {
            "name": "CHICKEN CHOP",
            "price": "₹30"
          },
          {
            "name": "ALU FRY",
            "price": "₹40"
          },
          {
            "name": "PLAIN PAPAD",
            "price": "₹30"
          },
          {
            "name": "MASALA PAPAD",
            "price": "₹50"
          }
        ]
      },
      {
        "title": "ROLL ITEMS",
        "items": [
          {
            "name": "VEG ROLL",
            "price": "₹40"
          },
          {
            "name": "PANEER ROLL",
            "price": "₹50"
          },
          {
            "name": "EGG ROLL",
            "price": "₹40"
          },
          {
            "name": "DOUBLE EGG ROLL",
            "price": "₹50"
          },
          {
            "name": "CHICKEN ROLL",
            "price": "₹80"
          },
          {
            "name": "EGG CHICKEN ROLL",
            "price": "₹90"
          }
        ]
      },
      {
        "title": "ROTI ITEMS",
        "items": [
          {
            "name": "TAWA ROTI",
            "price": "₹10"
          },
          {
            "name": "BUTTER ROTI",
            "price": "₹15"
          },
          {
            "name": "PLAIN PARATHA",
            "price": "₹20"
          },
          {
            "name": "ALU PARATHA",
            "price": "₹30"
          },
          {
            "name": "LACCHA PARATHA",
            "price": "₹30"
          }
        ]
      },
      {
        "title": "EGG ITEMS",
        "items": [
          {
            "name": "BOIL EGG 2 PCS",
            "price": "₹30"
          },
          {
            "name": "SIMPLE OMELETTE 2 PCS",
            "price": "₹30"
          },
          {
            "name": "MASALA OMELETTE 2 PCS",
            "price": "₹50"
          },
          {
            "name": "EGG BHURJI 2 PCS",
            "price": "₹30"
          },
          {
            "name": "EGG MASALA 2 PCS",
            "price": "₹90"
          },
          {
            "name": "EGG CURRY 2 PCS",
            "price": "₹80"
          }
        ]
      },
      {
        "title": "RICE ITEMS",
        "items": [
          {
            "name": "PLAIN RICE",
            "price": "₹50"
          },
          {
            "name": "JEERA RICE",
            "price": "₹70"
          },
          {
            "name": "VEG PULAO",
            "price": "₹120"
          },
          {
            "name": "MOTOR PULAO",
            "price": "₹120"
          },
          {
            "name": "PANEER PULAO",
            "price": "₹140"
          },
          {
            "name": "MUSHROOM PULAO",
            "price": "₹140"
          },
          {
            "name": "EGG PULAO",
            "price": "₹140"
          },
          {
            "name": "CHICKEN PULAO",
            "price": "₹160"
          },
          {
            "name": "VEG BIRYANI",
            "price": "₹140"
          },
          {
            "name": "EGG BIRYANI",
            "price": "₹150"
          },
          {
            "name": "CHICKEN DUM BIRYANI",
            "price": "₹180"
          }
        ]
      },
      {
        "title": "TANDOOR ITEMS",
        "items": [
          {
            "name": "CHICKEN TIKKA",
            "price": "₹180"
          },
          {
            "name": "TANDOORI CHICKEN ( HALF )",
            "price": "₹200"
          },
          {
            "name": "TANDOORI CHICKEN ( FULL )",
            "price": "₹400"
          }
        ]
      },
      {
        "title": "MAIN COURSE",
        "items": [
          {
            "name": "ALU JEERA",
            "price": "₹50"
          },
          {
            "name": "MIX VEG DRY",
            "price": "₹70"
          },
          {
            "name": "MIX VEG GRAVY",
            "price": "₹120"
          },
          {
            "name": "DAL FRY",
            "price": "₹70"
          },
          {
            "name": "PANEER DAL FRY",
            "price": "₹100"
          },
          {
            "name": "PLAIN DAL TADKA",
            "price": "₹90"
          },
          {
            "name": "EGG DAL TADKA",
            "price": "₹100"
          },
          {
            "name": "CHICKEN TADKA",
            "price": "₹140"
          },
          {
            "name": "EGG CHICKEN TADKA",
            "price": "₹150"
          },
          {
            "name": "PANEER TADKA",
            "price": "₹120"
          },
          {
            "name": "PANEER MASALA",
            "price": "₹140"
          },
          {
            "name": "MUSHROOM MASALA",
            "price": "₹160"
          },
          {
            "name": "KADAI MUSHROOM",
            "price": "₹160"
          },
          {
            "name": "MATAR PANEER",
            "price": "₹160"
          },
          {
            "name": "VEG KADAI",
            "price": "₹120"
          },
          {
            "name": "ALU PANEER",
            "price": "₹140"
          },
          {
            "name": "ALU MATAR PANEER",
            "price": "₹160"
          },
          {
            "name": "KADAI PANEER",
            "price": "₹160"
          },
          {
            "name": "BUTTER PANEER MASALA",
            "price": "₹180"
          },
          {
            "name": "EGG MUGLAI",
            "price": "₹100"
          },
          {
            "name": "CHICKEN MUGLAI",
            "price": "₹140"
          },
          {
            "name": "EGG CHICKEN MUGLAI",
            "price": "₹160"
          },
          {
            "name": "PRAWNS CURRY",
            "price": "₹160"
          },
          {
            "name": "CHICKEN CURRY WITH SKIN",
            "price": "₹180"
          },
          {
            "name": "CHICKEN CURRY",
            "price": "₹160"
          },
          {
            "name": "KADAI CHICKEN",
            "price": "₹180"
          },
          {
            "name": "CHICKEN MALVANI",
            "price": "₹180"
          },
          {
            "name": "CHICKEN KOLHAPURI",
            "price": "₹180"
          },
          {
            "name": "CHICKEN HANDI LEGS",
            "price": "₹180"
          },
          {
            "name": "CHICKEN KORMA",
            "price": "₹190"
          },
          {
            "name": "CHICKEN SUKHA",
            "price": "₹190"
          },
          {
            "name": "CHICKEN KOSHA WITH SKIN",
            "price": "₹210"
          },
          {
            "name": "CHICKEN KOSHA",
            "price": "₹180"
          },
          {
            "name": "CHICKEN MASALA",
            "price": "₹180"
          },
          {
            "name": "BUTTER CHICKEN MASALA",
            "price": "₹190"
          },
          {
            "name": "EGG DO PAYAJA",
            "price": "₹140"
          },
          {
            "name": "CHICKEN DO PAYAJA",
            "price": "₹180"
          },
          {
            "name": "ANDHRA STYLE CHICKEN",
            "price": "₹180"
          },
          {
            "name": "CHICKEN LEG KORMA",
            "price": "₹200"
          },
          {
            "name": "CHICKEN ROGAN JOSH",
            "price": "₹200"
          },
          {
            "name": "MUTTON ROGAN JOSH",
            "price": "₹260"
          },
          {
            "name": "MUTTON CURRY",
            "price": "₹250"
          },
          {
            "name": "MUTTON KOLHAPURI",
            "price": "₹250"
          },
          {
            "name": "MUTTON SUKHA",
            "price": "₹250"
          },
          {
            "name": "MUTTON KOSHA",
            "price": "₹260"
          }
        ]
      },
      {
        "title": "SALAD",
        "items": [
          {
            "name": "ONION SALAD",
            "price": "₹30"
          },
          {
            "name": "GREEN SALAD",
            "price": "₹50"
          }
        ]
      }
    ]
  },
  {
    "title": "CHINESE MENU",
    "sections": [
      {
        "title": "MOMO",
        "items": [
          {
            "name": "STEAM VEG MOMO 10 PCS",
            "price": "₹90"
          },
          {
            "name": "STEAM CHICKEN MOMO 10 PCS",
            "price": "₹120"
          },
          {
            "name": "FRIED VEG MOMO 10 PCS",
            "price": "₹120"
          },
          {
            "name": "FRIED CHICKEN MOMO 10 PCS",
            "price": "₹140"
          },
          {
            "name": "PAN FRIED VEG MOMO 10 PCS",
            "price": "₹150"
          },
          {
            "name": "PAN FRIED CHICKEN MOMO 10 PCS",
            "price": "₹160"
          },
          {
            "name": "SCHEZWAN VEG FRIED MOMO 10 PCS",
            "price": "₹150"
          },
          {
            "name": "SCHEZWAN CHICKEN FRIED MOMO 10 PCS",
            "price": "₹160"
          }
        ]
      },
      {
        "title": "VEG STARTER ITEMS",
        "items": [
          {
            "name": "VEG MANCHURIAN",
            "price": "₹100"
          },
          {
            "name": "GOBI MANCHURIAN",
            "price": "₹100"
          },
          {
            "name": "BABY CORN MANCHURIAN",
            "price": "₹150"
          },
          {
            "name": "CRISPY CORN",
            "price": "₹130"
          },
          {
            "name": "CRISPY BABY CORN",
            "price": "₹150"
          },
          {
            "name": "CHILLI BABY CORN",
            "price": "₹150"
          },
          {
            "name": "MUSHROOM MANCHURIAN",
            "price": "₹150"
          },
          {
            "name": "PANEER MANCHURIAN",
            "price": "₹160"
          },
          {
            "name": "CHILLI MUSHROOM",
            "price": "₹160"
          },
          {
            "name": "CHILLI PANEER",
            "price": "₹160"
          },
          {
            "name": "SWEET CHILLI POTATO",
            "price": "₹160"
          }
        ]
      },
      {
        "title": "NON VEG STARTER ITEMS",
        "items": [
          {
            "name": "EGG CHILLI",
            "price": "₹120"
          },
          {
            "name": "GOLDEN FRIED PRAWNS",
            "price": "₹180"
          },
          {
            "name": "CHILLI PRAWNS",
            "price": "₹180"
          },
          {
            "name": "CHILLI GARLIC PRAWNS",
            "price": "₹180"
          },
          {
            "name": "PRAWNS MANCHURIAN",
            "price": "₹180"
          },
          {
            "name": "PRAWNS PAPER",
            "price": "₹180"
          },
          {
            "name": "PRAWNS 65",
            "price": "₹180"
          },
          {
            "name": "BUTTER GARLIC PRAWNS",
            "price": "₹180"
          },
          {
            "name": "CHICKEN MANCHURIAN",
            "price": "₹180"
          },
          {
            "name": "CHILLI CHICKEN GRAVY",
            "price": "₹180"
          },
          {
            "name": "CHILLI CHICKEN DRY",
            "price": "₹180"
          },
          {
            "name": "RED DRAGON CHICKEN",
            "price": "₹180"
          },
          {
            "name": "BARBEQUE CHICKEN",
            "price": "₹200"
          },
          {
            "name": "BARBEQUE WINGS",
            "price": "₹220"
          },
          {
            "name": "BUTTER GARLIC CHICKEN",
            "price": "₹180"
          },
          {
            "name": "HOT GARLIC CHICKEN",
            "price": "₹180"
          },
          {
            "name": "CHICKEN 65",
            "price": "₹180"
          },
          {
            "name": "LEMON CHICKEN",
            "price": "₹160"
          },
          {
            "name": "GINGER CHICKEN",
            "price": "₹160"
          },
          {
            "name": "GARLIC CHICKEN",
            "price": "₹160"
          },
          {
            "name": "SCHEZWAN CHICKEN",
            "price": "₹180"
          },
          {
            "name": "CHICKEN LOLLIPOP",
            "price": "₹200"
          },
          {
            "name": "DRUMS OF HEAVEN ( LOLLIPOP MASALA )",
            "price": "₹200"
          },
          {
            "name": "CRISPY CHICKEN",
            "price": "₹200"
          },
          {
            "name": "HONG KONG CHICKEN",
            "price": "₹220"
          }
        ]
      },
      {
        "title": "EGG ITEMS",
        "items": [
          {
            "name": "CHINESE OMELETTE",
            "price": "₹60"
          },
          {
            "name": "BREAD OMELETTE",
            "price": "₹70"
          }
        ]
      },
      {
        "title": "RICE ITEMS",
        "items": [
          {
            "name": "VEG FRIED RICE",
            "price": "₹90"
          },
          {
            "name": "EGG FRIED RICE",
            "price": "₹110"
          },
          {
            "name": "MUSHROOM FRIED RICE",
            "price": "₹120"
          },
          {
            "name": "PANEER FRIED RICE",
            "price": "₹130"
          },
          {
            "name": "PRAWNS FRIED RICE",
            "price": "₹140"
          },
          {
            "name": "CHICKEN FRIED RICE",
            "price": "₹140"
          },
          {
            "name": "MIXED FRIED RICE",
            "price": "₹180"
          },
          {
            "name": "EGG CHICKEN FRIED RICE",
            "price": "₹160"
          },
          {
            "name": "VEG SCHEZWAN FRIED RICE",
            "price": "₹110"
          },
          {
            "name": "EGG SCHEZWAN FRIED RICE",
            "price": "₹130"
          },
          {
            "name": "PRAWNS SCHEZWAN FRIED RICE",
            "price": "₹160"
          },
          {
            "name": "CHICKEN SCHEZWAN FRIED RICE",
            "price": "₹160"
          },
          {
            "name": "MIXED SCHEZWAN RICE",
            "price": "₹190"
          },
          {
            "name": "VEG GARLIC RICE",
            "price": "₹100"
          },
          {
            "name": "EGG GARLIC RICE",
            "price": "₹120"
          },
          {
            "name": "PRAWNS GARLIC RICE",
            "price": "₹150"
          },
          {
            "name": "CHICKEN GARLIC RICE",
            "price": "₹150"
          },
          {
            "name": "VEG HONG KONG RICE",
            "price": "₹100"
          },
          {
            "name": "EGG HONG KONG RICE",
            "price": "₹120"
          },
          {
            "name": "PRAWNS HONG KONG RICE",
            "price": "₹150"
          },
          {
            "name": "CHICKEN HONG KONG RICE",
            "price": "₹150"
          },
          {
            "name": "MIXED HONG KONG RICE",
            "price": "₹180"
          }
        ]
      },
      {
        "title": "MAGGI (RESTAURANT ONLY)",
        "items": [
          {
            "name": "MAGGI",
            "price": "₹30"
          },
          {
            "name": "EGG MAGGI",
            "price": "₹40"
          }
        ]
      },
      {
        "title": "CHOWMEIN / NOODLES ITEMS",
        "items": [
          {
            "name": "VEG NOODLES",
            "price": "₹90"
          },
          {
            "name": "EGG NOODLES",
            "price": "₹110"
          },
          {
            "name": "CHICKEN NOODLES",
            "price": "₹130"
          },
          {
            "name": "MIXED NOODLES",
            "price": "₹170"
          },
          {
            "name": "EGG CHICKEN NOODLE",
            "price": "₹150"
          },
          {
            "name": "VEG NOODLES GRAVY",
            "price": "₹100"
          },
          {
            "name": "EGG NOODLES GRAVY",
            "price": "₹130"
          },
          {
            "name": "CHICKEN NOODLES GRAVY",
            "price": "₹150"
          },
          {
            "name": "VEG SCHEZWAN NOODLES",
            "price": "₹100"
          },
          {
            "name": "EGG SCHEZWAN NOODLES",
            "price": "₹120"
          },
          {
            "name": "CHICKEN SCHEZWAN NOODLES",
            "price": "₹140"
          },
          {
            "name": "MIXED SCHEZWAN NOODLES",
            "price": "₹180"
          },
          {
            "name": "EGG CHICKEN SCHEZWAN NOODLE",
            "price": "₹160"
          },
          {
            "name": "VEG BROWN GARLIC NOODLES",
            "price": "₹100"
          },
          {
            "name": "EGG BROWN GARLIC NOODLES",
            "price": "₹120"
          },
          {
            "name": "CHICKEN BROWN GARLIC NOODLES",
            "price": "₹140"
          }
        ]
      },
      {
        "title": "SOUP ITEMS",
        "items": [
          {
            "name": "MIXED VEGETABLE SOUP",
            "price": "₹70"
          },
          {
            "name": "CHICKEN SOUP",
            "price": "₹90"
          },
          {
            "name": "HOT & SOUR SOUP",
            "price": "₹100"
          },
          {
            "name": "MANCHOW SOUP",
            "price": "₹90"
          }
        ]
      },
      {
        "title": "CONTINENTAL",
        "items": [
          {
            "name": "VEG ALFREDO PASTA",
            "price": "₹120"
          },
          {
            "name": "EGG ALFREDO PASTA",
            "price": "₹140"
          },
          {
            "name": "MUSHROOM ALFREDO PASTA",
            "price": "₹140"
          },
          {
            "name": "CHICKEN ALFREDO PASTA",
            "price": "₹160"
          },
          {
            "name": "VEG ARRABBIATA PASTA",
            "price": "₹120"
          },
          {
            "name": "EGG ARRABBIATA PASTA",
            "price": "₹140"
          },
          {
            "name": "MUSHROOM ARRABBIATA PASTA",
            "price": "₹140"
          },
          {
            "name": "CHICKEN ARRABBIATA PASTA",
            "price": "₹160"
          },
          {
            "name": "VEG MASALA MAFIA",
            "price": "₹150"
          },
          {
            "name": "CHICKEN MASALA MAFIA",
            "price": "₹180"
          }
        ]
      },
      {
        "title": "HOT DRINK ITEMS",
        "items": [
          {
            "name": "HOT TEA",
            "price": "₹25"
          },
          {
            "name": "BLACK COFFEE",
            "price": "₹40"
          },
          {
            "name": "HOT COFFEE",
            "price": "₹50"
          }
        ]
      },
      {
        "title": "SOFT DRINK ITEMS",
        "items": [
          {
            "name": "MASALA COKE",
            "price": "₹60"
          },
          {
            "name": "FRESH LIME JUICE",
            "price": "₹50"
          },
          {
            "name": "FRESH LIME SODA",
            "price": "₹70"
          },
          {
            "name": "COLD COFFEE",
            "price": "₹90"
          }
        ]
      },
      {
        "title": "LASSI ITEMS",
        "items": [
          {
            "name": "LASSI",
            "price": "₹80"
          },
          {
            "name": "MANGO LASSI",
            "price": "₹100"
          },
          {
            "name": "STRAWBERRY LASSI",
            "price": "₹100"
          }
        ]
      },
      {
        "title": "SHAKES ITEMS",
        "items": [
          {
            "name": "CHOCOLATE SHAKE",
            "price": "₹100"
          },
          {
            "name": "KITKAT SHAKE",
            "price": "₹100"
          },
          {
            "name": "MANGO SHAKE",
            "price": "₹100"
          },
          {
            "name": "STRAWBERRY SHAKE",
            "price": "₹100"
          },
          {
            "name": "ICE CREAM SHAKE",
            "price": "₹100"
          },
          {
            "name": "OREO SHAKE",
            "price": "₹100"
          }
        ]
      },
      {
        "title": "MOJITO ITEMS",
        "items": [
          {
            "name": "LICHI MOJITO",
            "price": "₹100"
          },
          {
            "name": "VIRGIN MOJITO",
            "price": "₹100"
          },
          {
            "name": "MANGO MOJITO",
            "price": "₹100"
          },
          {
            "name": "STRAWBERRY MOJITO",
            "price": "₹100"
          },
          {
            "name": "BLUEBERRY MOJITO",
            "price": "₹100"
          }
        ]
      }
    ]
  }
];
