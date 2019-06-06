import React from 'react'
const ImageWidget = ({classNameForPreview}) =>
    <div>
        <br/>
        <div id="ImageSection" className="p-4 border">
         <br />
            <div className="form-group row">
                <input type="text" className="form-control"
                       value="http://lorempixel.com/300/150/" id="headingTextFld"/>
            </div>


            <div className="form-group row">
                <input type="text" className="form-control" id="widget3NameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={classNameForPreview}>
            <h5 className="row">Preview</h5>
            <img src="http://lorempixel.com/300/150/"/>
            </div>
        </div>
    </div>

export default ImageWidget