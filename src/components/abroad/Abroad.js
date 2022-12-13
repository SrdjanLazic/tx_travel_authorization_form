import React from 'react';
import {useSelector} from "react-redux";
import './Abroad.scss'


let numOfDays = 0

function daysBetween(d1, d2){
    let date1 = new Date(d1);
    let date2 = new Date(d2);

    let diff = date2.getTime() - date1.getTime();

    numOfDays = diff / (1000 * 3600 * 24);
    return numOfDays
}

function Abroad(props) {
    const form = useSelector(state => state.form.value)



    return (
        <div className="form-wrapper">
            <form>
                <div className="title">
                    <h1>Title</h1>
                </div>
                <div className="first-section">
                    <div className="flex-left">
                        <div className="employee">
                            <h3>Employee / Zaposleni</h3>
                            <div className={"name-surname-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input disabled={true} value={form.name} placeholder={"Marko Marković"} type={"text"}/>
                            </div>
                            <div className={"department-input"}>
                                <label>Department / Odeljenje</label>
                                <input disabled={true} value={form.department} placeholder={"Homegate"} type={"text"}/>
                            </div>
                            <div className={"passport-input"}>
                                <label>Department / Odeljenje</label>
                                <input disabled={true} value={form.department} placeholder={"Homegate"} type={"text"}/>
                            </div>
                            <div className={"id-input"}>
                                <label>ID No. / Broj lične karte</label>
                                <input required={true} value={form.id} placeholder={"For trips within Serbia"} type={"text"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-right">
                        <h3>Submission Date / Datum podnošenja:</h3>
                        <div className="submission-date-input">
                            <label>Submission date / Datum podnošenja</label>
                            <input required={true} type={"date"} value={form.submissionDate} disabled={true}/>
                        </div>
                        <div className="fx-rate-input">
                            <label>FX rate CHF/RSD</label>
                            <input required={true} type={"number"}/>
                        </div>
                    </div>
                </div>
                <div className="second-section">
                    <div className="flex-left">
                        <div className="destination">
                            <h3>Destination / Odredište</h3>
                            <div className={"country-place"}>
                                <label>Country and place</label>
                                <input type={"text"} value={form.countryPlace} disabled={true}/>
                            </div>
                            <div className={"dep-date-input"}>
                                <label>Departure date / Datum polaska</label>
                                <input required={true} type={"date"}  value={form.depDate}/>
                            </div>
                            <div className={"end-date-input"}>
                                <label>Business trip end time / Vreme završetka sl. puta</label>
                                <input required={true} type={"date"}  value={form.endDate}/>
                            </div>
                            <div className={"arrival-date-input"}>
                                <label>Arrival date / Datum povratka</label>
                                <input required={true} type={"date"} value={form.arrivalDate}/>
                            </div>
                            <div className="number-of-days-input">
                                <label>Number of Days / Broj dana</label>
                                <input type="number" value={daysBetween(form.depDate, form.arrivalDate)}/>
                            </div>
                            <div className={"accomodation-select"}>
                                <label>Type of accomodation / Vrsta smeštaja</label>
                                <select required={true} value={form.accommodationType}>
                                    <option>Hotel</option>
                                    <option>Private Accommodation</option>
                                </select>
                            </div>
                            <div className={"transport-input"}>
                                <label>Type of transport / Način transporta</label>
                                <select required={true} value={form.transportType}>
                                    <option>Car</option>
                                    <option>Plane</option>
                                </select>
                            </div>
                            <div className={"vehicle-number"}>
                                <label>Vehicle registration number / Reg. broj vozila</label>
                                <input placeholder={"For trips within Serbia"} type={"text"} value={form.vehicleReg}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-right">
                        <div className={"departure-time-input"}>
                            <label>Departure time / Vreme polaska</label>
                            <input required={true} type={"time"}  value={form.depTime}/>
                        </div>
                        <div className={"end-time-input"}>
                            <label>Business trip end time / Vreme završetka sl. puta</label>
                            <input required={true} type={"time"}  value={form.endTime}/>
                        </div>
                    </div>
                </div>
                <div className="third-section">
                    <div className="flex-left">
                        <h3>Purpose of Travel / Namena službenog putovanja:</h3>
                        <div className={"purpose-input"}>
                            <label>Purpose of Travel / Namena službenog putovanja</label>
                            <textarea required={true} rows={8} cols={60} placeholder={"Attending leadership Workshop and APIForce conference"} value={form.purpose}/>
                        </div>
                    </div>
                    <div className="flex-right">
                        <h3>Charged Cost Center / Alocirati na mesto troška</h3>
                        <div className={"cc-input"}>
                            <label>Charged Cost Center / Alocirati na mesto troška</label>
                            <select>
                                <option>CC01219</option>
                                <option>CC01310</option>
                                <option>CC01287</option>
                                <option>CC01289</option>
                                <option>CC01311</option>
                                <option>CC01312</option>
                                <option>CC01313</option>
                                <option>CC01314</option>
                                <option>CC01315</option>
                                <option>CC01316</option>
                                <option>CC01317</option>
                                <option>CC01288</option>
                                <option>CC01290</option>
                                <option>CC01318</option>
                                <option>CC01319</option>
                                <option>CC01320</option>
                                <option>CC01321</option>
                                <option>CC01322</option>
                                <option>CC01323</option>
                                <option>CC01324</option>
                                <option>CC01325</option>
                                <option>CC01219</option>
                                <option>CC01310</option>
                                <option>CC01287</option>
                                <option>CC01289</option>
                                <option>CC01311</option>
                                <option>CC01312</option>
                                <option>CC01313</option>
                                <option>CC01314</option>
                                <option>CC01315</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="fourth-section">
                    <table>
                        <tr>
                            <th colSpan="2">Country and place / Zemlja i mesto</th>
                            <th>Daily Allowance / Br. dnevnica</th>
                            <th>Fee / Iznos dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice RSD</th>
                        </tr>
                        <tr>
                            <td rowSpan="3">Switzerland, Zurich</td>
                            <td>Full Allowance</td>
                            <td>5</td>
                            <td>85</td>
                            <td>425</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Allowance 1st day</td>
                            <td>1</td>
                            <td>42</td>
                            <td>42</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Allowance last day</td>
                            <td>1</td>
                            <td>85</td>
                            <td>85</td>
                            <td>0</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Reduction for meal allowance / Umanjenje za obezbeđen topli obrok</th>
                            <th>Number / Broj</th>
                            <th>Fee / Iznos dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice RSD</th>
                        </tr>
                        <tr>
                            <td>Breakfast / Doručak</td>
                            <td>2</td>
                            <td>-15</td>
                            <td>-30</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Breakfast / Doručak</td>
                            <td>2</td>
                            <td>-15</td>
                            <td>-30</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Breakfast / Doručak</td>
                            <td>2</td>
                            <td>-15</td>
                            <td>-30</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className={"hide"}></td>
                            <td className={"hide"}></td>
                            <td>Total</td>
                            <td>-250</td>
                            <td>0</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Additional advance payment / Dodatna isplata akontacije</th>
                            <th>Number / Broj</th>
                            <th>Fee / Iznos dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice RSD</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className={"hide"}></td>
                            <td className={"hide"}></td>
                            <td className={"hide"}></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Prepayment / Primljena akontacija</th>
                            <th>302</th>
                            <th>0</th>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default Abroad;