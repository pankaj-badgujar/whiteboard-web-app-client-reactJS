import React from 'react'
import '../styles/widgetList.style.client.css'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <label className={"col-10"}></label>

                    <label className={"form-label col-1 px-1"}>Preview</label>

                    <label className="switch col-1" htmlFor="checkbox">
                        <input type="checkbox"
                               id="checkbox"
                               onChange={this.props.previewSelect}/>
                        <div className="slider round"></div>
                    </label>
                </div>

                <ul className={"noBulletsForList"}>
                    {this.props.widgets.map((widget) => (
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
                                            {widget !== this.props.widgets[0] && <div className="col-1">
                                                <button
                                                    type="button"
                                                    onClick={() => this.props.positionUp(widget.id)}
                                                    className="btn btn-warning">
                                                    <i className="fa fa-arrow-circle-up"></i>
                                                </button>
                                            </div>}
                                            <label className="col-1"></label>
                                            {widget !== this.props.widgets[this.props.widgets.length - 1] &&
                                            <div className="col-1">
                                                <button
                                                    type="button"
                                                    onClick={() => this.props.positionDown(widget.id)}
                                                    className="btn btn-warning">
                                                    <i className="fa fa-arrow-circle-down"></i>
                                                </button>
                                            </div>}
                                            <label className="col-1"></label>
                                            <div className="col-6">
                                                <select
                                                    id={"selectWidgetToUpdate"}
                                                    onChange={(event) => this.props.selectWidget(widget, event.target.value)}
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
                                                    onClick={() => this.props.deleteWidget(widget.id)}
                                                    type="button" className="btn btn-danger">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {((widget.type === "HEADING" &&
                                        <HeadingWidget
                                            classNameForPreview={this.props.preview === "on" ? "" : "d-none"}
                                            widget={widget}
                                            textChanged={this.props.textChanged}
                                            sizeSelect={this.props.headingSizeChanged}
                                        />)

                                    || (widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget
                                            classNameForPreview={this.props.preview === "on" ? "" : "d-none"}
                                            widget={widget}
                                            textChanged={this.props.textChanged}
                                        />)

                                    || (widget.type === "LIST" &&
                                        <ListWidget
                                            classNameForPreview={this.props.preview === "on" ? "" : "d-none"}
                                            textChanged={this.props.textChanged}
                                            widget={widget}
                                            listTypeChanged={this.props.listTypeChanged}
                                        />)

                                    || (widget.type === "LINK" &&
                                        <LinkWidget
                                            classNameForPreview={this.props.preview === "on" ? "" : "d-none"}
                                            urlChanged={this.props.urlChanged}
                                            textChanged={this.props.textChanged}
                                            widget={widget}
                                        />)

                                    || (widget.type === "IMAGE" &&
                                        <ImageWidget
                                            classNameForPreview={this.props.preview === "on" ? "" : "d-none"}
                                            widget={widget}
                                            urlChanged={this.props.urlChanged}
                                        />)
                                )}
                            </div>
                        }</li>
                    ))}
                </ul>


                <div className={"row"}>
                    <label className={"col-11"}></label>
                    <div className="d-flex float-right my-auto col-1">
                        <button
                            onClick={this.props.createWidget}
                            className="btn btn-danger rounded-circle ">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <br/>
                <br/>
            </div>

        )
    }
}

// ({
//                         preview, widgets, createWidget, selectWidget, headingSizeChanged, previewSelect, deleteWidget, positionUp, positionDown,
//                         paragraphTextChanged, headingTextChanged, listTextChanged, listTypeChanged, imageTextChanged,
//                         linkURLChanged, linkTextChanged
//                     }) =>
//


export default WidgetList