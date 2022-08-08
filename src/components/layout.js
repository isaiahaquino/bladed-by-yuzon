import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {

} from './layout.module.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query Info {
      allMdx {
        nodes {
          frontmatter {
            title
            tags
          }
          body
        }
      }
    }
  `)

  return (
    <main>
      <header>
        <nav>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='logo'>
          <Link to='/'>Logo Here</Link>
        </div>
        <div>
          socials here
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className='logo'>
          <Link to='/'>Logo Here</Link>
        </div>
        <nav>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        {
          data.allMdx.nodes.forEach(node => {
            if (node.frontmatter.tags === "footer") {
              return (
                <div key={node.frontmatter.title}>
                <h2>{node.frontmatter.title}</h2>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
                </div>
              )
            }

          })
        }

      </footer>
    </main>
  )
}

export default Layout