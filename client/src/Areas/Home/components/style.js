import styled, {css} from "styled-components";
import { Colors } from "../../../shared/styles/colors";

export const ModalBackground = styled.div`
    top: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    cursor: default;
    background: rgba(255,255,255, .1);
    transition: .3s ease;
    z-index: 999;

    ~ * {
        transition: filter .3s;
        filter: blur(6px);
    }
`;

export const ModalContainer = styled.div`
    max-width: 650px;    
    background: ${Colors.modalBg};
    border-radius: 15px;
    width: 100%;
    position: relative;
    padding: 2rem;
    max-height: 80vh;
    overflow-y: auto;
    cursor: default;
    color: ${Colors.simpleText};
    margin-right: .5rem;
    margin-left: .5rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    scrollbar-width: thin;
    scrollbar-color: ${Colors.scrollbarBg} ${Colors.scrollbar};

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${Colors.scrollbarBg};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${Colors.scrollbar};
        border-radius: 10px;
    }

    @media (max-width: 350px) {
        padding: 20px;
    }

    @media (max-width: 500px) {
        max-height: 95vh;
        border-radius: 0px;
    }
`;

export const ModalCloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    color: ${Colors.defaultText};
    font-size: 40px;

    ${({pc}) => pc && css`
        @media (max-width: 350px) {display: none; opacity: 0;}
    `}
    ${({mobile}) => mobile && css`
        display: none;
        opacity: 0;
        font-size: 15px;
        top: 20px;
        right: 20px;

        @media (max-width: 350px) {display: block; opacity: 1}
    `}
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
`;

export const ModalHeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 10px;

    @media (max-width: 350px) {
        padding: 10px 0;
    }

    span{
        opacity: .8;
        font-size: 30px;
        color: ${Colors.modalTitle};

        @media (max-width: 350px) {
            font-size: 25px;
            text-align: center;
        }
    }
`;

export const ModalHeaderDesc = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1.5rem;

    span {
        opacity: .6;
        font-size: 14px;
    }
`;

export const ModalContent = styled.div`
    padding: 0 1.5rem;

    @media (max-width: 350px) {
        padding: 0;
    }
`;


export const Controls = styled.div`
    display: flex;
    gap: 10px;
    padding: 1.5rem;
    justify-content: center;

    @media (max-width: 350px) {
        padding: 1.5rem 0;
    }
`;

export const ControlButton = styled.div`
    border-radius: 5px;
    padding: 10px 40px;
    border: 1px solid ${Colors.nextBtnNotReady};
    color: ${Colors.nextBtnNotReady};
    font: normal 300 15px/18px Roboto;
    text-align: center;
    width: 50%;
    cursor: default;

    ${({ready, finish}) => ready && css`
        cursor: pointer;
        border: none;
        background: ${finish ? Colors.good : Colors.nextBtnBG};
        color: ${finish ? Colors.submitText : "#dcdfe3"};
        font-weight: 500;
        :hover { background: ${({finish}) => finish ? Colors.goodHover : Colors.nextBtnBGHover}; }
    `}

    ${({recover}) => recover && css`
        max-width: 100% !important;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover { background: ${Colors.nextBtnBGHover}; }
    `};
`;


export const ModalColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
`;

export const ColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px 0;
    
    >* {
        width: 100%;
    }
`;

export const ModalTitle = styled.div`
    font: normal 500 16px/17px Roboto;
    padding: 5px 0;
`;

export const ModalText = styled.div`
    font: normal 300 14px/15px Roboto;

    span { font-weight: 500; }
`;

export const CMContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
`;

export const CMRow_Add = styled.div`
    margin: auto;
    width: ${(props) => {
        if(props.longer) return "100%"
        else return "50%";
    }};
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: ${props => props.center ? "center" : ""};
`;

export const DefaultLabel = styled.label`
    position: relative;
    width: 100%;
    line-height: 1;
    color: ${Colors.defaultInputText};

    div {
        display: block;
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        transition: all .1s;
        cursor: text;
    }
`;

