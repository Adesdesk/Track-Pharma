
const products = [
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "November 03, 2022",
      expiryDate: "852",
      productName: "Tramadol ",
      scientificName: "Tramadol ",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-tramadol-capsules-1542117110.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Naloxone",
      scientificName: "Naloxone",
      image: "https://www.alliancehealthplan.org/wp-content/uploads/2021/10/Naloxone.jpeg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Acetaminophen ",
      scientificName: "Acetaminophen ",
      image: "https://cdn.britannica.com/23/130223-050-99065995/acetaminophen-suppositories.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Kevzara ",
      scientificName: "Kevzara ",
      image: "https://everyone.org/media/catalog/product/cache/2a34eb77126804374f02a711ff91db55/k/e/kevzara-sarilumab.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Lofexidine",
      scientificName: "Lofexidine",
      image: "https://cdn.sanity.io/images/0vv8moc6/drugtopics/d5f2d2d066bfcbcc507618c18606206a7f462f54-1000x500.png?fit=crop&auto=format",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Cymbalta ",
      scientificName: "Cymbalta",
      image: "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2019/07/2-2-Cymbalta-box.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Fentanyl ",
      scientificName: "Fentanyl",
      image: "https://nida.nih.gov/sites/default/files/2020-05/Fentanyl-ALT.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Benzonatate ",
      scientificName: "Benzonatate",
      image: "https://store.yavarimeds.com/media/catalog/product/cache/1/image/600x780/9df78eab33525d08d6e5fb8d27136e95/1/1/117.Benzonatate_106_01_P552566544623528182.jpg.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Hydroxychloroquine ",
      scientificName: "Hydroxychloroquine",
      image: "https://i.guim.co.uk/img/media/1869de171e0f64bcc3d1fb9f01694d42d8a2bbb6/0_134_4055_2434/master/4055.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ce18d8ecc9bdc8f68c1819cbcc594a06",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Zubsolv ",
      scientificName: "Zubsolv",
      image: "https://www.empr.com/wp-content/uploads/sites/7/2018/12/c9ed2593ba5847008687ec53889655f2-zubsolv_r_41162.jpg",
  },
  {
      manufacturerName: "Team201",
      manufacturerEmail: "team201@grandida.com",
      manufacturingDate: "January 03, 2022",
      expiryDate: "940",
      productName: "Viagra ",
      scientificName: "Viagra",
      image: "http://newcrystalhealth.org/obm/wp-content/uploads/2019/10/viagra_100mg_-_4_tablets-3_1.jpg",
  },
];

 
const users = [{
  "name": "Anallise Domleo",
  "email": "adomleo0@oakley.com",
  "address": "0x456cfba985cc8673c23dbc86f6551e56fb11c09c"
}, {
  "name": "Colver Rehm",
  "email": "crehm1@stumbleupon.com",
  "address": "0x8b28dd93235b62577bce0f6fccec9c50164e4b40"
}, {
  "name": "Georgeta Fellon",
  "email": "gfellon2@wordpress.org",
  "address": "0x3012183579772a7daed38bd8fd5386d85641f73f"
}, {
  "name": "Giuditta Sancroft",
  "email": "gsancroft3@china.com.cn",
  "address": "0x48f93fd67c2b94089817d4105cb7a9cb7942f2be"
}, {
  "name": "Rosmunda Echelle",
  "email": "rechelle4@fda.gov",
  "address": "0x2e1c8beaa0e5c299c249fb40fa7d0457a8534fdb"
}, {
  "name": "Mason Clyde",
  "email": "mclyde5@scribd.com",
  "address": "0xb26aea97c111f598004edef6b3474f1fb3816107"
}, {
  "name": "Edmon Scardifeild",
  "email": "escardifeild6@parallels.com",
  "address": "0x8bfb7743a78af8534c1c36116a9e8e6ebac30d20"
}, {
  "name": "Ianthe Syce",
  "email": "isyce7@shareasale.com",
  "address": "0xba0dc5add892be56adbc270b1f8b911f6a1c142d"
}, {
  "name": "Giffard Putton",
  "email": "gputton8@addthis.com",
  "address": "0x647bd6aa4e3fc016bfdbd97e5f6438ca2ecff4d0"
}, {
  "name": "Wye Ockland",
  "email": "wockland9@squarespace.com",
  "address": "0xa3c004e8cca95f972221a4170e2c11514f2d4942"
}]


export { products, users}