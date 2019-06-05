import React from 'react'

const HeadingWidget = () =>
    <div>
        <br/>
        <div id="headingSection" className="p-4 border border-dark rounded">
            <div className="row">

                <div className="col-3 ">
                    <h5>Heading widget</h5>
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

            <p>
            </p>

            <div className="form-group row">
                <input type="text" className="form-control" placeholder="Heading Text"
                       id="heading2TextFld"/>
            </div>
            <div className="form-group row">
                <select className="custom-select">
                    <option value="Heading1">Heading 1</option>
                    <option value="Heading2">Heading 2</option>
                    <option value="Heading3">Heading 3</option>
                </select>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widget1NameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={"d-none"}>
                <h5 className="row">Preview</h5>
                <h1 className="row">Heading Text</h1>
            </div>
        </div>
    </div>

export default HeadingWidget