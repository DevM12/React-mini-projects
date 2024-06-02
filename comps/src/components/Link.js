import UseNavigation from '../hooks/use-navigation'
import classNames from 'classnames'
export default function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = UseNavigation();

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath == to && activeClassName
    )
    const handleClick = (event) => {
        if (event.metsKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return <a href={to} className={classes} onClick={handleClick}>{children}</a>

}