const { Prisma } = require("@prisma/client");

// @ts-ignore
const joueurs = [
  {
    firstname: "Eden",
    lastname: "Hazard",
    goal: 93,
    salary: 118000000,
    devise: "$",
    pictureURl:
      "https://img.a.transfermarkt.technology/portrait/big/50202-1537861483.jpg?lm=1",
  },
  {
    firstname: "Gareth",
    lastname: "Bale",
    goal: 39,
    salary: 31200000,
    devise: "£",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Liver-RM_%282%29_%28cropped%29.jpg/280px-Liver-RM_%282%29_%28cropped%29.jpg",
  },
  {
    firstname: "Paul",
    lastname: "Pogba",
    goal: 69,
    salary: 34000000,
    devise: "€",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Manchester_United_v_Leeds_United%2C_14_August_2021_%2823%29.jpg/220px-Manchester_United_v_Leeds_United%2C_14_August_2021_%2823%29.jpg",
  },
  {
    firstname: "Andres",
    lastname: "Iniesta",
    goal: 126,
    salary: 35000000,
    devise: "$",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9s_Iniesta.jpg/250px-Andr%C3%A9s_Iniesta.jpg",
  },
  {
    firstname: "Robert ",
    lastname: "Lewandowski",
    goal: 134,
    salary: 23000000,
    devise: "€",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Robert_Lewandowski%2C_FC_Bayern_M%C3%BCnchen_%28by_Sven_Mandel%2C_2019-05-27%29_01.jpg",
  },
  {
    firstname: "Mohamed",
    lastname: "Salah",
    goal: 97,
    salary: 19730000,
    devise: "€",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg",
  },
  {
    firstname: "Kylian",
    lastname: "Mbappé",
    goal: 125,
    salary: 22000000,
    devise: "€",
    pictureURl:
      "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1118x429:1120x427)/origin-imgresizer.eurosport.com/2022/04/03/3349464-68469548-2560-1440.jpg",
  },
  {
    firstname: "Neymar",
    lastname: "JR.",
    goal: 33,
    salary: 95000000,
    devise: "€",
    pictureURl:
      "https://i0.wp.com/www.afriquesports.net/wp-content/uploads/2022/07/NEYMAR-JR-1437082.jpeg?fit=2048%2C1152&ssl=1",
  },
  {
    firstname: "Lionel",
    lastname: "Messi",
    goal: 299,
    salary: 110000000,
    devise: "$",
    pictureURl:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt68e2d01a63826a80/60db38bcd9a5243b669adc7a/28587733bf577f983fbc38d2078c2dab388bf63a.jpg",
  },
  {
    firstname: "Cristiano",
    lastname: "Ronaldo",
    goal: 298,
    salary: 125000000,
    devise: "£",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  },
  {
    firstname: "Marcos Aoás Corrêa",
    lastname: "Marquinhos",
    goal: 44,
    salary: 1200000,
    devise: "€",
    pictureURl:
      "https://s.hs-data.com/bilder/spieler/gross/189274.jpg",
  },
  {
    firstname: "Marco",
    lastname: "Verratti",
    goal: 30,
    salary: 599999,
    devise: "€",
    pictureURl:
      "https://img.a.transfermarkt.technology/portrait/big/102558-1602849501.jpg?lm=1",
  },
  {
    firstname: "karim",
    lastname: "Benzema",
    goal: 99,
    salary: 5000999,
    devise: "€",
    pictureURl: "",
  },
  {
    firstname: "Michel",
    lastname: "Platini",
    goal: 96,
    salary: 45,
    devise: "Fr",
    pictureURl:
      "https://www.lequotidiendusport.fr/wp-content/uploads/2021/10/PLATINIOK.jpg",
  },
  {
    firstname: "Hakim ",
    lastname: "Ziyech",
    goal: 399,
    salary: 15000000,
    devise: "MAD",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg",
  },
  {
    firstname: "Romain",
    lastname: "Saïss",
    goal: 19,
    salary: 45000000,
    devise: "MAD",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Romain_Sa%C3%AFss_%28cropped%29.jpg",
  },
  {
    firstname: "Sofiane",
    lastname: "Boufal",
    goal: 45,
    salary: 35000000,
    devise: "MAD",
    pictureURl:
      "https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2022/12/01153021/Sofiane-Boufal.jpeg",
  },
  {
    firstname: "Edson Arantes do Nascimento",
    lastname: "Pelé",
    goal: 196,
    salary: 400000,
    devise: "$",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pel%C3%A9_%281966%29.jpg/220px-Pel%C3%A9_%281966%29.jpg",
  },
  {
    firstname: "Diego",
    lastname: "Maradona",
    goal: 450,
    salary: 500000,
    devise: "$",
    pictureURl:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTck8oykXTGN-rVMLmjZ_FMcVazdAEDF0sK62ciDBP_b5LtyoBxEr63Xl-6hRcQc5wX",
  },
  {
    firstname: "",
    lastname: "",
    goal: 0,
    salary: 0,
    devise: "€",
    pictureURl: "",
  },
];

module.exports = {
  joueurs,
};
