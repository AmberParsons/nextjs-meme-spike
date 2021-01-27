function Meme({ memeToShow }) {
    return ( <img src={memeToShow.url}/>)
    
};

export async function getStaticProps() {
    const res = await fetch('https://meme-api.herokuapp.com/gimme');
    const meme = await res.json();
    console.log(meme);

    return { props: { memeToShow: meme }}
}

export default Meme;