import React from 'react'

const ListWidget = ({classNameForPreview, widget, textChanged, listTypeChanged}) =>
    <div>
        <br/>

        <div id="ListSection" className="p-4 border">

            <br/>
            <div className="form-group row">
						<textarea
                            rows="3"
                            onChange={(event) => textChanged(widget, event.target.value)}
                            className="form-control">{widget.text}</textarea>
            </div>
            <div className="form-group row">
                <select
                    onChange={(event) => listTypeChanged(widget,event.target.value)}
                    className="custom-select">
                    <option value="unordered">Unordered List</option>
                    <option value="ordered">Ordered List</option>
                </select>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widget2NameFld"
                       placeholder="Widget name"/>
            </div>

            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                {

                    widget.listType === "ordered"
                        ? <ol>{ widget.text !== null && (widget.text.split('\n')).map((item,key) => <li key={key}>{item}</li>)}</ol>
                        : <ul>{ widget.text !== null && (widget.text.split('\n')).map((item,key) => <li key={key}>{item}</li>)}</ul>
                }
            </div>
        </div>
    </div>;

export default ListWidget