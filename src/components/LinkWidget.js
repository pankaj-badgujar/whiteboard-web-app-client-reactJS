import React from 'react'

const LinkWidget = ({classNameForPreview, urlChanged, textChanged,widget}) =>
    <div>
        <br/>
        <div id="LinkSection" className="p-4 border">
            <br/>
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => urlChanged(widget,event.target.value)}
                    placeholder="Link URL"
                    id="linkURLFld"/>
            </div>
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => textChanged(widget,event.target.value)}
                    placeholder={widget.text}
                    id="linkTextFld"/>
            </div>
            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <a href={widget.url}>{widget.text}</a>
            </div>
        </div>
    </div>

export default LinkWidget