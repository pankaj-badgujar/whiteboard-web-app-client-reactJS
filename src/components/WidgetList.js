import React from 'react'
import '../styles/widgetList.style.client.css'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";

const WidgetList = ({
                        preview, widgets, createWidget, selectWidget, headingSizeChanged, previewSelect, deleteWidget, positionUp, positionDown,
                        paragraphTextChanged, headingTextChanged, listTextChanged, listTypeChanged
                    }) =>

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
                        <br/>
                        <div className="row mx-4">

                            <div className="col-4 ">
                                <h5>{widget.type} WIDGET</h5>
                            </div>
                            <div className="col-2">
                                <label></label>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    {widget !== widgets[0] && <div className="col-1">
                                        <button
                                            type="button"
                                            onClick={() => positionUp(widget)}
                                            className="btn btn-warning">
                                            <i className="fa fa-arrow-circle-up"></i>
                                        </button>
                                    </div>}
                                    <label className="col-1"></label>
                                    {widget !== widgets[widgets.length - 1] && <div className="col-1">
                                        <button
                                            type="button"
                                            onClick={() => positionDown(widget)}
                                            className="btn btn-warning">
                                            <i className="fa fa-arrow-circle-down"></i>
                                        </button>
                                    </div>}
                                    <label className="col-1"></label>
                                    <div className="col-6">
                                        <select
                                            id={"selectWidgetToUpdate"}
                                            onChange={(event) => selectWidget(widget.id, event.target.value)}
                                            className="custom-select"
                                            role="widgetType">
                                            {
                                                widget.type === "HEADING" ?
                                                    <option value="HEADING" selected>Heading</option> :
                                                    <option value="HEADING">Heading</option>
                                            }

                                            {
                                                widget.type === "PARAGRAPH" ?
                                                    <option value="PARAGRAPH" selected>Paragraph</option> :
                                                    <option value="PARAGRAPH">Paragraph</option>
                                            }

                                            {
                                                widget.type === "LIST" ?
                                                    <option value="LIST" selected>List</option> :
                                                    <option value="LIST">List</option>
                                            }

                                            {
                                                widget.type === "IMAGE" ?
                                                    <option value="IMAGE" selected>Image</option> :
                                                    <option value="IMAGE">Image</option>
                                            }
                                            {
                                                widget.type === "LINK" ?
                                                    <option value="LINK" selected>Link</option> :
                                                    <option value="LINK">Link</option>
                                            }


                                        </select>
                                    </div>

                                    <div className="col-1">
                                        <button
                                            onClick={() => deleteWidget(widget.id)}
                                            type="button" className="btn btn-danger">
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {((widget.type === "HEADING" &&
                                <HeadingWidget
                                    classNameForPreview={preview === "on" ? "" : "d-none"}
                                    textEntered={widget.text}
                                    headingTextChanged={headingTextChanged}
                                    widgetId={widget.id}
                                    textSize={widget.size}
                                    sizeSelect={headingSizeChanged}
                                />)

                            || (widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    classNameForPreview={preview === "on" ? "" : "d-none"}
                                    widgetId={widget.id}
                                    paragraphTextChanged={paragraphTextChanged}
                                    textEntered={widget.text}
                                />)

                            || (widget.type === "LIST" &&
                                <ListWidget
                                    classNameForPreview={preview === "on" ? "" : "d-none"}
                                    widgetId={widget.id}
                                    listTextChanged = {listTextChanged}
                                    textEntered={widget.items}
                                    listType={widget.listType}
                                    listTypeChanged={listTypeChanged}
                                />)

                            || (widget.type === "LINK" &&
                                <LinkWidget
                                    classNameForPreview={preview === "on" ? "" : "d-none"}/>)

                            || (widget.type === "IMAGE" &&
                                <ImageWidget
                                    classNameForPreview={preview === "on" ? "" : "d-none"}/>)
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