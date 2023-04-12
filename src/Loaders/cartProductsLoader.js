import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader= async()=>{
  const loadedProducts=await fetch('products.json');
  const products=await loadedProducts.json();

  // if cart data is in database , you have to use async await
  const storedcard=getShoppingCart()
   console.log(storedcard);
  
  //  by consoling we found an object data from localStorage ,that why we use for in loop(cause it is an object)
   const savedCart=[];
   for(const id in storedcard){
    const addedProduc=products.find(pd=>pd.id===id);
     if(addedProduc){
      const quantity=storedcard[id];
      addedProduc.quantity=quantity;
       savedCart.push(addedProduc);
     }
   }

  //  if you need to send two things
  // return [products, savedCart]
  // another options
  // return {products, savedCart}
   return savedCart;
}

export default cartProductsLoader;