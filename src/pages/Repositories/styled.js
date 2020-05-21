import styled from 'styled-components'

export const Container = styled.div`
    background: #000;
    width: 100%;
    max-width: 991px;
    margin: 0 auto;

`

export const Title = styled.h1`
    padding-top: 25px;
    padding-bottom: 0px;

    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    // color: #333;
    background: #000;
    color: #fff;
`

export const List = styled.ul`
    list-style: none;

    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    // padding: 0;

    margin: 0;
    font-family: sans-serif;
    background: gray;

`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`