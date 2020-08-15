import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = ({
     label,
     type,
     name,
     value,
     placeholder,
     onChange,
     error
}) => {

     return (
          <div className="form-group">
               <label forhtml={name}>{label}</label>
               <input type={type}
                    className={classnames('form-control', {
                         'is-invalid': error
                    })}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
               {error && <span style={{ color: 'red' }}>{error}</span>}
          </div>
     );
}

InputGroup.propsTypes = {
     label: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
     placeholder: PropTypes.string.isRequired,
     onChange: PropTypes.func.isRequired,
     type: PropTypes.string.isRequired
}
InputGroup.defaultProps = {
     type: 'text'
}


export default InputGroup;