import React from 'react'

const LinkWidget = ({classNameForPreview}) =>
    <div>
        <br/>
        <div id="LinkSection" className="p-4 border">
            <br/>
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
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <a href="#">Link text</a>
            </div>
        </div>

    </div>

export default LinkWidget