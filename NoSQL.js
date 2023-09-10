db.createCollection("admins");
db.createCollection("customers");
db.createCollection("categories");
db.createCollection("products");
db.createCollection("orders_products");

//TO EXECUTE THE RELATIONSHIP BETEWEEN THE ENTITIES(COLLECTIONS).

db.admin.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "users_id",
      as: "user",
    },
  },
]);

// TO INSERT RECORDS INTO ENTITIES(COLLECTIONS)

db.customers.insertMany([
  {
    firstName: "Sulaimon",
    lastName: "Taiwo",
    city: "Lagos",
    postal_code: "00001",
    region: "Alakuko",
    country: "Nigeria",
  },
  {
    firstName: "Stephen",
    lastName: "Banire",
    city: "Ogun",
    postal_code: "00002",
    region: "Ipaja",
    country: "Nigeria",
  },
]);

db.admins.insertMany([
  { firstName: "dare", lastName: "debowale" },
  { firstName: "chukwu", lastName: "chinoze" },
]);


db.categories.insertMany([
  {
    name: "drinks",
    description: "This is made up of different type of soft drinks",
  },
  {
    name: "electronics",
    description: "This contains several electrical gadget",
  },
]);


db.products.insertMany([
  {
    name: "abolarin",
    spice: "ipaja",
    quantityInAunit: "",
    size: "9908884",
    scolor: "Nigeria",
    description: "2",
  },
  {
    shipAddress: "55, fatai road",
    shipCity: "Alakuko",
    shipAddress: "75 Adegbola street",
    shipPostalCode: "000987",
    shipCountry: "Nigeria",
    uniteOnOrder: "3",
  },
])


//TO EXECUTE THE RELATIONSHIP BETEWEEN THE ENTITIES(COLLECTIONS).

//FOR ADMINS
db.admins.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "users_id",
      as: "user",
    },
  },
]);

//FOR CUSTOMERS
db.customers.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "users_id",
      as: "user",
    },
  },
]);




//FOR PRODUCTS
db.products.aggregate([
  {
    $lookup: {
      from: "sales_people",
      localField: "_id",
      foreignField: "sales_people_id",
      as: "sales_person",
    },
  },
  {
    $lookup: {
      from: "categories",
      localField: "_id",
      foreignField: "categories_id",
      as: "category",
    },
  },
]);

db.orders_products.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "orders_id",
      as: "order",
    },
  },
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "products_id",
      as: "product",
    },
  },
]);

// TO GET RECORDS FROM THE ENTITIES

db.products.find()

db.categories.findOne({_id:""})

// TO UPDATE RECORDS FROM THE ENTITIES
db.customers.update({_id:""}, {$set:{firstName:""}})

// TO DELETE RECORDS FROM THE ENTITIES

db.products.deleteOne({_id:""})


