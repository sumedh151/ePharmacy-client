import React, { Component } from 'react'

const drug_details = [
    {drug: "Drug 30ml Concentrated", dosage_form: "Liquid", manufacturer: "Company", price: "$5.99"},
    {drug: "Drug 30ml Concentrated", dosage_form: "Liquid", manufacturer: "Company", price: "$5.99"},
    {drug: "Drug 30ml Concentrated", dosage_form: "Liquid", manufacturer: "Company", price: "$5.99"},
    {drug: "Drug 30ml Concentrated", dosage_form: "Liquid", manufacturer: "Company", price: "$5.99"},
]

export default class ThirdStep extends Component {
    render() {
        return (
            <div className="container left-9 right-10">
                <span className="drug-action-subtitle">Your Prescription Details:</span>
                <table className="table-bordered-rounded">
                    <tbody>
                        {drug_details.map((details, index) => {
                            return (
                                <tr key={index} className="prescription-row">
                                    <td >
                                        <span className="drug-detail">{details.drug}</span>
                                        <br />
                                        <small>
                                            Dosage Form : {details.dosage_form} <br />
                                            Manufacturer : {details.manufacturer} 
                                        </small>
                                    </td>
                                    <td className="price-cell">
                                        <span className="price">
                                            {details.price}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr className="total-price-row prescription-row">
                            <td>Total </td>
                            <td className="price price-cell">$12.99</td>
                        </tr>
                        <tr className="tax-row prescription-row">
                            <td>Tax</td>
                            <td className="price price-cell">$12.99</td>
                        </tr>
                        <tr className="grand-total-row prescription-row">
                            <td>Grand Total </td>
                            <td className="price price-cell">$12.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
