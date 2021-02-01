import styled from 'styled-components';

export const List = styled.ul`
 width: 100%;
 max-width: 1000px;
 margin-top: 100px;
 margin-bottom: 150px;
 margin-left: auto;
 margin-right: auto;
 display: flex;
 justify-content: center;
 flex-direction: column;
 background-color: #ffffff;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    background-color: #b6ced8;

`;

export const Item = styled.li`
  display: flex;
  justify-content: center;

    &:nth-of-type(even) {
        background: #f9f9fc;
    }
`;


interface ItemProps {
    width: number;
}
export const ItemCell = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${({width}) => `${width}px`};
    height: 40px;
    padding: 0 15px;

    white-space: nowrap; 
    overflow: hidden;  
    text-overflow: ellipsis;
 
`;

export const TextCell = styled.div`
    white-space: nowrap; 
    overflow: hidden;  
    text-overflow: ellipsis;
`;

interface BtnProps {
    color: string;
}

export const BtnAction = styled.button.attrs<BtnProps>(() => ({
    type: 'button',
  }))`
    background-color: ${({color}) => color};
    border: none;
    padding: 0px 10px;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 700;
    transition: 250ms;
    user-select: none;
    align-items: center;
    display: inline-flex;
    font-size: 0.8em;
    opacity: 0.8;
    border-radius: 3px;
    height: 60%;
  
    &:hover {
      opacity: 1;
    }

  `;
