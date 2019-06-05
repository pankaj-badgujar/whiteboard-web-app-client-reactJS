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
                <li key={widget.id} className={"borderlist"}>{
                    <div>
                        <br />
                        <div className="row mx-4">

                            <div className="col-4 ">
                                <h5>{widget.type} WIDGET</h5>
                            </div>
                            <div className="col-2">
                                <label></label>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-1">
                                        <button type="button" className="btn btn-warning">
                                            <i className="fa fa-arrow-circle-up"></i>
                                        </button>
                                    </div>
                                    <label className="col-1"></label>
                                    <div className="col-1">
                                        <button type="button" className="btn btn-warning">
                                            <i className="fa fa-arrow-circle-down"></i>
                                        </button>
                                    </div>
                                    <label className="col-1"></label>
                                    <div className="col-6">
                                        <select className="custom-select" role="widgetType">
                                            <option value="Heading" selected>Heading</option>
                                            <option value="Paragraph">Paragraph</option>
                                            <option value="List">List</option>
                                            <option value="Image">Image</option>
                                            <option value="Link">Link</option>
                                        </select>
                                    </div>

                                    <div className="col-1">
                                        <button type="button" className="btn btn-danger">
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {((widget.type === "HEADING" && <HeadingWidget/>)
                        || (widget.type === "PARAGRAPH" && <ParagraphWidget/>)
                        || (widget.type === "LIST" && <ListWidget/>)
                        || (widget.type === "LINK" && <LinkWidget/>)
                        || (widget.type === "IMAGE" && <ImageWidget/>)
                        )}
                    </div>
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
        <br/>
        <br/>
    </div>

export default WidgetList