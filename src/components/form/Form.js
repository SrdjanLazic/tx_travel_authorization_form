import React, {useState} from 'react';
import {Navigate, RedirectFunction, useNavigate} from 'react-router-dom';
import './Form.scss'
import { useSelector, useDispatch } from 'react-redux'
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {submitForm} from "../../features/form/formSlice";
import Loading from '../loading/Loading'



function Form(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        department: '',
        passport: '',
        id: '',
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        purpose: '',
        accommodationType: 'Hotel',
        transportType: 'Car',
        vehicleReg: '',
        countryPlace: '',
        depTime: '',
        endTime: '',
        arrivalDate: '',
        endDate: '',
        submissionDate: '',
        depDate: '',
        expenses: []
    })
    const [showLoading, setShowLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1)

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }

    function validateForm(){
        let errors = [];

        if(!containsOnlyNumbers(form.passport)) {
            errors.push("Error: Passport field contains unsupported characters.")
        }
        if(!containsOnlyNumbers(form.id)) {
            errors.push("Error: ID field contains unsupported characters.")
        }

        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = validateForm(form);
        if(errors.length > 0){
            for (const error of errors) {
                alert(error);
            }
            return;
        }
        setShowLoading(true);
        setTimeout(() => {
            dispatch(submitForm(form));
            navigate("/form-abroad")
            setShowLoading(false)
        }, 2500)
    }

    function handleClick(pageNum){
        // Changing state
        setPageNumber(pageNum)
    };

    return (
        <div className={"form-wrapper"}>
            {
                showLoading ? <Loading/> : null
            }
            <form onSubmit={handleSubmit}>


                <div className="title">
                    <img className="tx-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_tx_group.png/1920px-Logo_tx_group.png" alt=""/>
                </div>

                <div className={"personal-info"}>

                    <PersonIcon className={"header-icon"} fontSize={"large"}/>
                    <h2>Personal Information</h2>

                    <hr className={"divider"}/>

                    <div className={"personal-info-form"}>
                        <div className={"flex-left"}>
                            <div className={"name-surname-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input required={true} value={form.name} placeholder={"Marko Marković"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        name: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"department-input"}>
                                <label>Department / Odeljenje</label>
                                <input required={true} placeholder={"Homegate"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        department: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>
                        <div className={"flex-right"}>
                            <div className={"passport-input"}>
                                <label>Passport No. / Broj pasoša</label>
                                <input required={true} placeholder={"123456"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        passport: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"id-input"}>
                                <label>ID No. / Broj lične karte</label>
                                <input required={true} placeholder={"For trips within Serbia"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        id: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"trip-details"}>

                    <LuggageIcon fontSize={"large"} className={"header-icon"}/>
                    <h2>Trip Details</h2>
                    <hr className={"divider"}/>

                    <div className={"trip-details-form"}>
                        <div className={"meals-input"}>
                            <label>Number of meals provided during business trip / Broj obroka obezbeđenih tokom
                                trajanja
                                službenog putovanja
                            </label>
                            <div className={"meals-input-div"}>
                                <div>
                                    <label>Breakfast</label>
                                    <input required={true} type={"number"} onChange={e => {
                                        setForm({
                                            ...form,
                                            breakfast: e.target.valueAsNumber
                                        });
                                    }}/>
                                </div>
                                <div>
                                    <label>Lunch</label>
                                    <input required={true} type={"number"} onChange={e => {
                                        setForm({
                                            ...form,
                                            lunch: e.target.valueAsNumber
                                        });
                                    }}/>
                                </div>
                                <div>
                                    <label>Dinner</label>
                                    <input required={true} type={"number"} onChange={e => {
                                        setForm({
                                            ...form,
                                            dinner: e.target.valueAsNumber
                                        });
                                    }}/>
                                </div>
                            </div>
                            <div className={"purpose-input"}>
                                <label>Purpose of Travel / Namena službenog putovanja</label>
                                <textarea required={true} rows={8} cols={50} placeholder={"Attending leadership Workshop and APIForce conference"} onChange={e => {
                                    setForm({
                                        ...form,
                                        purpose: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>

                        <div className={"flex-left"}>


                        </div>
                        <div className={"flex-right"}>
                            <div className={"accomodation-select"}>
                                <label>Type of accomodation / Vrsta smeštaja</label>
                                <select required={true} onChange={e => {
                                    setForm({
                                        ...form,
                                        accommodationType: e.target.value
                                    });
                                }}>
                                    <option>Hotel</option>
                                    <option>Private Accommodation</option>
                                </select>
                            </div>
                            <div className={"transport-input"}>
                                <label>Type of transport / Način transporta</label>
                                <select required={true} onChange={e => {
                                    setForm({
                                        ...form,
                                        transportType: e.target.value
                                    });
                                }}>
                                    <option>Car</option>
                                    <option>Plane</option>
                                </select>
                            </div>
                            <div className={"vehicle-number"}>
                                <label>Vehicle registration number / Reg. broj vozila</label>
                                <input placeholder={"For trips within Serbia"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        vehicleReg: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"country-place-input"}>
                                <label>Country and place / Zemlja i mesto</label>
                                <input required={true} placeholder={"Switzerland, Zürich"} type={"text"} onChange={e => {
                                    setForm({
                                        ...form,
                                        countryPlace: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"date-and-time"}>

                    <CalendarMonthIcon className={"header-icon"} fontSize={"large"}/>
                    <h2>Date & Time</h2>
                    <hr className={"divider"}/>
                    <div className={"date-and-time-form"}>

                        <div className={"flex-left"}>

                            <div className={"dep-date-input"}>
                                <label>Departure date / Datum polaska</label>
                                <input required={true} type={"date"} onChange={e => {
                                    setForm({
                                        ...form,
                                        depDate: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"departure-time-input"}>
                                <label>Departure time / Vreme polaska</label>
                                <input required={true} type={"time"} onChange={e => {
                                    setForm({
                                        ...form,
                                        depTime: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"end-date-input"}>
                                <label>Business trip end date / Datum završetka sl. puta</label>
                                <input required={true} type={"date"} onChange={e => {
                                    setForm({
                                        ...form,
                                        endDate: e.target.value
                                    });
                                }}/>
                            </div>

                        </div>
                        <div className={"flex-right"}>

                            <div className={"end-time-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input required={true} type={"time"} onChange={e => {
                                    setForm({
                                        ...form,
                                        endTime: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"arrival-date-input"}>
                                <label>Arrival date / Datum povratka</label>
                                <input required={true} type={"date"} onChange={e => {
                                    setForm({
                                        ...form,
                                        arrivalDate: e.target.value
                                    });
                                }}/>
                            </div>
                            <div className={"submission-date-input"}>
                                <label>Submission date / Datum podnošenja</label>
                                <input required={true} type={"date"} onChange={e => {
                                    setForm({
                                        ...form,
                                        submissionDate: e.target.value
                                    });
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <input className={"submit-btn"} type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;