// INPUT[TYPE=TEXT] <- required
export const DefaultInput = styled.input`
    position: relative;
    display: flex;
    line-height: 1rem;  
    width: 100%;
    background: ${Colors.defaultInputBg};
    border-radius: ${({edgy}) => edgy ? '5px' : '12px'};
    padding: 25px 10px 10px 15px;
    font-size: 16px;
    border: none;
    appearance: textfield;
    color: ${Colors.defaultInputText};
    
    :focus,
    :valid {
        ~div {
            top: 12.5px;
            left: 14px;
            font-size: 11px;
            font-weight: bold;
            color: ${Colors.simpleText};
        }
    }
`;

export const OptionalInput = styled.input`
    position: relative;
    display: flex;
    line-height: 1rem;  
    width: 100%;
    background: ${Colors.defaultInputBg};
    border-radius: ${({edgy}) => edgy ? '5px' : '12px'};
    padding: 25px 10px 10px 15px;
    font-size: 16px;
    border: none;
    appearance: textfield;
    color: ${Colors.defaultInputText};

    ~div {
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            font-size: 12px;
            position: relative;
            top: 1px;
        }
    }

    :focus,
    :not(:placeholder-shown) {
        ~div {
            top: 12.5px;
            left: 14px;
            font-size: 11px;
            font-weight: bold;
            color: ${Colors.simpleText};

            span {
                top: auto;
            }
        }
    }
`;

export const DefaultTextArea = styled.textarea`
    position: relative;
    display: flex;
    line-height: 1rem;  
    width: 100%;
    background: ${Colors.defaultInputBg};
    border-radius: ${({edgy}) => edgy ? '5px' : '12px'};
    padding: 25px 10px 10px 15px;
    font-size: 16px;
    border: none;
    appearance: textfield;
    color: ${Colors.defaultInputText};
    
    :focus,
    :valid {
        ~div {
            top: 12.5px;
            left: 14px;
            font-size: 11px;
            font-weight: bold;
            color: ${Colors.simpleText};
        }
    }
`;

export const DefaultSelect = styled.select`
	position: relative;
	display: flex;
	line-height: 1rem;
	width: 100%;
    background: ${Colors.defaultInputBg};
	border-radius: ${({edgy}) => edgy ? '5px' : '12px'};
    padding: 25px 10px 10px 10px;
	font-size: 16px;
	border: medium none;
    appearance: none;
    color: ${Colors.defaultInputText};

    :focus ~ div, :valid ~ div {
        top: 12.5px;
        left: 14px;
        font-size: 11px;
        font-weight: bold;
        color: ${Colors.simpleText};
    }
`;

export const InputField = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    color: ${Colors.simpleText};

    :not(:nth-last-child(1)) {
        margin-bottom: 60px;
    };
    
    ${({nobotmarg}) => nobotmarg && css`
        margin-bottom: 0 !important;
    `}

    ${({stop}) => stop && css` margin-bottom: 0 !important;`}
    ${({gap}) => gap && css`gap: ${gap}px;`};
    a {
        color: #000;
    };

    .arrow.down {
        color: ${Colors.defaultText};
    }

    .country-list {
        background: ${Colors.simpleBg} !important;
        border: 1px solid ${Colors.simpleBg} !important;
    }

    input[type=tel] {
        border: 1px solid ${p => p.theme.classyInputBorder};
        background: ${p => p.theme.classyInputBg};
        color: ${p => p.theme.classyInputText};
        padding-left: 60px !important;
    }
`;


export const ErrorTooltip = styled.div`
    position: absolute;
    top: -100%;
    background: ${Colors.loginTooltip};
    color: ${Colors.loginTooltipText};
    padding: 10px 30px;
    border-radius: 5px;
    z-index: 2;
`;

export const ErrorTooltipTail = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background: ${Colors.loginTooltip};
    z-index: 3;
`;