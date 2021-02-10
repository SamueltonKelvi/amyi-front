import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        margin: 10px 35%;
        text-align: center;
    }
    h4{
        margin: 5px 0px;
    }
    ol{
        margin: 10px 15%auto;
        font-size: 12pt;
        text-align: center;
        
        label{
            margin: 10px;
            font-size: 10pt;
        }
        li{
            text-align: left;
            padding: 10px;            
        }
        #colors{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 20px auto;

            .btns{
                padding: 5px;
                border: none;
                elevation: 5;
                width: 60px;
                height: 60px;
                margin: 10px;

                label{
                    font-size: 10px;
                    position: relative;
                    bottom: -40px;
                }
            }
        }
        #others-colors{
            margin: 30px auto;

            input{
                width: 80%auto;
                margin-top: 10px;
                padding: 10px;
                border: none;
                border-bottom: 1px solid #000;
                text-align: center;
                vertical-align: middle;
            }
        }
    }
    button{
        background-color: #848684;
        padding: 10px;
        border: none;
        color: #FFFFFF;
        font-size: 10pt;
        margin: 10px auto;
    }
`;

// import IconSelect from '../../assets/checkmark.svg';

export default function FormAmyi({ title,questionOne,label }){
    const [value,setValue] = React.useState("");
    const [select,setSelect] = React.useState(false);

    const handleEvent = () => {
        console.log(value);
    }

    return (
        <Container>
            <h2>{title}</h2>
            <h4>Como você sentiu esse perfume?</h4>
            <ol> 
                <li>{questionOne}</li>
                <label>{label}</label>
                <div id="colors">
                    <div>
                        <input id="brown" value={value} type="button" className="btns" style={{ backgroundColor: "#6B5D42" }} />
                        <label for="brown">marrom</label>
                    </div>
                    <div>
                        <input id="red" value={value} type="button" className="btns" style={{ backgroundColor: "#D66163" }} />
                        <label for="red">vermelho</label>
                    </div>
                    <div>
                        <input id="orange" value={value} type="button" className="btns" style={{ backgroundColor: "#FFA652" }} />
                        <label for="orange">laranja</label>
                    </div>
                    <div>
                        <input id="yellow" value={value} type="button" className="btns" style={{ backgroundColor: "#FFF35A" }} />
                        <label for="yellow">amarelo</label>
                    </div>
                    <div>
                        <input id="green" value={value} type="button" className="btns" style={{ backgroundColor: "#94DF8C" }} />
                        <label for="green">verde</label>
                    </div>
                    <div>
                        <input id="blue" value={value} type="button" className="btns" style={{ backgroundColor: "#84BACE" }} />
                        <label for="blue">azul</label>
                    </div>
                    <div>
                        <input id="purple" value={value} type="button" className="btns" style={{ backgroundColor: "#BD8ACE" }} />
                        <label for="purple">roxo</label>
                    </div>
                    <div>
                        <input id="pink" value={value} type="button" className="btns" style={{ backgroundColor: "#FF82AD" }} />
                        <label for="pink">rosa</label>
                    </div>
                    <div>
                        <input id="beige" value={value} type="button" className="btns" style={{ backgroundColor: "#E6D7BD" }} />
                        <label for="beige">bege</label>
                    </div>
                    <div>
                        <input id="grey" value={value} type="button" className="btns" style={{ backgroundColor: "#C5C6C5" }} />
                        <label for="grey">cinza</label>
                    </div>
                    <div>
                        <input id="black" value={value} type="button" className="btns" style={{ backgroundColor: "#000000" }} />
                        <label for="black">preto</label>
                    </div>
                    <div>
                        <input id="white" value={value} type="button" className="btns" style={{ backgroundColor: "#FFFFFF" }} />
                        <label for="white">branco</label>
                    </div>
                </div>
                <div id="others-colors">
                    pensei em uma cor diferente
                    <input placeholder="descrição" type="text"/>
                </div>
            </ol>
            <button>SALVAR PROGRESSO</button>
        </Container>
    )
}