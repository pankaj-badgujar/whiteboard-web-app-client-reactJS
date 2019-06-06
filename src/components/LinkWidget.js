import React from 'react'

const LinkWidget = ({classNameForPreview, linkURLChanged, linkTextChanged,widgetId,url,text}) =>
    <div>
        <br/>
        <div id="LinkSection" className="p-4 border">
            <br/>
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => linkURLChanged(widgetId,event.target.value)}
                    placeholder="Link URL"
                    id="linkURLFld"/>
            </div>
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => linkTextChanged(widgetId,event.target.value)}
                    placeholder="Link Text"
                    id="linkTextFld"/>
            </div>
            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <a href={url}>{text}</a>
            </div>
        </div>
    </div>

export default LinkWidget