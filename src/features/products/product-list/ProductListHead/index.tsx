import styled from "styled-components"
import { ListTitle } from "./ListTitle"
import { ExpandContentLink } from "./ExpandContentLink"

const StyledHead = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`



export function ProductListHead(props: {title: string, link: string}) {

  return (
    <StyledHead>
      <ListTitle>{props.title}</ListTitle>
      <ExpandContentLink link={props.link}/>
    </StyledHead>
  )
}