import React from 'react'

import Styled from 'styled-components'

const StyledCom = () => {

    const MyDiv = Styled.div`color: red; font-size: 40px;`;

    return (
        <MyDiv>Styled-compo</MyDiv>
    )
}

export default StyledCom;