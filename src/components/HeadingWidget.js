import React from 'react'

const HeadingWidget = ({classNameForPreview}) =>
    <div>
        <br/>
        <div id="headingSection" className="p-4 border">
            <br />
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
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <h1 className="row">Heading Text</h1>
            </div>
        </div>
    </div>

export default HeadingWidget