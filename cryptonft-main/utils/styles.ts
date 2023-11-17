import carnft9 from "../public/Images/carnft9.jpg"
const stylingcss = () => {
    const styles = {
      padding: "50px 0 100px 0", 
      background: `linear-gradient(to right, rgba(137, 80, 250, 0.8), rgba(112, 6, 20, 0.8)), url(${carnft9})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundAttachment: 'fixed', 
    };
  
    return styles;
  };
  
  export { stylingcss };
  