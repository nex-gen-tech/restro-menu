export type MenuItem = { name: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };
export type MenuGroup = { title: string; sections: MenuSection[] };

export const menuGroups: MenuGroup[] = [
  {
    title: "INDIAN MENU",
    sections: [
      {
        title: "STARTER ITEMS",
        items: [
          {
            name: "VEG PAKODA",
            price: "₹60",
          },
          {
            name: "ONION PAKODA",
            price: "₹60",
          },
          {
            name: "PANEER PAKODA",
            price: "₹80",
          },
          {
            name: "CHICKEN PAKODA",
            price: "₹120",
          },
        ],
      },
      {
        title: "SNACKS ITEMS",
        items: [
          {
            name: "CHICKEN CHOP",
            price: "₹20",
          },
          {
            name: "ALU FRY",
            price: "₹40",
          },
          {
            name: "PLANE PAPAR",
            price: "₹30",
          },
          {
            name: "MASALA PAPAR",
            price: "₹50",
          },
        ],
      },
      {
        title: "ROLL ITEMS",
        items: [
          {
            name: "VEG ROLL",
            price: "₹40",
          },
          {
            name: "PANEER ROLL",
            price: "₹50",
          },
          {
            name: "EGG ROLL",
            price: "₹40",
          },
          {
            name: "DOUBLE EGG ROLL",
            price: "₹50",
          },
          {
            name: "CHICKEN ROLL",
            price: "₹80",
          },
          {
            name: "EGG CHICKEN ROLL",
            price: "₹90",
          },
        ],
      },
      {
        title: "ROTI ITEMS",
        items: [
          {
            name: "TAWA ROTI",
            price: "₹10",
          },
          {
            name: "BUTTER ROTI",
            price: "₹15",
          },
          {
            name: "PLANE PARATHA",
            price: "₹20",
          },
          {
            name: "ALU PARATHA",
            price: "₹30",
          },
          {
            name: "LACCHA PARATHA",
            price: "₹30",
          },
        ],
      },
      {
        title: "EGG ITEMS",
        items: [
          {
            name: "BOIL EGG 2 PCS",
            price: "₹30",
          },
          {
            name: "SIMPLE OMLET 2 PCS",
            price: "₹30",
          },
          {
            name: "MASALA OMLET 2 PCS",
            price: "₹40",
          },
          {
            name: "EGG BURJI 2 PCS",
            price: "₹30",
          },
          {
            name: "EGG MASALA 2 PCS",
            price: "₹90",
          },
          {
            name: "EGG CURRY 2 PCS",
            price: "₹80",
          },
        ],
      },
      {
        title: "NON VEG ITEMS",
        items: [
          {
            name: "FISH CURRY",
            price: "₹70",
          },
          {
            name: "FISH KOLHAPURI",
            price: "₹90",
          },
        ],
      },
      {
        title: "RICE ITEMS",
        items: [
          {
            name: "PLANE RICE",
            price: "₹50",
          },
          {
            name: "JEERA RICE",
            price: "₹70",
          },
          {
            name: "VEG PULAO",
            price: "₹100",
          },
          {
            name: "MOTOR PULAO",
            price: "₹100",
          },
          {
            name: "PANEER PULAO",
            price: "₹120",
          },
          {
            name: "MUSHROOM PULAO",
            price: "₹130",
          },
          {
            name: "EGG PULAO",
            price: "₹120",
          },
          {
            name: "CHICKEN PULAO",
            price: "₹150",
          },
          {
            name: "VEG BIRYANI",
            price: "₹120",
          },
          {
            name: "EGG BIRYANI",
            price: "₹130",
          },
          {
            name: "CHICKEN DUM BIRYANI",
            price: "₹180",
          },
        ],
      },
      {
        title: "TANDOOR ITEMS",
        items: [
          {
            name: "CHICKEN TIKKA",
            price: "₹180",
          },
          {
            name: "TANDOORI CHICKEN ( HALF )",
            price: "₹200",
          },
          {
            name: "TANDOORI CHICKEN ( FULL )",
            price: "₹400",
          },
        ],
      },
      {
        title: "MAIN COURSE",
        items: [
          {
            name: "BOIL DAL",
            price: "₹30",
          },
          {
            name: "ALU JEERA",
            price: "₹50",
          },
          {
            name: "MIX VEG",
            price: "₹60",
          },
          {
            name: "MIX VEG GRAVY",
            price: "₹120",
          },
          {
            name: "DAL FRY",
            price: "₹70",
          },
          {
            name: "PANEER DAL FRY",
            price: "₹100",
          },
          {
            name: "PLAIN DAL TADKA",
            price: "₹90",
          },
          {
            name: "EGG DAL TADKA",
            price: "₹100",
          },
          {
            name: "CHICKEN TADKA",
            price: "₹120",
          },
          {
            name: "EGG CHICKEN TADKA",
            price: "₹130",
          },
          {
            name: "PANEER TADKA",
            price: "₹120",
          },
          {
            name: "PANEER MASALA",
            price: "₹120",
          },
          {
            name: "MATAR PANEER",
            price: "₹150",
          },
          {
            name: "VEG KADAI",
            price: "₹120",
          },
          {
            name: "ALU PANEER",
            price: "₹120",
          },
          {
            name: "ALU MATAR PANEER",
            price: "₹160",
          },
          {
            name: "KADAI PANEER",
            price: "₹160",
          },
          {
            name: "BUTTER PANEER MASALA",
            price: "₹180",
          },
          {
            name: "EGG MUGLAI",
            price: "₹90",
          },
          {
            name: "CHICKEN MUGLAI",
            price: "₹120",
          },
          {
            name: "EGG CHICKEN MUGLAI",
            price: "₹150",
          },
          {
            name: "PRAWNS CURRY",
            price: "₹150",
          },
          {
            name: "CHICKEN CURRY WITH SKIN",
            price: "₹180",
          },
          {
            name: "CHICKEN CURRY",
            price: "₹150",
          },
          {
            name: "CHICKEN KADAI",
            price: "₹180",
          },
          {
            name: "CHICKEN MALVANI",
            price: "₹180",
          },
          {
            name: "CHICKEN KOLHAPURI",
            price: "₹180",
          },
          {
            name: "CHICKEN HANDI LEGIS",
            price: "₹180",
          },
          {
            name: "CHICKEN KARMA",
            price: "₹180",
          },
          {
            name: "CHICKEN SUKHA",
            price: "₹180",
          },
          {
            name: "CHICKEN KOSHA WITH SKIN",
            price: "₹210",
          },
          {
            name: "CHICKEN KOSHA",
            price: "₹180",
          },
          {
            name: "CHICKEN MASALA",
            price: "₹180",
          },
          {
            name: "BUTTER CHICKEN MASALA",
            price: "₹190",
          },
          {
            name: "EGG DO PAYAJA",
            price: "₹120",
          },
          {
            name: "CHICKEN DO PAYAJA",
            price: "₹180",
          },
          {
            name: "ANDHRA STYLE CHICKEN",
            price: "₹180",
          },
          {
            name: "MUTTON ROGAN JOSH",
            price: "₹260",
          },
          {
            name: "MUTTON CURRY",
            price: "₹250",
          },
          {
            name: "MUTTON KALHAPURI",
            price: "₹250",
          },
          {
            name: "MUTTON SUKHA",
            price: "₹250",
          },
          {
            name: "MUTTON KOSHA",
            price: "₹260",
          },
        ],
      },
      {
        title: "THALI (RESTAURANT ONLY)",
        items: [
          {
            name: "VEG THALI",
            price: "₹50",
          },
          {
            name: "EGG THALI",
            price: "₹70",
          },
          {
            name: "FISH THALI",
            price: "₹80",
          },
          {
            name: "CHICKEN THALI",
            price: "₹90",
          },
          {
            name: "MUTTON THALI",
            price: "₹250",
          },
        ],
      },
      {
        title: "SALAD",
        items: [
          {
            name: "GREEN SALAD",
            price: "₹50",
          },
          {
            name: "ONION SALAD",
            price: "₹30",
          },
        ],
      },
    ],
  },
  {
    title: "CHINESE MENU",
    sections: [
      {
        title: "MOMO",
        items: [
          {
            name: "STEAM VEG MOMO 10 PCS",
            price: "₹90",
          },
          {
            name: "STEAM CHICKEN MOMO 10 PCS",
            price: "₹120",
          },
          {
            name: "FRIED VEG MOMO 10 PCS",
            price: "₹110",
          },
          {
            name: "FRIED CHICKEN MOMO 10 PCS",
            price: "₹140",
          },
          {
            name: "CHICKEN TANDOORI MOMO 10 PCS",
            price: "₹160",
          },
          {
            name: "PAN FRIED MOMO CHICKEN 10 PCS",
            price: "₹160",
          },
          {
            name: "SCHEZWAN FRIED MOMO CHICKEN 10 PCS",
            price: "₹160",
          },
        ],
      },
      {
        title: "VEG STARTER ITEMS",
        items: [
          {
            name: "VEG MANCHURIAN",
            price: "₹100",
          },
          {
            name: "GOBI MANCHURIAN",
            price: "₹100",
          },
          {
            name: "BABY CORN MANCHURIAN",
            price: "₹150",
          },
          {
            name: "CRISPY CORN",
            price: "₹130",
          },
          {
            name: "CRISPY BABY CORN",
            price: "₹150",
          },
          {
            name: "CHILLI BABY CORN",
            price: "₹150",
          },
          {
            name: "MUSHROOM MANCHURIAN",
            price: "₹150",
          },
          {
            name: "PANEER MANCHURIAN",
            price: "₹160",
          },
          {
            name: "CHILLI MUSHROOM",
            price: "₹160",
          },
          {
            name: "CHILLI PANEER",
            price: "₹160",
          },
          {
            name: "SWEET CHILLI PATATO",
            price: "₹160",
          },
        ],
      },
      {
        title: "NON VEG STARTER ITEMS",
        items: [
          {
            name: "EGG CHILLI",
            price: "₹120",
          },
          {
            name: "GOLDEN FRIED PRAWNS",
            price: "₹180",
          },
          {
            name: "CHILI PRAWNS",
            price: "₹180",
          },
          {
            name: "CHILLI GARLIC PRAWNS",
            price: "₹180",
          },
          {
            name: "PRAWNS MANCHURIAN",
            price: "₹180",
          },
          {
            name: "PRAWNS PAPER",
            price: "₹180",
          },
          {
            name: "PRAWNS 65",
            price: "₹180",
          },
          {
            name: "BUTTER GARLIC PRAWNS",
            price: "₹180",
          },
          {
            name: "CHICKEN MANCHURIAN",
            price: "₹180",
          },
          {
            name: "CHILLI CHICKEN GRAVY",
            price: "₹180",
          },
          {
            name: "CHILLI CHICKEN DRY",
            price: "₹180",
          },
          {
            name: "RED DRAGON CHICKEN",
            price: "₹180",
          },
          {
            name: "BARBEQUE CHICKEN",
            price: "₹200",
          },
          {
            name: "BARBEQUE WINGS",
            price: "₹220",
          },
          {
            name: "BUTTER GARLIC CHICKEN",
            price: "₹180",
          },
          {
            name: "HOT GARLIC CHICKEN",
            price: "₹180",
          },
          {
            name: "CHICKEN 65",
            price: "₹180",
          },
          {
            name: "LEMON CHICKEN",
            price: "₹160",
          },
          {
            name: "GINGER CHICKEN",
            price: "₹160",
          },
          {
            name: "GARLIC CHICKEN",
            price: "₹160",
          },
          {
            name: "SCHEZWAN CHICKEN",
            price: "₹180",
          },
          {
            name: "CHICKEN LOLIPOP",
            price: "₹200",
          },
          {
            name: "DRUMS OF HEAVEN ( LOLIPOP MASALA )",
            price: "₹200",
          },
          {
            name: "CRISPY CHICKEN",
            price: "₹200",
          },
          {
            name: "HONG KONG CHICKEN",
            price: "₹220",
          },
        ],
      },
      {
        title: "EGG ITEMS",
        items: [
          {
            name: "CHINESE OMLET",
            price: "₹60",
          },
          {
            name: "BREAD OMLET",
            price: "₹70",
          },
        ],
      },
      {
        title: "RICE ITEMS",
        items: [
          {
            name: "VEG FRIED RICE",
            price: "₹90",
          },
          {
            name: "EGG FRIED RICE",
            price: "₹110",
          },
          {
            name: "PRAWNS FRIED RICE",
            price: "₹140",
          },
          {
            name: "CHICKEN FRIED RICE",
            price: "₹140",
          },
          {
            name: "MIXED FRIED RICE",
            price: "₹180",
          },
          {
            name: "EGG CHICKEN FRIED RICE",
            price: "₹160",
          },
          {
            name: "VEG SCHEZWAN FRIED RICE",
            price: "₹100",
          },
          {
            name: "EGG SCHEZWAN FRIED RICE",
            price: "₹120",
          },
          {
            name: "PRAWNS SCHEZWAN FRIED RICE",
            price: "₹150",
          },
          {
            name: "CHICKEN SCHEZWAN FRIED RICE",
            price: "₹150",
          },
          {
            name: "MIXED SCHEZWAN RICE",
            price: "₹190",
          },
          {
            name: "VEG GARLIC RICE",
            price: "₹100",
          },
          {
            name: "EGG GARLIC RICE",
            price: "₹120",
          },
          {
            name: "PRAWNS GARLIC RICE",
            price: "₹150",
          },
          {
            name: "CHICKEN GARLIC RICE",
            price: "₹150",
          },
          {
            name: "VEG HONG KONG RICE",
            price: "₹100",
          },
          {
            name: "EGG HONG KONG RICE",
            price: "₹120",
          },
          {
            name: "PRAWNS HONG KONG RICE",
            price: "₹150",
          },
          {
            name: "CHICKEN HONG KONG RICE",
            price: "₹150",
          },
          {
            name: "MIXED HONG KONG RICE",
            price: "₹180",
          },
        ],
      },
      {
        title: "MEGGIE (RESTAURANT ONLY)",
        items: [
          {
            name: "MEGGIE",
            price: "₹30",
          },
          {
            name: "EGG MEGGIE",
            price: "₹40",
          },
        ],
      },
      {
        title: "CHOWMEIN / NOODLES ITEMS",
        items: [
          {
            name: "VEG NOODLES",
            price: "₹80",
          },
          {
            name: "EGG NOODLES",
            price: "₹110",
          },
          {
            name: "CHICKEN NOODLES",
            price: "₹130",
          },
          {
            name: "MIXED NOODLES",
            price: "₹170",
          },
          {
            name: "EGG CHICKEN NOODLE",
            price: "₹150",
          },
          {
            name: "VEG NOODLES GRAVY",
            price: "₹100",
          },
          {
            name: "EGG NOODLES GRAVY",
            price: "₹130",
          },
          {
            name: "CHICKEN NOODLES GRAVY",
            price: "₹150",
          },
          {
            name: "VEG SCHEZWAN NOODLES",
            price: "₹90",
          },
          {
            name: "EGG SCHEZWAN NOODLES",
            price: "₹120",
          },
          {
            name: "CHICKEN SCHEZWAN NOODLES",
            price: "₹140",
          },
          {
            name: "MIXED SCHEZWAN NOODLES",
            price: "₹180",
          },
          {
            name: "EGG CHICKEN SCHEZWAN NOODLE",
            price: "₹160",
          },
          {
            name: "VEG BROWN GARLIC NOODLES",
            price: "₹100",
          },
          {
            name: "EGG BROWN GARLIC NOODLES",
            price: "₹120",
          },
          {
            name: "CHICKEN BROWN GARLIC NOODLES",
            price: "₹140",
          },
        ],
      },
      {
        title: "SOUP ITEMS",
        items: [
          {
            name: "VEG SOUP",
            price: "₹60",
          },
          {
            name: "CHICKEN SOUP",
            price: "₹80",
          },
          {
            name: "SWEET CORN SOUP",
            price: "₹70",
          },
          {
            name: "HOT & SOUR SOUP",
            price: "₹100",
          },
          {
            name: "MANCHOW SOUP",
            price: "₹90",
          },
        ],
      },
      {
        title: "CONTINANTAL",
        items: [
          {
            name: "VEG ALFREDO PASTA",
            price: "₹110",
          },
          {
            name: "EGG ALFREDO PASTA",
            price: "₹130",
          },
          {
            name: "MUSHROOM ALFREDO PASTA",
            price: "₹130",
          },
          {
            name: "CHICKEN ALFREDO PASTA",
            price: "₹150",
          },
          {
            name: "VEG ARABIATA PASTA",
            price: "₹110",
          },
          {
            name: "EGG ARABIATA PASTA",
            price: "₹130",
          },
          {
            name: "MUSHROOM ARABIATA PASTA",
            price: "₹130",
          },
          {
            name: "CHICKEN ARABIATA PASTA",
            price: "₹150",
          },
          {
            name: "VEG MASALA MAFIA",
            price: "₹160",
          },
          {
            name: "CHICKEN MASALA MAFIA",
            price: "₹170",
          },
        ],
      },
      {
        title: "HOT DRINK ITEMS",
        items: [
          {
            name: "HOT TEA",
            price: "₹20",
          },
          {
            name: "HOT COFFE",
            price: "₹40",
          },
        ],
      },
      {
        title: "SOFT DRINK ITEMS",
        items: [
          {
            name: "MASALA COKE",
            price: "₹60",
          },
          {
            name: "FRESH LIME JUICE",
            price: "₹40",
          },
          {
            name: "FRESH LIME SODA",
            price: "₹70",
          },
          {
            name: "COLD COFFE",
            price: "₹90",
          },
        ],
      },
      {
        title: "LASSI ITEMS",
        items: [
          {
            name: "LASSI",
            price: "₹60",
          },
          {
            name: "MANGO LASSI",
            price: "₹80",
          },
          {
            name: "STRAWBERRY LASSI",
            price: "₹80",
          },
        ],
      },
      {
        title: "SHAKES ITEMS",
        items: [
          {
            name: "CHOCOLATE SHAKES",
            price: "₹80",
          },
          {
            name: "KITKAT SHAKES",
            price: "₹100",
          },
          {
            name: "MANGO SHAKES",
            price: "₹80",
          },
          {
            name: "STRAWBERRY SHAKES",
            price: "₹80",
          },
          {
            name: "ICE CREAM SHAKES",
            price: "₹100",
          },
          {
            name: "OREO SHAKES",
            price: "₹100",
          },
        ],
      },
    ],
  },
];
