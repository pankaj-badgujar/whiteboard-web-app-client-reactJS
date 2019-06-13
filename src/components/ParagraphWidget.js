import React from 'react'

const ParagraphWidget = ({classNameForPreview,paragraphTextChanged , widget}) =>
    <div>
        <br/>
        <div id="ParagraphSection" className="p-4 border">

            <br/>
            <div className="form-group row">
                <textarea
                    rows="3"
                    onChange={(event) => paragraphTextChanged(widget,event.target.value)}
                    className="form-control">{widget.text}</textarea>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameParaFld"
                       placeholder="Widget name"/>
            </div>

            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <p className="row">{widget.text}</p>

            </div>

        </div>
    </div>
export default ParagraphWidget