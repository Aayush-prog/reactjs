import React from 'react'
export default function Meme(){
    const[formValue,setFormValue]=React.useState(
        {firstValue:"",
        lastValue:"",
        randomImage:""
    })
    const [memes,setMemes]=React.useState([])
    function handleChange(event){
        const {name,value}=event.target
        setFormValue(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url = memes[randomNumber].url
        setFormValue(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemes(data.data.memes))
    },[])
    console.log(memes)
    return(
        <main>
            <div className="form" >
                <input type="text" placeholder="top" className="form-input" name="firstValue" onChange={handleChange} value={formValue.firstValue}/>
                <input type="text" placeholder="bottom" value={formValue.lastValue} className="form-input" name="lastValue" onChange={handleChange} />
                <button onClick={getMemeImage}className='form--button'>Generate a new image</button>
            </div>
            <div className="meme">
                <img src={formValue.randomImage} className="meme--image" />
                <h2 className="meme--text top">{formValue.firstValue}</h2>
                <h2 className="meme--text bottom">{formValue.lastValue}</h2>
            </div>
        </main>
    )
}