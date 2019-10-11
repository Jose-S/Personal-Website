// import createIcon from "templates/IconSvg"

const path = require(`path`)
const slash = require(`slash`)
const isProd = process.env.NODE_ENV === "production"
const componentLibPath = path.resolve(__dirname, "./src/components")
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            title
          }
        }
      }
      allWordpressWpProject {
        edges {
          node {
            id
            title
            slug
            acf {
              subtitle
              overview
              challenges
              roles
              timeline
              ui_gif {
                source_url
              }
              process {
                name
                image {
                  source_url
                  alt_text
                }
              }
            }
            blocks {
              blockName
              innerHTML
              attrs {
                process_name
                process_icon
                grid_style
                content_style
                loading_image
                display_image
                title
                caption
                controler
              }
            }
          }
        }
      }

      allWordpressWpMedia(filter: { localFile: { extension: { eq: "svg" } } }) {
        edges {
          node {
            title
            alt_text
            acf {
              stroke_one
              stroke_two
              stroke_three
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressWpProject,
    allWordpressWpMedia,
  } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.title === "Work" ? "/" : `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve(`./src/templates/project.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressWpProject.edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node.slug}`,
      component: slash(postTemplate),
      context: edge.node,
    })
  })
}

// gatsby-node.js in root folder.
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.jsx?$/,
//           // loader: "stylelint-custom-processor-loader",
//           // exclude: /node_modules/,
//           test: /\.scss$module/,
//           use: [
//             "style-loader",
//             "css-loader",
//             "sass-loader, stylelint-custom-processor-loader",
//           ],
//         },
//       ],
//     },
//   })
// }

// exports.onCreateWebpackConfig = (
//   { actions, loaders, stage },
//   { cssLoaderOptions = {}, postCssPlugins, ...sassOptions }
// ) => {
//   const isSSR = stage.includes(`html`)

//   const use = [
//     loaders.css({ ...cssLoaderOptions, modules: true }),
//     loaders.postcss({ plugins: postCssPlugins }),
//     {
//       loader: require.resolve("sass-loader"),
//       options: {
//         sourceMap: !isProd,
//         ...sassOptions,
//       },
//     },
//     // {
//     //   loader: "sass-resources-loader",
//     //   options: {
//     //     resources: [
//     //       path.resolve(
//     //         __dirname,
//     //         "./component-library/assets/stylesheets/_variables.scss"
//     //       ),
//     //       path.resolve(
//     //         __dirname,
//     //         "./component-library/assets/stylesheets/_mixins.scss"
//     //       ),
//     //     ],
//     //   },
//     // },
//   ]

//   if (!isSSR) use.unshift(loaders.miniCssExtract())

//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.s(a|c)ss$module/,
//           use,
//           exclude: /node_modules\/(?!react-component-library)/,
//         },
//         {
//           test: /\.css$/,
//           use: [
//             "to-string-loader",
//             "style-loader",
//             "css-loader",
//             "postcss-loader",
//           ],
//         },
//       ],
//     },
//     resolve: {
//       alias: {
//         "component-library": `${componentLibPath}`,
//         components: `${componentLibPath}/components`,
//         utils: `${componentLibPath}/utils`,
//         config: `${componentLibPath}/config`,
//       },
//       extensions: [".js", ".jsx"],
//     },
//   })
// }
