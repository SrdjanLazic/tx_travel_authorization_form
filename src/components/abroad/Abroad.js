import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './Abroad.scss'


let numOfDays = 0;
let totalBreakfast = 0;
let totalLunch = 0;
let totalDinner = 0;
let totalMeals = 0;
let fullAllowance = 0;
let additionalNum = 1;
let additionalCHF = 1;


function daysBetween(d1, d2){
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let diff = date2.getTime() - date1.getTime();

    return diff / (1000 * 3600 * 24);
}



function Abroad(props) {
    const form = useSelector(state => state.form.value)

    numOfDays = daysBetween(form.depDate, form.arrivalDate);
    totalBreakfast = form.breakfast * -15;
    totalLunch = form.lunch * -20;
    totalDinner = form.dinner * -20;
    totalMeals = totalBreakfast + totalLunch + totalDinner;
    fullAllowance = (numOfDays - 1) * 85;
    const [allowanceFirst, setAllowanceFirst] = useState(42);
    const [allowanceLast, setAllowanceLast] = useState(85);
    const [additionalTotalCHF, setAdditionalTotalCHF] = useState(0);
    const [fxRate, setFxRate] = useState(0)

    const calculateFirst = (event) => {
        let num = parseInt(event.target.textContent)
        setAllowanceFirst(num * 42);
    };

    const calculateLast = (event) => {
        let num = parseInt(event.target.textContent)
        setAllowanceLast(num * 85);
    };

    const setAdditionalNum = (event) => {
        additionalNum = parseInt(event.target.textContent)
        setAdditionalTotalCHF(additionalNum * additionalCHF);
    }

    const setAdditionalCHF = (event) => {
        additionalCHF = parseInt(event.target.textContent)
        setAdditionalTotalCHF(additionalNum * additionalCHF);
    }

    const updateFxRate = (event) => {
        setFxRate(event.target.value)
        console.log(fxRate)
    }



    return (
        <div className="form-wrapper abroad-form">
            <form>
                <div className="title">
                    <img className="tx-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_tx_group.png/1920px-Logo_tx_group.png" alt=""/>
                </div>
                <div className="section-bg first-section">
                    <div className="flex-left">
                        <div className="employee">
                            <h3>Employee / Zaposleni</h3>
                            <div className={"custom-input"}>
                                <label>Name and surname / Ime i prezime</label>
                                <input disabled={true} value={form.name} placeholder={"Marko Markovi??"} type={"text"}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Department / Odeljenje</label>
                                <input disabled={true} value={form.department} placeholder={"Homegate"} type={"text"}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Passport No. / Broj paso??a</label>
                                <input disabled={true} value={form.passport} type={"text"}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>ID No. / Broj li??ne karte</label>
                                <input disabled={true} value={form.id} placeholder={"For trips within Serbia"} type={"text"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-right">
                        <h3>Submission Date / Datum podno??enja:</h3>
                        <div className="custom-input">
                            <label>Submission date / Datum podno??enja</label>
                            <input required={true} type={"date"} value={form.submissionDate} disabled={true}/>
                        </div>
                        <div className="custom-input">
                            <label>FX rate CHF/RSD</label>
                            <input required={true} type={"number"} onChange={updateFxRate}/>
                        </div>
                    </div>
                </div>
                <div className="section-bg second-section">
                    <div className="flex-left">
                        <div className="destination">
                            <h3>Destination / Odredi??te</h3>
                            <div className={"custom-input"}>
                                <label>Country and place</label>
                                <input type={"text"} value={form.countryPlace} disabled={true}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Departure date / Datum polaska</label>
                                <input required={true} type={"date"}  value={form.depDate}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Business trip end time / Vreme zavr??etka sl. puta</label>
                                <input required={true} type={"date"}  value={form.endDate}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Arrival date / Datum povratka</label>
                                <input required={true} type={"date"} value={form.arrivalDate}/>
                            </div>
                            <div className="custom-input">
                                <label>Number of Days / Broj dana</label>
                                <input type="number" value={numOfDays}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Type of accomodation / Vrsta sme??taja</label>
                                <select required={true} value={form.accommodationType}>
                                    <option>Hotel</option>
                                    <option>Private Accommodation</option>
                                </select>
                            </div>
                            <div className={"custom-input custom-select"}>
                                <label>Type of transport / Na??in transporta</label>
                                <select required={true} value={form.transportType}>
                                    <option>Car</option>
                                    <option>Plane</option>
                                </select>
                            </div>
                            <div className={"custom-input"}>
                                <label>Vehicle registration number / Reg. broj vozila</label>
                                <input placeholder={"For trips within Serbia"} type={"text"} value={form.vehicleReg}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-right">
                        <div className="time-inputs">
                            <h3>Time / Vreme</h3>
                            <div className={"custom-input"}>
                                <label>Departure time / Vreme polaska</label>
                                <input required={true} type={"time"}  value={form.depTime}/>
                            </div>
                            <div className={"custom-input"}>
                                <label>Business trip end time / Vreme zavr??etka sl. puta</label>
                                <input required={true} type={"time"}  value={form.endTime}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-bg third-section">
                    <div className="flex-left">
                        <div className="purpose-container">
                            <h3>Purpose of Travel / Namena slu??benog putovanja:</h3>
                            <div className={"custom-input"}>
                                <label>Purpose of Travel / Namena slu??benog putovanja</label>
                                <textarea className="custom-textarea" required={true} rows={8} cols={60} placeholder={"Attending leadership Workshop and APIForce conference"} value={form.purpose}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-right">
                        <div className="cost-center-container">
                            <h3>Charged Cost Center / Alocirati na mesto tro??ka</h3>
                            <div className={"custom-input"}>
                                <label>Charged Cost Center / Alocirati na mesto tro??ka</label>
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
                </div>
                <div className="section-bg fourth-section">
                    <table className="first-table">
                        <tr>
                            <th colSpan="2">Country and place / Zemlja i mesto</th>
                            <th>Daily Allowance / Br. dnevnica</th>
                            <th>Fee / Iznos dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice RSD</th>
                        </tr>
                        <tr>
                            <td rowSpan="3">{form.countryPlace}</td>
                            <td>Full Allowance</td>
                            <td>{numOfDays-1}</td>
                            <td>85</td>
                            <td>{fullAllowance}</td>
                            <td>{fullAllowance * fxRate}</td>
                        </tr>
                        <tr>
                            <td>Allowance 1st day</td>
                            <td contentEditable='true' onInput={calculateFirst}>1</td>
                            <td>42</td>
                            <td>{allowanceFirst}</td>
                            <td>{allowanceFirst * fxRate}</td>
                        </tr>
                        <tr>
                            <td>Allowance last day</td>
                            <td contentEditable='true' onInput={calculateLast}>1</td>
                            <td>85</td>
                            <td>{allowanceLast}</td>
                            <td>{allowanceLast * fxRate}</td>
                        </tr>
                        <tr>
                            <td className="th" colSpan={4}>Total</td>
                            <td>{allowanceFirst + allowanceLast + fullAllowance}</td>
                            <td>{(allowanceFirst + allowanceLast + fullAllowance) * fxRate}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Reduction for meal allowance / Umanjenje za obezbe??en topli obrok</th>
                            <th>Number / Broj</th>
                            <th>Fee / Iznos dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice CHF</th>
                            <th>Total Allowance / Ukupno dnevnice RSD</th>
                        </tr>
                        <tr>
                            <td>Breakfast / Doru??ak</td>
                            <td>{form.breakfast}</td>
                            <td>-15</td>
                            <td>{totalBreakfast}</td>
                            <td>{totalBreakfast * fxRate}</td>
                        </tr>
                        <tr>
                            <td>Lunch / Ru??ak</td>
                            <td>{form.lunch}</td>
                            <td>-20</td>
                            <td>{totalLunch}</td>
                            <td>{totalLunch * fxRate}</td>
                        </tr>
                        <tr>
                            <td>Dinner / Ve??era</td>
                            <td>{form.dinner}</td>
                            <td>-20</td>
                            <td>{totalDinner}</td>
                            <td>{totalDinner * fxRate}</td>
                        </tr>
                        <tr>

                            <td className="th" colSpan={3}>Total</td>
                            <td>{totalMeals}</td>
                            <td>{totalMeals * fxRate}</td>
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
                            <td contentEditable={true}></td>
                            <td contentEditable={true} onInput={setAdditionalNum}>1</td>
                            <td contentEditable={true} onInput={setAdditionalCHF}></td>
                            <td>{additionalTotalCHF}</td>
                            <td>{additionalTotalCHF * fxRate}</td>
                        </tr>
                        <tr>
                            <td colSpan={3} className="th">Total</td>
                            <td>{additionalTotalCHF}</td>
                            <td>{additionalTotalCHF * fxRate}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Prepayment / Primljena akontacija</th>
                            <td>{totalMeals + allowanceFirst + allowanceLast + fullAllowance}</td>
                            <td>{(totalMeals + allowanceFirst + allowanceLast + fullAllowance) * fxRate}</td>
                        </tr>
                    </table>
                </div>
                <div className="section-bg fifth-section">
                    <div className="disclaimer">
                        <p className="disclaimer-text">"I hereby confirm that this travel request complies with the overall requirements of the Swiss immigration law and that the 8 working days allowed by the Swiss Immigration law to perform lucrative activities in the Swiss territory without working VISA have not been exceeded.
                            I also confirm that appropriate documentation supporting the activities of the employee during his/her stay in Switzerland exists and has been provided to the Administrative Assistant in Belgrade for filing in case of authorities??? inspection."
                        </p>
                    </div>
                    <div className="signature">
                        <div className="signature-title-wrapper">
                            <p className="signature-title">
                                Managing Director or Delegate's Signature / Ime i prezime i potpis Direktora ili Ostalog predstavnika
                            </p>
                            <div className="signature-line"></div>
                            <div className="signature-footer">
                                <small>Simon Maurer or Jelena Petrovi?? or Ana Arnaut Vu??enovi??</small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Abroad;