export default async function (req, res) {
  const data = [
  {
    number: 1,
    id: 'a2af1eb7d9ab4e40a2f9ea072017560d',
    imageSource: 'https://pbs.twimg.com/media/EWs5jA_WkAE3bQE?format=jpg&name=small',
    scriptSource: 'https://stephen-1973.github.io/read/fish/static/js/main.6af4601e.js',
    time: { seconds: 1644611958, nanoseconds: 974000000 },
    title: 'Set up beautifully themed terminal with Oh my fish and Starship for Mac',
    website_url: 'https://stephen-1973.github.io/read/fish/index.html',
    pageDescription: 'Ditch Zsh for the amazin retro Fish which provides awesome themes and colors to make your terminal look profressional. Also, we will be installing iTerm2 for better user interface.',
    status: 'Publish',
    readTime: '2 min read',
    tags: [ 'Fish', 'iTerm2', 'OMF', 'Starship.rs' ]
  },
  {
    tags: [ 'LazyLoading', 'ServerSideRendering', 'CDN' ],
    number: 1,
    scriptSource: 'https://stephen-1973.github.io/read/optimization/main.js',
    readTime: '7 min read',
    imageSource: 'https://stephen-1973.github.io/staticImages/optimize-site/optimize-webpage.webp',
    id: 'cf428a291681465587b8fc59f8cbb571',
    title: 'Increase your website performance with latest web development techniques',
    "website_url": 'https://stephen-1973.github.io/read/optimization/index.html',
    pageDescription: "Let's learn how to optimize sites built on top of plain HTML and Vanilla Javascript to applications built on advanced frameworks like React like NextJS and Gatsby.",
    time: { seconds: 1644838329, nanoseconds: 959000000 },
    status: 'Publish'
  }
]
  return res.send({
    data: data
  })
}
