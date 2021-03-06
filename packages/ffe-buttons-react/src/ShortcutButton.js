import React from 'react';
import { bool, func, node, string, oneOfType } from 'prop-types';
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';
import Button from './BaseButton';

const ShortcutButton = props => (
    <Button
        buttonType="shortcut"
        rightIcon={<ChevronIkon />}
        {...props}
    />
);

ShortcutButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
    /** Icon shown to the left of the label */
    leftIcon: node,
};

export default ShortcutButton;
