import React from 'react'

const ParagraphWidget = () =>
    <div>
        <br/>
        <div id="ParagraphSection" className="p-4 border">

            <br/>
            <div className="form-group row">
                <textarea rows="3" className="form-control">Lorem ipsum</textarea>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widgetNameParaFld"
                       placeholder="Widget name"/>
            </div>

            <div className={"d-none"}>
                <h5 className="row">Preview</h5>
                <p className="row">Lorem ipsum</p>

            </div>

        </div>
    </div>
export default ParagraphWidget