const array = [{
  price: 45.5,
  image: "https://ae04.alicdn.com/kf/Sd2f53935fdf044aebd546891c2432c63r.jpg",
  title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
  size:'XS',
  color:'grey',
  ram: null,
  cpu: null,
  scent: null,
  category_id: 1,
  comment_id: 0,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  price: 45.5,
  image: "https://ae04.alicdn.com/kf/Sd2f53935fdf044aebd546891c2432c63r.jpg",
  title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
  size: null,
  color: null,
  ram: '5464',
  cpu: 'intel',
  scent: null,
  category_id: 1,
  comment_id: 0,
  createdAt: new Date(),
  updatedAt: new Date()
}, 
{
  price: 45.5,
  image: "https://ae04.alicdn.com/kf/Sd2f53935fdf044aebd546891c2432c63r.jpg",
  title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
  size: null,
  color: null,
  ram: '1256',
  cpu: 'imd',
  scent: null,
  category_id: 1,
  comment_id: 0,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  price: 45.5,
  image: "https://ae04.alicdn.com/kf/Sd2f53935fdf044aebd546891c2432c63r.jpg",
  title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
  size: null,
  color: null,
  ram: null,
  cpu: null,
  scent: null,
  category_id: 1,
  comment_id: 0,
  createdAt: new Date(),
  updatedAt: new Date()
},
] 



const filterCpu = array.filter((el) => el.cpu).map((el) => {
 return el.cpu
})

const filterScent = array.filter((el) => el.scent).map((el) => {
  return el.scent
 })

console.log(filterCpu);
console.log(filterScent);



