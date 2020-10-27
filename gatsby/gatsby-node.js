import path from 'path'
import fetch from 'isomorphic-fetch'

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

// async function beerPages({ grephql, actions}) {

// }

async function pizzaPages({ graphql, actions }) {

  // 1. template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.tsx')

  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  // 3. loop over each pizza and create its page
  data.pizzas.nodes.forEach(pizza => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      }
    })
  })
}

async function toppingPages({ graphql, actions }) {
  const toppingsTemplate = path.resolve('./src/pages/pizzas.tsx')
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `)
  data.toppings.nodes.forEach(topping => {
    actions.createPage({
      path:`topping/${topping.name}`,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
        toppingRegex: `/${topping.name}/i`
      }
    })
  })

}

async function paginateSlicemasters({ graphql, actions }) {
    // query all slicemasters
    const { data } = await graphql(`
      query {
        masters: allSanityPerson {
          totalCount
          nodes {
            name
            id
            slug {
              current
            }
          }
        }
      }
    `) 

    // TODO turn each slicemaster into their own single page ==> later
    
    // figure out how many pages are needed: n
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
    const totalCount = data.masters.totalCount
    const pageCount = Math.ceil(totalCount / pageSize)
    console.log('==============>>>>', pageCount)
    // loop from 1 to n to create the pages
    Array.from({ length: pageCount }).forEach((_, i) => {
        console.log('cearting page', i)
        actions.createPage({
          path: `slicemasters/${i +1}`,
          component: path.resolve('./src/pages/slicemasters.tsx'),
          context: {
            skip: i * pageSize,
            currentPage: i + 1,
            pageSize, 
            totalCount,
            base: '/slicemasters',
          }
        })
    })

}

export async function createPages(params) {
    // wait for all promises to be resolved
    await Promise.all([
      pizzaPages(params),
      toppingPages(params),
      paginateSlicemasters(params),
    ])
}

// following happen before createPages, since you nees the data to vrate pages
async function fetchBeersToNodes({ actions, createNodeId, createContentDigest }) {
    // 1. fetch list of beers
    const res = await fetch('https://sampleapis.com/beers/api/ale')
    const beers = await res.json()
    
    // 2. loop over each one
    for (const beer of beers) { 
    
        // 3. creat a node for that beer
        const nodeContent = JSON.stringify(beer)
        const nodeMeta = {
            id: createNodeId(`beer-${beer.name}`),
            parent: null,
            children: [],
            internal: {
                type: 'Beer',
                mediaType: 'application/json',
                contentDigest: createContentDigest(beer),
            }
        }
        actions.createNode({
            ...beer,
            ...nodeMeta
        })
    }
    
}

export async function sourceNodes(params) {
  //fetch a list of beers and source the into the gatsby API
  await Promise.all([ 
      fetchBeersToNodes(params)
  ])    
}

