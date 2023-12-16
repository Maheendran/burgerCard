import React, { useState,useRef } from 'react'
import './Burger.css'
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Buger = () => {
const[currentImage,setCurrentImage]=useState('./b5.png')

const elementRef = useRef(null);

  const handleImages = (imageUrl) => {
    const element = elementRef.current;
    element.classList.add('animate');
    setCurrentImage(imageUrl)
    setTimeout(() => {
      element.classList.remove('animate');
    }, 1000);
  };
return (
    <div className='mainBox'>
{/* navbar */}

<nav className='navbar'>
<div className='nav_left'>
    <img src="https://sd-media.simplydelivery.io/60797a8436fbe/webshop/images/webshopTheme_brand.png?v=1619693286" alt="" />
</div>
<div className='nav_mid'>
    <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Shop</li>

    </ul>
</div>
<div className='nav_right'>
<FaUser/>
<FaShoppingCart />
<IoMdNotifications/>
</div>

</nav>

{/* body */}
<section className='main_section'>

<div className='main_left'>

<h1>
    THE ULTIMATE BURGER HAVEN
</h1>
<p>Welcome to our Burger Paradise.Where every bite is a journey into flavour perfection indulge
     in a symphony of premium ingredients. 
     expertly creafted patties and mouthwatering sauces.</p>


<div className='mid_btn'> 
    <button >
        Order Now
    </button>
    <button className='menu_btn'>
      view Menu
    </button>
</div>

<div className='bottom_card'>
<div onClick={()=>handleImages('./b5.png')}>
    <img src="./b5.png" alt="" />
</div>
<div onClick={()=>handleImages('https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png')}>
    <img src="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png" alt="" />
</div>
<div onClick={()=>handleImages('https://www.freepnglogos.com/uploads/burger-png/download-shack-burger-png-image-pngimg-4.png')}>
    <img src="https://www.freepnglogos.com/uploads/burger-png/download-shack-burger-png-image-pngimg-4.png" alt="" />
</div>
<div onClick={()=>handleImages('https://freepngimg.com/thumb/sandwich/67331-king-whopper-hamburger-food-big-cheeseburger-fast.png')}>
<img src='https://freepngimg.com/thumb/sandwich/67331-king-whopper-hamburger-food-big-cheeseburger-fast.png' alt="" />
</div>
<div onClick={()=>handleImages('./b4.png')}>
    {/* <img src="https://freepngimg.com/thumb/cheese/61288-king-whopper-hamburger-cheeseburger-veggie-burger-buffalo.png" alt="" /> */}
<img src='./b4.png' alt="" />
</div>
</div>


</div>
{/* .================ */}
<div className='main_right rotateImage'>
    <div className='burgerCircle'>
        <div className='imagebOX' ref={elementRef}>
        <img src={currentImage} className='' alt="" />
        </div>
   
    </div>

</div>

</section>


    </div>
  )
}

export default Buger