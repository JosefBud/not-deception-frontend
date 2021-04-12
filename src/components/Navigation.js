/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li 
          css={{
            padding: 32,
            backgroundColor: 'hotpink',
            fontSize: 24,
            borderRadius: 4
          }}
        >
          <Link 
            css={css`
              color: red;
            `}
            to="/"
          >Home</Link>
        </li>
        <li>
          <Link to="/vault">The Vault</Link>
        </li>
      </ul>     
    </nav>
  )
}

export default Navigation;