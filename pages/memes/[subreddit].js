export async function getStaticPaths() {
    // I tried to actually call a thing to get the path names but the API didnt work as I thought ;-;
    // const res = await fetch('https://meme-api.herokuapp.com/gimme/10')
    // const {memes} = await res.json();

    // console.log(memes)
    // const subreddits = [];
    
    // memes.map((meme) => subreddits.push(meme.subreddit))

    // //const subReddits = uniq(forEach((meme) => { console.log(meme.subreddit); return pick(['subreddit'], meme)}, memes));
    // console.log(subreddits)
  
    const subreddits = ['wholesomememes', 'me_irl', 'catsstandingup', 'catswhoyell']

    const paths = subreddits.map((subreddit) => `/memes/${subreddit}`)
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params}) {
    const res = await fetch(`https://meme-api.herokuapp.com/gimme/${params.subreddit}`)
    const meme = await res.json()

    return { props: { memeToShow: meme }}
}

function Meme({ memeToShow }) {
    return ( <img style={{width: '50%'}} src={memeToShow.url}/>)  
};

export default Meme;