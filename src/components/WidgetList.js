import React from 'react'
import '../styles/widgetList.style.client.css'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";

const WidgetList = ({widgets, createWidget, previewSelect}) =>

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

        <ul className={"noBulletsForList"}>
            {widgets.map((widget) => (
                <li key = {widget.id}>{
                    ((widget.type === "HEADING" && <HeadingWidget/>)
                        || (widget.type === "PARAGRAPH" && <ParagraphWidget/>)
                        || (widget.type === "LIST" && <ListWidget/>)
                        || (widget.type === "LINK" && <LinkWidget/>)
                        || (widget.type === "IMAGE" && <ImageWidget/>)
                    )
                }</li>
            ))}
        </ul>


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
        <br />
        <br />
    </div>

export default WidgetList