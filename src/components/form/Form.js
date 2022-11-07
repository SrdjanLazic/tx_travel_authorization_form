import React from 'react';
import './Form.scss'
import PersonIcon from '@mui/icons-material/Person';

function Form(props) {
    return (
        <div className={"form-wrapper"}>
            <div className={"title"}>
                <h1>Travel Form</h1>
            </div>
            <form>

                <div className={"personal-info"}>

                    <h2>Personal Information</h2>

                    <div className={"personal-info-form"}>
                        <div className={"flex-left"}>
                            <div className={"name-surname-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input placeholder={"Marko Marković"} type={"text"}/>
                            </div>
                            <div className={"department-input"}>
                                <label>Department / Odeljenje</label>
                                <input placeholder={"Homegate"} type={"text"}/>
                            </div>
                        </div>
                        <div className={"flex-right"}>
                            <div className={"passport-input"}>
                                <label>Passport No. / Broj pasoša</label>
                                <input placeholder={"123456"} type={"text"}/>
                            </div>
                            <div className={"id-input"}>
                                <label>ID No. / Broj lične karte</label>
                                <input placeholder={"For trips within Serbia"} type={"text"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"trip-details"}>

                    <h2>Trip Details</h2>


                    <div className={"trip-details-form"}>
                        <div className={"meals-input"}>
                            <label>Number of meals provided during business trip / Broj obroka obezbeđenih tokom
                                trajanja
                                službenog putovanja
                            </label>
                            <div className={"meals-input-div"}>
                                <div><label>Breakfast</label>
                                    <input type={"number"}/></div>
                                <div><label>Lunch</label>
                                    <input type={"number"}/></div>
                                <div><label>Dinner</label>
                                    <input type={"number"}/></div>
                            </div>
                            <div className={"purpose-input"}>
                                <label>Purpose of Travel / Namena službenog putovanja</label>
                                <textarea rows={8} cols={50} placeholder={"Attending leadership Workshop and APIForce conference"}></textarea>
                            </div>
                        </div>

                        <div className={"flex-left"}>
                            <div className={"submission-date-input"}>
                                <label>Submission date / Datum podnošenja</label>
                                <input type={"date"}/>
                            </div>
                            <div className={"departure-time-input"}>
                                <label>Departure time / Vreme polaska</label>
                                <input type={"time"}/>
                            </div>
                            <div className={"end-date-input"}>
                                <label>Business trip end date / Datum završetka sl. puta</label>
                                <input type={"date"}/>
                            </div>
                            <div className={"end-time-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input type={"time"}/>
                            </div>
                            <div className={"arrival-date-input"}>
                                <label>Arrival date / Datum povratka</label>
                                <input type={"date"}/>
                            </div>

                        </div>
                        <div className={"flex-right"}>
                            <div className={"accomodation-select"}>
                                <label>Type of accomodation / Vrsta smeštaja</label>
                                <select>
                                    <option>Hotel</option>
                                    <option>Private Accomodation</option>
                                </select>
                            </div>
                            <div className={"transport-input"}>
                                <label>Type of transport / Način transporta</label>
                                <select>
                                    <option>Car</option>
                                    <option>Plane</option>
                                </select>
                            </div>
                            <div className={"vehicle-number"}>
                                <label>Vehicle registration number / Reg. broj vozila</label>
                                <input placeholder={"For trips within Serbia"} type={"text"}/>
                            </div>
                            <div className={"country-place-input"}>
                                <label>Country and place / Zemlja i mesto</label>
                                <input placeholder={"Switzerland, Zürich"} type={"text"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;