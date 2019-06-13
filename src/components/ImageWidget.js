import React from 'react'

const ImageWidget = ({classNameForPreview, urlChanged, widget}) =>
    <div>
        <br/>
        <div id="ImageSection" className="p-4 border">
            <br/>
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    onChange={(event) => urlChanged(widget, event.target.value)}
                    id="headingTextFld"/>
            </div>


            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    id="widget3NameFld"
                    placeholder="Widget name"/>
            </div>
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <img src={widget.url} class="img-fluid" alt="Responsive image"/>
            </div>
        </div>
    </div>

export default ImageWidget