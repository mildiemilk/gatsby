const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:mildiemilk/gatsby.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)