import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';



export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
}) {
    const classes = twMerge(
        classNames('px-3 py-1.5 mt-0.5', {
            'bg-blue-500 border border-blue-600 text-white': primary,
            'bg-gray-900 border border-gray-900 text-white': secondary,
            'bg-green-500 border border-green-500 text-white': success,
            'bg-yellow-400 border border-yellow-400 text-white': warning,
            'bg-red-500 border border-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger
        })
    );

    return <div>
        <button {...rest} className={classes}>
            {children}
        </button>
        <br />
    </div>
}

Button.propTypes = {
    checkValidationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (count > 1) {
            return new Error('Only one of the primary, secondary, success, warning, danger can be true at a time ')
        }
    }
}