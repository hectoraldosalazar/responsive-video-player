function Menu({onSelectVideo}) {


//Passes onSelectVideo prop a string argument so it works
  function clickHandler (event){
    const name = event.target.value
    onSelectVideo(name)
  }

	return (
    //Passes form the function that was created to change te value according to the radio selected
		  <form onClick={clickHandler}>
			  <input type="radio" name="src" value="fast" defaultChecked/> fast
			  <input type="radio" name="src" value="slow" /> slow
			  <input type="radio" name="src" value="cute" /> cute
			  <input type="radio" name="src" value="eek" /> eek
		  </form>
		);
};

export default Menu;
