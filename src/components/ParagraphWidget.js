import React from 'react'

const ParagraphWidget = () =>
    <div>
        <br/>
        <div id="ParagraphSection" className="p-4 border border-dark rounded">
            <div className="row">

                <div className="col-3">
                    <h5>Paragraph widget</h5>
                </div>
                <div className="col-3">
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
                                <option value="Heading">Heading</option>
                                <option value="Paragraph" selected>Paragraph</option>
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

            <br/>
            <div className="form-group row">
                <textarea rows="3" className="form-control">Lorem ipsum</textarea>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameParaFld"
                       placeholder="Widget name"/>
            </div>

            <div className={"d-none"}>
                <h5 className="row">Preview</h5>
                <p className="row">Lorem ipsum</p>

            </div>

        </div>
    </div>
export default ParagraphWidget