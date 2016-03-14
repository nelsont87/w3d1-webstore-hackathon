var add_to_page = function(item){
  $("#book1 .name").text(item.name);
  $("#book1 .category").text(item.category);
  $("#book1 .picture").text(item.picture_url);
  $("#book1 .price").text(item.price);
  $("#book1 .selling_points").text(item.selling_points);
};

var book1 = {
  name: "Redwall",
  category: "Fantasy Adventure",
  picture_url:"" ,
  price: 14.99,
  selling_points: ["Compelling story line", " Mouth watering food descriptions", " Epic battles"]
};
var book2 = {
  name: "Hardy Boys",
  category: "Mystery",
  picture_url:"" ,
  price: 12.95,
  selling_points: ["Shrouded in mystery", " Fun to guess the answer"]
};
// var album1 = {
//   name: ,
//   category: ,
//   picture_url:"" ,
//   price: ,
//   selling_points: [""]
// };
// var album2 = {
//   name: ,
//   category: ,
//   picture_url:"" ,
//   price: ,
//   selling_points: [""]
// };

add_to_page(book1);
//add_to_page(book2);

