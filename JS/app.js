'use strict'
const API = `https://fakestoreapi.com/products`

const elList = document.querySelector('.wrapper-list')



const getData = async(resurse) =>{
    const request = await fetch(resurse)

    if(request.status != 200){
        throw new Error('Qandaydir Xatolik bor')
    }
    const data = await request.json()
    return data;
}
// Render data 
getData(API)
    .then((data) =>{
        data.forEach((el) => {
            const item = document.createElement('li')
            item.className = "card wrapper-item"
            item.innerHTML =
            `
            <img src="${el.image}" alt="Product-image">
            <div class="wrapper-box">
                <p><strong>Price:</strong>${el.price}$</p>
                <p><strong>Discount:</strong>${el.rating.rate}</p>
                <p><strong>Desc:</strong>${el.description}</p>
                <p><strong>Name:</strong>${el.title}</p>
            </div>
            <span class="btn-delete"><i data-delet-id="${el.id}" class="fa-regular fa-trash-can"></i></span>
            `
            elList.appendChild(item)
        })
    })
    .catch(err => console.error(err))
// Delet 
    elList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-trash-can')){
            const deletID = e.target.dataset.deletId
            const report = confirm("Are you sure to delete?")

            if(deletID && report){
                fetch(`https://fakestoreapi.com/products/${deletID}`,{
                method:"DELETE"
                })
            .then(res=>{
                if(res){
                    getData(API)
                    console.log(res);
                }
            })
            }
        }
    })