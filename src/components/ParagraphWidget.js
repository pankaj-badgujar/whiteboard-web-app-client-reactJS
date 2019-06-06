import React from 'react'

const ParagraphWidget = ({classNameForPreview,textEntered,paragraphTextChanged , widgetId}) =>
    <div>
        <br/>
        <div id="ParagraphSection" className="p-4 border">

            <br/>
            <div className="form-group row">
                <textarea
                    rows="3"
                    onChange={(event) => paragraphTextChanged(widgetId,event.target.value)}
                    className="form-control">{textEntered}</textarea>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameParaFld"
                       placeholder="Widget name"/>
            </div>

            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <p className="row">{textEntered}</p>

            </div>

        </div>
    </div>
export default ParagraphWidget