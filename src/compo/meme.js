import React from "react";

function Meme(){
    const [meme, Setmeme] = React.useState({
        topText:"" ,
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })

     React.useEffect(()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemes(data.data.memes))},[])
       
     function InsertText(event){
        const {name , value} = event.target
        Setmeme( prevstate => { return {
            ...prevstate, [name]:value }})}   

    const [memes, setMemes] = React.useState([])
    function getimg(){
        const random = Math.floor(Math.random() * memes.length)
        const url = memes[random].url
        Setmeme( prevmeme => ({...prevmeme, randomImage: url}))}

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange = {InsertText}
                    value = {meme.topText}
                    name= 'topText'
                    />  
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange = {InsertText}
                    value = {meme.bottomText}
                    name= 'bottomText'
                    />
                <button onClick= {getimg}
                    className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img className="meme--image" src= {meme.randomImage} alt="Logo"/> 
                <h2 className="meme--text top"> {meme.topText} </h2>
                <h2 className="meme--text bottom"> {meme.bottomText} </h2>
            </div>
        </main>)}
export default Meme