import React from 'react'
import '../styles/widgetList.style.client.css'
import {CREATE_WIDGET} from "../constants";

const WidgetList = ({widgets,createWidget, previewSelect}) =>

    <div>
        <div className={"row"}>
            <label className={"col-10"}></label>

            <label className={"form-label col-1 px-1"}>Preview</label>

            <label className="switch col-1" htmlFor="checkbox">
                <input type="checkbox"
                       id="checkbox"
                       onChange={previewSelect}/>
                <div className="slider round"></div>
            </label>
        </div>


        <div className={"row"}>
            <label className={"col-11"}></label>
            <div className="d-flex float-right my-auto col-1">
                <button
                    onClick={createWidget}
                    className="btn btn-danger rounded-circle ">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </div>

export default WidgetList