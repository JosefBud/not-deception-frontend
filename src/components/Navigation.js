import styled from '@emotion/styled'
import { Link } from "react-router-dom";

const NavigationItem = styled.li`
  background-color: hotpink;
`

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <li>
          <Link to="/vault">The Vault</Link>
        </li>
      </ul>     
    </nav>
  )
}

export default Navigation;