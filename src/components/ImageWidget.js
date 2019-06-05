import React from 'react'
const ImageWidget = () =>
    <div>
        <br/>
        <div id="ImageSection" className="p-4 border border-dark rounded">
            <div className="row">

                <div className="col-3">
                    <h5>Image widget</h5>
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
                                <option value="Paragraph">Paragraph</option>
                                <option value="List">List</option>
                                <option value="Image" selected>Image</option>
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
                <input type="text" className="form-control"
                       value="http://lorempixel.com/300/150/" id="headingTextFld"/>
            </div>


            <div className="form-group row">
                <input type="text" className="form-control" id="widget3NameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={"d-none"}>
            <h5 className="row">Preview</h5>
            <img src="http://lorempixel.com/300/150/"/>
            </div>
        </div>
    </div>

export default ImageWidget