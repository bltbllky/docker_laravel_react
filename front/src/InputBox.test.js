import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import InputBox from './InputBox';

it('Render add component',()=>{
    const{queryByTestId,queryByPlaceholderText} = render(<InputBox/>);

    expect(queryByTestId("add-button")).toBeInTheDocument()
    expect(queryByPlaceholderText("Metin")).toBeInTheDocument()
})

describe("Input value", ()=>{
    it("updates on change",()=>{
        const{queryByPlaceholderText} = render(<InputBox/>)

        const input = queryByPlaceholderText("Metin");
        fireEvent.change(input,{target:{value:"test"}});

        expect(input.value).toBe("test")
    })
})

describe("Add button",()=>{
    describe("Empty string",()=>{
        it("does not",()=>{
            const sendData = jest.fn();

            const{queryByTestId} = render(<InputBox sendData={sendData}/>);
            fireEvent.click(queryByTestId("add-button"))
            expect(sendData).not.toHaveBeenCalled();
        })
    })

    describe("String check",()=>{
        it("triggers add function",()=>{
            const sendData = jest.fn();

            const{queryByTestId,queryByPlaceholderText} = render(<InputBox sendData={sendData}/>);
            const input = queryByPlaceholderText("Metin");
            fireEvent.change(input,{target:{value:"test"}});

            fireEvent.click(queryByTestId("add-button"))
            expect(sendData).toHaveBeenCalled();

        })
    })
})