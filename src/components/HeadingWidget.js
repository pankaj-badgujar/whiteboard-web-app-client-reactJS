import React from 'react'

const HeadingWidget = ({classNameForPreview, headingTextChanged, widget, sizeSelect}) =>
    <div>
        <br/>
        <div id="headingSection" className="p-4 border">
            <br />
            <div className="form-group row">
                <input
                    type="text"
                    className="form-control"
                    placeholder={widget.text}
                    onChange={(event) => headingTextChanged(widget,event.target.value)}
                    id="heading2TextFld"/>
            </div>
            <div className="form-group row">
                <select
                    onChange={(event) => sizeSelect(widget,event.target.value)}
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
                {widget.size == "3" ? <h3 className="row">{widget.text}</h3>
                    :(widget.size == "2" ? <h2 className="row">{widget.text}</h2>
                        :<h1 className="row">{widget.text}</h1>)
                }

            </div>
        </div>
    </div>

export default HeadingWidget