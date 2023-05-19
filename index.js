console.log("Big Basket");
function toggleDropdown() {
  var dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
}

let data = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_Perfumes&bodywash_250423_460_270423.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_160523_Bangalore.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_220812.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_bev_coldpressed-juice_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg",
];

const carousel = document.querySelector("#carousel");
let crouseldiv = document.createElement("img");

let i = 0;
setInterval(() => {
  if (i === data.length) {
    i = 0;
  }
  // console.log(i)

  crouseldiv.src = data[i];
  crouseldiv.style.width = "100%";
  carousel.append(crouseldiv);
  i++;
}, 3000);
const getData = async (category) => {
  let res = await fetch(
    `http://localhost:3000/data?_sort&category=${category}`
  );
  let data = await res.json();
  // console.log(data);
 
  if(category=="categoryimg"){
  console.log(data);

    display(data);
  }else if(category=="bankimg"){
    console.log(data)
  }

};
  
let categoryimgdiv = document.querySelector("#categoryimgdiv");
const display = (data) => {
  data.forEach((el) => {
    let categorydiv = document.createElement("div");
    categorydiv.className = "catediv";
    let categoryimg = document.createElement("img");
    categoryimg.src = el.imgurl;

    categorydiv.append(categoryimg);
    categoryimgdiv.append(categorydiv);
  });
};
getData("categoryimg");
getData("bankimg")
