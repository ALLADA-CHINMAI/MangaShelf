
const FavouriteCards = () => {

  const savedItems: any = {};

  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) ?? '';
      if (key.startsWith("saved-")) {
          savedItems[key] = localStorage.getItem(key);
      }
  }


  return (
    <>
   
    </>
  );
};

export default FavouriteCards;