import React from 'react'

const ListWidget = ({classNameForPreview}) =>
    <div>
        <br/>

        <div id="ListSection" className="p-4 border">

            <br/>
            <div className="form-group row">
						<textarea rows="3" className="form-control">Put each
item in
a separate row</textarea>
            </div>
            <div className="form-group row">
                <select className="custom-select">
                    <option value="Heading1">Unordered List</option>
                    <option value="Heading2">Ordered List</option>
                </select>
            </div>

            <div className="form-group row">
                <input type="text" className="form-control" id="widget2NameFld"
                       placeholder="Widget name"/>
            </div>

            <div className={classNameForPreview}>
                <h5 className="row">Preview</h5>
                <ul>
                    <li>Put each</li>
                    <li>item in</li>
                    <li>a separate row</li>
                </ul>
            </div>
        </div>
    </div>

export default ListWidget