import React, {useState} from 'react';
import store from '../../../src/app/store'
import PersonIcon from "@mui/icons-material/Person";
import LuggageIcon from "@mui/icons-material/Luggage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function FormResults(props) {

    const state = store.getState();
    const form = state.form.value;

    return (
        <div className={"form-wrapper"}>
            <div className={"title"}>
                <h1>Submited Info</h1>
            </div>
            <form>

                <div className={"personal-info"}>

                    <PersonIcon className={"person-icon"} fontSize={"large"}/>
                    <h2>Personal Information</h2>

                    <hr className={"divider"}/>

                    <div className={"personal-info-form"}>
                        <div className={"flex-left"}>
                            <div className={"name-surname-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input disabled={true} required={true} value={form.name} placeholder={"Marko Marković"} type={"text"}/>
                            </div>
                            <div className={"department-input"}>
                                <label>Department / Odeljenje</label>
                                <input disabled={true} required={true} value={form.department} placeholder={"Homegate"} type={"text"}/>
                            </div>
                        </div>
                        <div className={"flex-right"}>
                            <div className={"passport-input"}>
                                <label>Passport No. / Broj pasoša</label>
                                <input disabled={true} required={true} value={form.passport} placeholder={"123456"} type={"text"}/>
                            </div>
                            <div className={"id-input"}>
                                <label>ID No. / Broj lične karte</label>
                                <input disabled={true} required={true} placeholder={"For trips within Serbia"} type={"text"} value={form.id}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"trip-details"}>

                    <LuggageIcon fontSize={"large"} className={"trip-details-icon"}></LuggageIcon>
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
                            <div className={"purpose-input"}>
                                <label>Purpose of Travel / Namena službenog putovanja</label>
                                <textarea required={true} rows={8} cols={50} placeholder={"Attending leadership Workshop and APIForce conference"} disabled={true} value={form.purpose}></textarea>
                            </div>
                        </div>

                        <div className={"flex-left"}>


                        </div>
                        <div className={"flex-right"}>
                            <div className={"accomodation-select"}>
                                <label>Type of accomodation / Vrsta smeštaja</label>
                                <select required={true} disabled={true} value={form.accommodationType}>
                                    <option>Hotel</option>
                                    <option>Private Accommodation</option>
                                </select>
                            </div>
                            <div className={"transport-input"}>
                                <label>Type of transport / Način transporta</label>
                                <select required={true} disabled={true} value={form.transportType}>
                                    <option>Car</option>
                                    <option>Plane</option>
                                </select>
                            </div>
                            <div className={"vehicle-number"}>
                                <label>Vehicle registration number / Reg. broj vozila</label>
                                <input placeholder={"For trips within Serbia"} type={"text"} disabled={true} value={form.vehicleReg}/>
                            </div>
                            <div className={"country-place-input"}>
                                <label>Country and place / Zemlja i mesto</label>
                                <input required={true} placeholder={"Switzerland, Zürich"} type={"text"} disabled={true} value={form.countryPlace}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"date-and-time"}>

                    <CalendarMonthIcon className={"date-and-time-icon"} fontSize={"large"}></CalendarMonthIcon>
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
                            <div className={"end-date-input"}>
                                <label>Business trip end date / Datum završetka sl. puta</label>
                                <input required={true} type={"date"} disabled={true} value={form.endDate}/>
                            </div>

                        </div>
                        <div className={"flex-right"}>

                            <div className={"end-time-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input required={true} type={"time"} disabled={true} value={form.endTime}/>
                            </div>
                            <div className={"arrival-date-input"}>
                                <label>Arrival date / Datum povratka</label>
                                <input required={true} type={"date"} disabled={true} value={form.arrivalDate}/>
                            </div>
                            <div className={"submission-date-input"}>
                                <label>Submission date / Datum podnošenja</label>
                                <input required={true} type={"date"} disabled={true} value={form.submissionDate}/>
                            </div>
                        </div>
                    </div>
                </div>
                <input className={"submit-btn"} type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormResults;