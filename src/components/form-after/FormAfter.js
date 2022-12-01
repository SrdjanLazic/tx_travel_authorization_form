import React, {useState} from 'react';
import store from "../../app/store";
import { useSelector } from 'react-redux'
import './FormAfter.scss'
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {Button} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';



function FormAfter(props) {

    const form = useSelector(state => state.form.value)
    const [counter, setCounter] =    useState(1);
    const values = []
    console.log(form)

    const handleClick = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
    };

    // TODO: prebaciti sve ovo na store, useDispatch
    const printValues = () => {
        for (let i = 0; i < counter; i++) {
            let type = document.getElementById(`type${i}`).value
            let description = document.getElementById(`description${i}`).value
            let amount = document.getElementById(`amount${i}`).value
            let currency = document.getElementById(`currency${i}`).value
            values.push({
                'type': type,
                'description': description,
                'amount': amount,
                'currency': currency
            })
        }
    };

    return (
        <div className={"form-wrapper"}>
            <form>
                <div className={"title"}>
                    <h1>TEF</h1>
                </div>
                <div className={"submission-date"}>
                    <CalendarMonthIcon fontSize={"large"} className={"header-icon"}/>
                    <h2>Submission Date / Datum podnošenja</h2>
                    <hr className={"divider"}/>
                    <div className={"submission-date-form"}>
                        <input type={"date"} disabled={true} value={form.submissionDate}/>
                    </div>
                </div>
                <div className={"personal-info"}>
                    <PersonIcon className={"header-icon"} fontSize={"large"}/>
                    <h2>Personal Information</h2>
                    <hr className={"divider"}/>

                    <div className={"personal-info-form"}>
                        <div className={"flex-left"}>
                            <div className={"name-surname-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input disabled={true} value={form.name} placeholder={"Marko Marković"} type={"text"}/>
                            </div>
                        </div>
                        <div className={"flex-right"}>
                            <div className={"passport-input"}>
                                <label>Department / Odeljenje</label>
                                <input disabled={true} value={form.department} placeholder={"Homegate"} type={"text"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"date-and-time"}>

                    <CalendarMonthIcon className={"header-icon"} fontSize={"large"}></CalendarMonthIcon>
                    <h2>Date & Time</h2>
                    <hr className={"divider"}/>
                    <div className={"date-and-time-form"}>

                        <div className={"flex-left"}>

                            <div className={"dep-date-input"}>
                                <label>Departure date / Datum polaska</label>
                                <input required={true} type={"date"} disabled={true} value={form.depDate}/>
                            </div>
                            <div className={"departure-time-input"}>
                                <label>Departure time / Vreme polaska</label>
                                <input required={true} type={"time"} disabled={true} value={form.depTime}/>
                            </div>
                        </div>
                        <div className={"flex-right"}>
                            <div className={"end-date-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input required={true} type={"date"} disabled={true} value={form.endDate}/>
                            </div>
                            <div className={"end-time-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input required={true} type={"time"} disabled={true} value={form.endTime}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"trip-details"}>
                    <LocalDiningIcon fontSize={"large"} className={"header-icon"}/>
                    <h2>Meals provided / Obezbeđeni obroci</h2>
                    <hr className={"divider"}/>
                    <div className={"meals-input-div-after"}>
                        <div>
                            <label>Breakfast</label>
                            <input required={true} type={"number"} disabled={true} value={form.breakfast}/>
                        </div>
                        <div>
                            <label>Lunch</label>
                            <input required={true} type={"number"} disabled={true} value={form.lunch}/>
                        </div>
                        <div>
                            <label>Dinner</label>
                            <input required={true} type={"number"} disabled={true} value={form.dinner}/>
                        </div>
                    </div>
                    <div className={"country-place"}>
                        <label>Country and place</label>
                        <input type={"text"} value={form.countryPlace}/>
                    </div>
                </div>
                <div className={"expense-list"}>
                    <PaidIcon className={"header-icon"} fontSize={"large"}/>
                    <h2>Expenses</h2>
                    <hr className={"divider"}/>
                    <div className={"expense-list-form"}>
                        {Array.from(Array(counter)).map((c, index) => {
                            return (
                                <div className={`expense${index}`}>
                                    <div>
                                        <label>Еxpense claim / Refundacija troškova:</label>
                                        <select id={`type${index}`}>
                                            <option value={"accommodation"}>Accommodation costs / Trošak smeštaja</option>
                                            <option value={"transportation"}>Transportation cost / Troškovi prevoza</option>
                                            <option value={"representation"}>Representation cost / Troškovi reprezentacije</option>
                                            <option value={"other"}>Other travel cost / Ostali putni troškovi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Expense description / Opis troška:</label>
                                        <input type={"text"} id={`description${index}`}/>
                                    </div>
                                    <div>
                                        <label>Amount / Iznos</label>
                                        <input id={`amount${index}`} type={"number"}/>
                                    </div>
                                    <div>
                                        <label>Currency / Valuta:</label>
                                        <select id={`currency${index}`}>
                                            <option value={"eur"}>EUR</option>
                                            <option value={"rsd"}>RSD</option>
                                            <option value={"chf"}>CHF</option>
                                        </select>
                                    </div>


                                </div>

                            );
                        })}
                    </div>
                    <button className={"new-expense-btn"} onClick={handleClick}>+ Add</button>
                </div>

            </form>
        </div>
    );
}

export default FormAfter;