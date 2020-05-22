import styled from 'styled-components'

export const Container = styled.div`
    wight: 100vw;
    height: 100vh;
    // display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;

`

export const Container1 = styled.div`
    background: #000;
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    text-align: center;

`

export const Container2 = styled.div`
    background: gray;
    margin: 0px;
    padding-top: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

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

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    // padding: 0 .85rem;
    border-radius: .50rem 00 .50rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }

    padding: 10px;

    // padding-right: 10px;
    // padding-left: 10px;
    // padding-top: 5px;
    // padding-bottom: 5px;
`

export const Button = styled.button`

    // height: 2rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: .50rem 00 .50rem;

    // list-style: none;

    padding: 15px;
    // margin: 20px;
    // font-family: sans-serif;
    // border-radius: .50rem 00 .50rem;

    margin: 10px;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }

`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`

export const ErrorMsg = styled.span`
    // background-color: #000;
    background-color: #fff;
    // color: #fff;
    // color: red;
    color: #000;
    box-shadow: 1px 1px 20px  0px red;
    text-align: center;
    margin: 1rem auto;
    padding: .9rem;
    border-radius: .50rem 00 .50rem;

    // display: block;
    font-size: 0.65rem;
    font-weight: 600;
`