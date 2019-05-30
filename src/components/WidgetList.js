import React from 'react'

class WidgetList extends React.Component{

    render() {
        return(
            <div>
                <div id="headingSection" className="p-4 border border-dark">
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
                                        <i className="fas fa-arrow-circle-up"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-down"></i>
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
                                        <i className="fas fa-times"></i>
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

                    <h5 className="row">Preview</h5>
                    <h1 className="row">Heading Text</h1>
                </div>

                <p>
                </p>
                <div id="ParagraphSection" className="p-4 border border-dark">
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
                                        <i className="fas fa-arrow-circle-up"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-down"></i>
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
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                    </p>
                    <div className="form-group row">
                        <textarea rows="3" className="form-control">Lorem ipsum</textarea>
                    </div>

                    <div className="form-group row">
                        <input type="text" className="form-control" id="widgetNameParaFld"
                               placeholder="Widget name"/>
                    </div>

                    <h5 className="row">Preview</h5>
                    <p className="row">Lorem ipsum</p>
                </div>
                <p>
                </p>
                <div id="ListSection" className="p-4 border border-dark">
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
                                        <i className="fas fa-arrow-circle-up"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-down"></i>
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
                                        <i className="fas fa-times"></i>
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

                    <h5 className="row">Preview</h5>
                    <ul>
                        <li>Put each</li>
                        <li>item in</li>
                        <li>a separate row</li>
                    </ul>
                </div>
                <p>
                </p>
                <div id="ImageSection" className="p-4 border border-dark">
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
                                        <i className="fas fa-arrow-circle-up"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-down"></i>
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
                                        <i className="fas fa-times"></i>
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

                    <h5 className="row">Preview</h5>
                    <img src="http://lorempixel.com/300/150/"/>
                </div>
                <p>
                </p>
                <div id="LinkSection" className="p-4 border border-dark">
                    <div className="row">

                        <div className="col-3">
                            <h5>Link widget</h5>
                        </div>
                        <div className="col-3">
                            <label></label>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-up"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-1">
                                    <button type="button" className="btn btn-warning">
                                        <i className="fas fa-arrow-circle-down"></i>
                                    </button>
                                </div>
                                <label className="col-1"></label>
                                <div className="col-6">
                                    <select className="custom-select" role="widgetType">
                                        <option value="Heading">Heading</option>
                                        <option value="Paragraph">Paragraph</option>
                                        <option value="List">List</option>
                                        <option value="Image">Image</option>
                                        <option value="Link" selected>Link</option>
                                    </select>
                                </div>

                                <div className="col-1">
                                    <button type="button" className="btn btn-danger">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                    </p>
                    <div className="form-group row">
                        <input type="text" className="form-control" placeholder="Link URL"
                               id="linkURLFld"/>
                    </div>
                    <div className="form-group row">
                        <input type="text" className="form-control" placeholder="Link Text"
                               id="linkTextFld"/>
                    </div>
                    <div className="form-group row">
                        <input type="text" className="form-control" id="widgetNameFld"
                               placeholder="Widget name"/>
                    </div>

                    <h5 className="row">Preview</h5>
                    <a href="#">Link text</a>
                </div>
                <ul className="nav flex-column nav-pills">
                    <li className="nav-item text-right">
                        <button type="button" className="btn btn-danger rounded-circle ">
                            <i className="fas fa-plus"></i>
                        </button>
                    </li>
                </ul>
            </div>

        );

    }
}

export default WidgetList