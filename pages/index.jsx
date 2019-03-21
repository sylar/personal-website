import React from 'react'
// import {graphql} from 'react-apollo'
// import {
//   Header,
//   Layout,
//   LinkList,
//   Logo,
//   Paragraph,
//   HR,
//   Heading
// } from '../components'
// import {homepageQuery, cvQuery} from '../lib/gql'

// const Homepage = ({data}) => {
//   const {loading} = data

//   if (loading) {
//     return null
//   }

//   const {urlsBlock, logo, description, title} = data.homepage

//   const urls = urlsBlock.concat({
//     name: 'Resume',
//     url: '/cv',
//     prefetch: true,
//     apolloQuery: cvQuery
//   })

//   return (
//     <Fragment>
//       <Header
//         customCss={{
//           textAlign: 'center',
//           '@media (max-width: 480px)': {
//             marginTop: '4.5rem'
//           }
//         }}
//       >
//         <Logo
//           src={logo}
//           customCss={{
//             width: '6rem',
//             margin: '1.5rem auto',
//             marginTop: 0,
//             height: '6rem'
//           }}
//         />
//         <Heading
//           md={title}
//           customCss={{
//             fontWeight: 300,
//             margin: 0
//           }}
//         />
//       </Header>
//       <Layout
//         customCss={{
//           maxWidth: '25rem',
//           margin: '0 auto',
//           display: 'flex',
//           flexDirection: 'column',
//           padding: '1.5rem',
//           borderRadius: '10px',
//           '@media (max-width: 480px)': {
//             boxShadow: 'none',
//             borderRadius: 0,
//             margin: '1.5rem',
//             padding: 0
//           }
//         }}
//       >
//         <Paragraph
//           md={description}
//           customCss={{
//             fontWeight: 300,
//             letterSpacing: '1px',
//             fontSize: '20px',
//             margin: '1.5rem 0'
//           }}
//         />
//         <HR customCss={{borderColor: 'rgba(0,0,0,0.15)'}} />
//         <LinkList links={urls} />
//       </Layout>
//     </Fragment>
//   )
// }

// Homepage.displayName = 'Homepage'

// export default graphql(homepageQuery)(Homepage)
const HomePage = () => <h1> Future Homepage </h1>
HomePage.displayName = 'HomePage'

export default HomePage
