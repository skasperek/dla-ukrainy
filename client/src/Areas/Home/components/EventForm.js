import React, {useState} from "react";
import { FaTimes } from "react-icons/fa";
import {
    ModalBackground, ModalCloseButton, ModalHeader, ModalHeaderTitle,
    ModalHeaderDesc,
    ModalContent,
    ModalContainer,
    Controls,
    ControlButton,
    ModalColumn,
    ColumnCenter,
    ModalTitle,
    ModalText, CMContent, CMRow_Add, DefaultLabel, OptionalInput, DefaultSelect, DefaultTextArea, DefaultAutocomplete
} from "./style";
import useForm from "../../../shared/forms/useForm";
import ReactAutocomplete from 'react-autocomplete';
import axios from "axios"

const EventForm = ({
    isVisible, onClose,
    title, description
}) => {
    if (!isVisible){
        return null;
    }

    const [suggestion, setSuggestion] = useState("")
    const stateSchema = {
        firstName: { value: null, error: "" },
        lastName: { value: null, error: "" },
        details: { value: null, error: ""},
        address: { value: null, error: "" }
    };

    const stateValidatorSchema = {
       
    };

    const onSubmitForm = (state) => {
        

        console.log(state)
    }

    const onSuggestionChange = (value) => {
        let suggestions = [];
        axios.get(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=3`)
            .then((res) => {
                const response = res.data;

                response.forEach((suggestion) => {
                    suggestions.push({
                        name: suggestion.display_name,
                        lon: suggestion.lon,
                        lat: suggestion.lat,
                    });
                });
            })

        setSuggestion(value)
    }

    const {
        values, errors, dirty, setFieldValue, 
        handleOnChange, handleOnSubmit
    } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalCloseButton pc onClick={onClose}><FaTimes/> </ModalCloseButton>
                <ModalHeader>
                    <ModalCloseButton pc onClick={onClose}><FaTimes/> </ModalCloseButton>
                    <ModalHeaderTitle>
                        <span>{title}adsadasd</span>
                    </ModalHeaderTitle>
                    <ModalHeaderDesc>
                        asdasd
                    </ModalHeaderDesc>
                </ModalHeader>
                <ModalContent>
                    <CMContent>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <OptionalInput name="name"/>
                                <div>Imię i nazwisko</div>
                            </DefaultLabel>
                        </CMRow_Add>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultSelect name="type" id="type" onChange={handleOnChange} >
                                    <option value="" hidden selected>Podaj producenta</option>
                                    <option value={0}>Np. Fiat</option>
                                    <option value={1}>Np. Fiat</option>
                                </DefaultSelect>
                                <div>Imię i nazwisko właściciela</div>
                            </DefaultLabel>
                        </CMRow_Add>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                
                                    <ReactAutocomplete 
                                        className="test"
                                        items={[
                                            { id: 'foo', label: 'foo' },
                                            { id: 'bar', label: 'bar' },
                                            { id: 'baz', label: 'baz' },
                                        ]}
                                        
                                        shouldItemRender={(item, value) => item.label.indexOf(value) > -1}
                                        getItemValue={item => item.label}
                                        renderItem={(item, highlighted) =>
                                        <div
                                            key={item.id}
                                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                        >
                                            {item.label}
                                        </div>
                                        }
                                        value={suggestion}
                                        onChange={(e) => onSuggestionChange(e.target.value)}
                                        onSelect={value => console.log(value)}
                                    />
                                
                                {/* <div>Opis działań / Oferty</div> */}
                            </DefaultLabel>
                        </CMRow_Add>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultTextArea
                                    name="details" 
                                    id="details" 
                                    rows={5} 
                                    style={{resize: "none"}}
                                    onChange={handleOnChange}
                                    value={values.details}>
                                </DefaultTextArea>
                                <div>Opis działań / Oferty</div>
                            </DefaultLabel>
                        </CMRow_Add>
                    </CMContent>
                </ModalContent>
                <Controls>
                    <ControlButton ready={false} onClick={handleOnSubmit}>Dodaj</ControlButton>
                </Controls>
            </ModalContainer>
        </ModalBackground>
    )
}

export default EventForm;