import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Recipes from "../components/recipes"

function IndexPage () {
  
  const [searchFor, setSearchFor] = useState("\"sweet and sour\"");
  
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Re-Construction in Progress</h1>
      <p>A new TootiesRecipes.com will be online soon</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
          <label>Search for Recipe: &nbsp;
          <input type="text" value={searchFor} onChange={e => setSearchFor(e.target.value)} />
          </label>
      </div>
      <div>
          <Recipes search={searchFor}/>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
