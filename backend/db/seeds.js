const ConsultantSeedDB = [
  {
    roles: "consultant",
    firstName: "Don",
    lastName: "Kim",
    email: "d@d.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "British Columbia",
      city: "Vancouver",
      zip: "ABC123",
      price: 1500,
      rating: 5,
      description: "I offer web development services",
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "1111111111",
    },
    nameOfBusiness: "DonLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Iksung",
    lastName: "Choi",
    email: "i@i.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      zip: "ABC123",
      price: 1400,
      description: "I offer therapy sessions for web developers",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "2222222222",
    },
    nameOfBusiness: "IkLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Raf",
    lastName: "Nobrega",
    email: "n@n.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "Columbia",
      city: "Vancouver",
      zip: "ABC123",
      price: 1300,
      description: "I offer web development services",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "3333333333",
    },
    nameOfBusiness: "RafLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Don2",
    lastName: "Kim2",
    email: "d2@d2.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "British Columbia",
      city: "Vancouver",
      zip: "ABC123",
      price: 1500,
      description: "I offer web development services",
      rating: 5,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "1111111111",
    },
    nameOfBusiness: "DonLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Iksung2",
    lastName: "Choi2",
    email: "i2@i2.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      zip: "ABC123",
      price: 1400,
      description: "I offer therapy sessions for web developers",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "2222222222",
    },
    nameOfBusiness: "IkLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Raf2",
    lastName: "Nobrega2",
    email: "n2@n2.com",
    password: "1234",
    options: {
      price: 1300,
      country: "Canada",
      state: "Columbia",
      city: "Vancouver",
      zip: "ABC123",
      description: "I offer web development services",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "3333333333",
    },
    nameOfBusiness: "RafLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Don3",
    lastName: "Kim3",
    email: "d3@d3.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "British Columbia",
      city: "Vancouver",
      zip: "ABC123",
      price: 1500,
      description: "I offer web development services",
      rating: 5,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "1111111111",
    },
    nameOfBusiness: "DonLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Iksung3",
    lastName: "Choi3",
    email: "i3@i3.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      zip: "ABC123",
      price: 1400,
      description: "I offer therapy sessions for web developers",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "2222222222",
    },
    nameOfBusiness: "IkLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "consultant",
    firstName: "Raf3",
    lastName: "Nobrega3",
    email: "n3@n3.com",
    password: "1234",
    options: {
      country: "Canada",
      state: "Columbia",
      city: "Vancouver",
      zip: "ABC123",
      price: 1300,
      description: "I offer web development services",
      rating: 4,
      profilePicture:
        "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
      phone: "3333333333",
    },
    nameOfBusiness: "RafLimited",
    license: "license test",
    verified: true,
  },
  {
    roles: "client",
    firstName: "John",
    lastName: "Doe",
    email: "j@j.com",
    password: "1234",
  },
  {
    roles: "client",
    firstName: "Lone",
    lastName: "Doe",
    email: "l@l.com",
    password: "1234",
  },
];

const category = [
  "Sales",
  "Therapists",
  "Lawyers",
  "Developers",
  "Mortgage",
  "Doctors",
];

const CategorySeedDB = (userData) => [
  {
    name: "Sales",
    description:
      "Revenue generation experts can guide you in the right direction of your business and sales quotas.",
    pictureUrl: "https://cdn-icons-png.flaticon.com/512/1389/1389079.png",
    users: [userData[0]._id],
  },
  {
    name: "Therapists",
    description:
      "It's simple to schedule appointments for individual or group therapy sessions.",
    pictureUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913000.png",
    users: [userData[1]._id],
  },
  {
    name: "Lawyers",
    description:
      "Using a secure and private virtual space, lessen the back and forth and manage your legal schedule.",
    pictureUrl: "https://cdn-icons-png.flaticon.com/512/2811/2811156.png",
    users: [userData[2]._id],
  },
  {
    name: "Developers",
    description:
      "Meet local and international software developers that can help creating the app of your dreams.",
    pictureUrl:
      "https://cdn-icons.flaticon.com/png/512/2721/premium/2721688.png?token=exp=1657526001~hmac=8cd362465d03b52612be6a032bf6f0d2",
    users: [userData[3]._id],
  },
  {
    name: "Mortgage",
    description:
      "An excellent opportunity to introduce yourself to your valued mortgage broker.",
    pictureUrl: "https://cdn-icons-png.flaticon.com/512/243/243224.png",
    users: [userData[4]._id],
  },
  {
    name: "Doctors",
    description:
      "Consult with a doctor privately anytime. No office visit required.",
    pictureUrl: "https://cdn-icons-png.flaticon.com/128/809/809957.png",
    users: [userData[5]._id],
  },
];
module.exports = {
  ConsultantSeedDB,
  CategorySeedDB,
};
/*
  name: { type: String },
  description: { type: String },
  pictureUrl: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],*/
