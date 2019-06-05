import React from 'react'
const ListWidget = () =>
    <div>
        <br />

        <div id="ListSection" className="p-4 border border-dark rounded">
            <div className="row">

                <div className="col-3">
                    <h5>List widget</h5>
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
                                <option value="List" selected>List</option>
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
						<textarea rows="3" className="form-control">Put each
item in
a separate row</textarea>
            </div>
            <div className="form-group row">
                <select className="custom-select">
                    <option value="Heading1">Unordered List</option>
                    <option value="Heading2">Ordered List</option>
                </select>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widget2NameFld"
                       placeholder="Widget name"/>
            </div>

            <div className={"d-none"}>
            <h5 className="row">Preview</h5>
            <ul>
                <li>Put each</li>
                <li>item in</li>
                <li>a separate row</li>
            </ul>
            </div>
        </div>
    </div>

export default ListWidget