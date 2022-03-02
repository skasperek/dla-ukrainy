import React, {useState, useRef} from "react";
import { FaTimes } from "react-icons/fa";
import {
    ModalBackground, ModalCloseButton, ModalHeader, ModalHeaderTitle,
    ModalHeaderDesc,
    ModalContent,
    ModalContainer,
    Controls,
    ControlButton,
    ModalColumn,
    ColumnCenter, ErrorTooltip, ErrorTooltipTail,
    ModalTitle, DefaultInput,
    ModalText, CMContent, CMRow_Add, DefaultLabel, OptionalInput, DefaultSelect, DefaultTextArea, InputField
} from "./style";
import useForm from "../../../shared/forms/useForm";
import ReactAutocomplete from 'react-autocomplete';
import IntlTelInput from 'react-intl-tel-input';
import Calendar, { MonthView, YearView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import phone from "./phone.css";
import axios from "axios"

const EventForm = (props) => {
    if (!props.isVisible){
        return null;
    }

    const phoneVal = useRef(null);
    const [focus, setFocus] = useState(false);
    const [date, setDate] = useState(new Date());
    const [suggestion, setSuggestion] = useState([])
    const stateSchema = {
        firstName: { value: props.firstName ? props.firstName : null, error: "" },
        lastName: { value: props.lastName ? props.lastName : null, error: "" },
        details: { value: null, error: ""},
        resource: { value: null, error: ""},
        type: { value: null, error: ""},
        address: { value: null, error: "" },
        phone: { value: null, error: ""},
        secondPhone: { value: null, error: "" },
    };

    const stateValidatorSchema = {
        type: { required: { isRequired: true, error: "type" }},
        phone: { required: { isRequired: true, error: "type" }},
    };

    const onSubmitForm = (state) => {
        

        console.log(state)
    }

    const onSuggestionChange = async (e) => {
        const value = e.target.value;

        if (value.length >= 4){
            await axios.get(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=1`)
                .then((res) => {
                    const response = res.data[0];

                    setSuggestion({
                        name: response.display_name,
                        lon: response.lon,
                        lat: response.lat,
                    })
                })
        }
    }

    const onChangeDate = date => {
        setDate(date);
        setFocus(false);
    }

    const {
        values, errors, dirty, setFieldValue, 
        handleOnChange, handleOnSubmit
    } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

    const {type, phone, secondPhone, address} = values;
    return (
        <ModalBackground>
            <ModalContainer>
                <ModalCloseButton pc onClick={props.onClose}><FaTimes/> </ModalCloseButton>
                <ModalHeader>
                    <ModalCloseButton pc onClick={props.onClose}><FaTimes/> </ModalCloseButton>
                    <ModalHeaderTitle>
                        <span>{props.title}</span>
                    </ModalHeaderTitle>
                    <ModalHeaderDesc>
                        <span>{props.description}</span>
                    </ModalHeaderDesc>
                </ModalHeader>
                <ModalContent>
                    <CMContent>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultSelect name="type" id="type" onChange={handleOnChange} >
                                    <option value={0}>Zbiórka</option>
                                    <option value={1}>Nocleg</option>
                                    <option value={2}>Transport</option>
                                    <option value={3}>Praca</option>
                                    <option value={4}>Osoba potrzebujący pomocy</option>
                                </DefaultSelect>
                                <div>Rodzaj oferowanej/potrzebnej pomocy</div>
                            </DefaultLabel>
                            {errors.type && dirty.type && (
                                <ErrorTooltip>{errors.type} <ErrorTooltipTail /></ErrorTooltip>
                            )}
                        </CMRow_Add>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultInput value={phone} required name="phone" onChange={(e) => handleOnChange(e)}/>
                                <div>Numer telefonu</div>
                            </DefaultLabel>
                            {errors.phone && dirty.phone && (
                                <ErrorTooltip>{errors.phone} <ErrorTooltipTail /></ErrorTooltip>
                            )}
                        </CMRow_Add>
                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultInput value={secondPhone} required name="secondPhone" onChange={(e) => handleOnChange(e)}/>
                                <div>Awaryjny numer telefonu</div>
                            </DefaultLabel>
                        </CMRow_Add>

                        <CMRow_Add longer>
                            <DefaultLabel>
                                <DefaultInput type="text" value={address} name="address" required onChange={onSuggestionChange}/>
                                <div>Adres</div>
                            </DefaultLabel>
                        </CMRow_Add>

                        {type > 0 && 
                            <CMRow_Add longer>
                                <DefaultLabel>
                                    <DefaultSelect name="count" id="count" onChange={handleOnChange} >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>Do uzgodnienia</option>
                                    </DefaultSelect>
                                    <div>Ile osób?</div>
                                </DefaultLabel>
                            </CMRow_Add>
                        }
                        {type > 0 && type < 3 &&
                            <CMRow_Add longer>
                                <DefaultLabel>
                                    <DefaultInput value={phone} name="phone" onChange={(e) => handleOnChange(e)}/>
                                    <div>Koszt</div>
                                </DefaultLabel>
                            </CMRow_Add>
                        }
                        
                        {type > 0 && type < 4 && type != 2 && type != 3 &&
                            <>
                                <CMRow_Add longer>
                                    <DefaultLabel>
                                        <DefaultSelect name="resource" id="resource" onChange={handleOnChange} >
                                            <option value="Dom">Dom</option>
                                            <option value="Pokój">Pokój</option>
                                            <option value="Łózko">Łózko</option>
                                        </DefaultSelect>
                                        <div>Zasób</div>
                                    </DefaultLabel>
                                </CMRow_Add>
                            </>
                        }
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
                                <div>Opis działań / Oferty / Uwagi</div>
                            </DefaultLabel>
                        </CMRow_Add>

                        {type < 4 && 
                            <CMRow_Add longer>
                                <DefaultLabel onFocus={() => setFocus(true)}>
                                    <DefaultInput value={`${date.getDate() < 10 ? "0" : ''}${date.getDate()}/${date.getMonth() < 10 ? "0" : ''}${date.getMonth()}/${date.getFullYear()}`} placeholder="" maxLength="8" required name="lastReview" onChange={(e) => handleOnChange(e)}/>
                                    <div>Od kiedy?</div>
                                </DefaultLabel>
                                {
                                    focus && 
                                    <>
                                        <Calendar onChange={onChangeDate} value={date} className="calendarCarReview" />
                                    </>
                                }
                            </CMRow_Add>
                        }

                        {type < 2 &&
                            <CMRow_Add longer>
                                <DefaultLabel onFocus={() => setFocus(true)}>
                                    <DefaultInput value={`${date.getDate() < 10 ? "0" : ''}${date.getDate()}/${date.getMonth() < 10 ? "0" : ''}${date.getMonth()}/${date.getFullYear()}`} placeholder="" maxLength="8" required name="lastReview" onChange={(e) => handleOnChange(e)}/>
                                    <div>Planowane zakończenie</div>
                                </DefaultLabel>
                                {
                                    focus && 
                                    <>
                                        <Calendar onChange={onChangeDate} value={date} className="calendarCarReview" />
                                    </>
                                }
                            </CMRow_Add>
                        }
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