import React from 'react';
import { bool, node, string, func, oneOfType } from 'prop-types';
import { v4 as hash } from 'uuid';
import classNames from 'classnames';

export default function CheckBox(props) {
    const { children, inline, invalid, label, noMargins, ...rest } = props;

    const id = props.id || `checkbox-${hash()}`;
    const labelProps = {
        className: classNames({
            'ffe-checkbox': true,
            'ffe-checkbox--inline': inline,
            'ffe-checkbox--no-margin': noMargins,
        }),
        htmlFor: id,
    };

    return (
        <span>
            <input
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                aria-invalid={String(invalid)}
                {...rest}
            />
            {
                typeof children === 'function'
                    ? children(labelProps)
                    : (
// eslint-disable-next-line jsx-a11y/label-has-for
                        <label {...labelProps}>
                            {label || children}
                        </label>
                    )
            }
        </span>
    );
}

CheckBox.propTypes = {
    /**
     * @deprecated
     * Use `children` instead
     */
    label: string,
    /** Removes vertical margins from the checkbox */
    noMargins: bool,
    /** Override the automatically generated ID */
    id: string,
    inline: bool,
    /**
     * @deprecated
     * Use `aria-invalid` directly instead
     */
    invalid: bool,
    /** The label for the checkbox */
    children: oneOfType([node, func]),
};

CheckBox.defaultProps = {
    inline: true,
    invalid: false,
};
