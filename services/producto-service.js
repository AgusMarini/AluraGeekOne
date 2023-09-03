const crearNuevoProduct =(img,name,price)=>{
  const producto = document.createElement('div').className
    const contenido= ` 
    
    <div class="card">
    <div class="imgBx">
        <img src="${img}">
    </div>

    <div class="contentBx">

        <h2>${name}</h2>

        <div class="size">
            <h3>Precio:</h3>
            <span>${price}</span>                                    
        </div>
        <a href="../screen/producto.html">Ver producto</a>
    </div>
</div>
     `
   producto.innerHTML= contenido
   return producto;
    }   

const SeccionProducto = document.querySelector('[data-section="starwars"]')
const http = new XMLHttpRequest();

http.open("GET","  http://localhost:3000/productos" )

http.send();
http.onload = () =>{
    const data = JSON.parse(http.response) 
    console.log(data);
    data.forEach((product) => {
      const nuevoProducto= crearNuevoProduct(product.img, product.name, product.price)
      SeccionProducto.appendChild(nuevoProducto);
    });
}
