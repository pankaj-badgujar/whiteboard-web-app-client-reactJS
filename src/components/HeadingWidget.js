import React from 'react'

const HeadingWidget = ({classNameForPreview, headingTextChanged, sizeSelect, textSize, widgetId, textEntered}) =>
    <div>
        <br/>
        <div id="headingSection" className="p-4 border">
            <br />
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Heading Text"
                    onChange={(event) => headingTextChanged(widgetId,event.target.value)}
                    id="heading2TextFld"/>
            </div>
            <div className="form-group row">
                <select
                    onChange={(event) => sizeSelect(widgetId,event.target.value)}
                    className="custom-select">
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widget1NameFld"
                       placeholder="Widget name"/>
            </div>
            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                {textSize == "1" ? <h1 className="row">{textEntered}</h1>
                    :(textSize == "2" ? <h2 className="row">{textEntered}</h2>
                        :<h3 className="row">{textEntered}</h3>)
                }

            </div>
        </div>
    </div>

export default HeadingWidget