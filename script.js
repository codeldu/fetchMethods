// http methods

// get -> datalari elde etmek uchun
// post -> api-a yeni bir obtekt elave elemek uchun
// patch -> api da olan mueyyen obyekti modifikasiya etmek uchun
// put ->  api da olan mueyyen obyekti deyishdirmek ucuhun
// delete ->>  api da olan mueyyen obyekti silmek uchun


// const getData = async () =>{
//     let response = await fetch('https://northwind.vercel.app/api/suppliers/');
//     let data = await response.json();

//     console.log(data);
// }

// // getData()

// const getDataTwo = () =>{
//     fetch('https://northwind.vercel.app/api/suppliers/')
//     .then(res=> res.json())
//     .then(data => console.log(data))

// }


// // getDataTwo()



// const postData = async () => {

//     let response = await fetch('https://northwind.vercel.app/api/suppliers/', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj), 
//     })

//     let data = await response.json()

//     console.log(data);

// }


// // postData();

// let obj = {
//     contactTitle : "Muellim"
// }

// const patchData = async () =>{

//     let response = await fetch('https://northwind.vercel.app/api/suppliers/32', {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj), 
//     })

//     let data = await response.json();

//     console.log(data);
// }

// // patchData()

// const putData = async () =>{

//     let response = await fetch('https://northwind.vercel.app/api/suppliers/32', {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj), 
//     })

//     let data = await response.json();

//     console.log(data);
// }

// // putData()

// const deleteData = async () => {
//     let response = await fetch('https://northwind.vercel.app/api/suppliers/32', {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         }
//     })
//     let data = await response.json();

//     console.log(data);
// }

// deleteData()


// const getWithAxios = async () =>{
//     let response = await axios.get('https://northwind.vercel.app/api/suppliers')
//     console.log(response.data);
// }

// getWithAxios()


// let object = {
//     companyName : "Azersu MMC",
//     contactName : "Muqabil Eliyev",
//     contactTitle : "Kameraman"
// }

// const postWithAxios = async () => {
//     let response = await axios.post('https://northwind.vercel.app/api/suppliers', object);
//     console.log(response.data)

// }

// postWithAxios()

