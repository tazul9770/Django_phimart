// import PlayWithButton from "./components/PlayWithButton";
// import Person from "./components/Person";
// import Skills from "./components/Skills";
// import Employee from "./components/Employee";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart"
// import Effect from "./components/Effect";
// import APIfetch from "./components/APIfetch"
// import Form from "./components/Form";
// import FormState from "./components/FormState";
// import HookForm from "./components/HookForm";
import CartApp from "./cart/CartApp"

function App() {
  // const [cartItems, setCartItems] = useState(['product 1', 'product 2', 'product 3', 'product 4'])
  // const handleProductRemove = (item) => {
  //   setCartItems(cartItems.filter(product => product != item))
  // }
  return (
    <>
      {/* <Alert color="info" />
      <Button handleClick={handleClick} color="info">
        My Button
      </Button> */}
      {/* <PlayWithButton /> */}
      {/* <Person></Person> */}
      {/* <Skills/> */}
      {/* <Employee/> */}
      {/* <div className="m-5">
        <Navbar cartItemsCount={cartItems.length}/>
        <Cart cartItems={cartItems} onClear={() => {setCartItems([])}} onRemove={handleProductRemove}/>
      </div> */}
      {/* <Effect/> */}
      {/* <div>
        <APIfetch/>
      </div> */}
      {/* <Form/> */}
      {/* <FormState/> */}
      {/* <HookForm/> */}
      <CartApp/>
    </>
  );
}

export default App;