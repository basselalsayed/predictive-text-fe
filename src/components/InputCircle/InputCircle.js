import PropTypes from 'prop-types';

const InputCircle = ({
  className = '',
  children,
  size = '5em',
  style,
  ...rest
}) => (
  <button
    className={className}
    style={{
      backgroundColor: 'grey',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: typeof size === 'string' ? size : `${size}px`,
      width: typeof size === 'string' ? size : `${size}px`,
      cursor: 'pointer',
      ...style,
    }}
    {...rest}
  >
    {children}
  </button>
);

InputCircle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object, // use object for speed, although it is not best practise
};

export default InputCircle;
