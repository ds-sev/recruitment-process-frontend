import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Button.scss';

import iconPlay from '../../../images/icons/icon-play.svg';
import iconPlus from '../../../images/icons/icon-plus.svg';

const Button = (props) => {
  const { text, disabled, size, uiType, type, pic, onClick, addBtnClass } =
    props;

  // Если передали play или plus, то отображаем эти иконки, иначе иконки не будет
  let buttonIcon = null;
  if (pic === 'play') {
    buttonIcon = iconPlay;
  } else if (pic === 'plus') {
    buttonIcon = iconPlus;
  }

  const icon = buttonIcon && (
    <img
      src={buttonIcon}
      className={clsx(
        'button__pic',
        size === 'small' && 'button__pic_size_small'
      )}
      alt="иконка рядом с текстом"
    />
  );

  return (
    <button
      disabled={disabled}
      className={clsx(
        'button',
        size === 'flexible' && 'button_size_flexible',
        size === 'small' && 'button_size_small',
        uiType === 'main' ? 'button_ui-type_main' : 'button_ui-type_secondary',
        { [addBtnClass]: addBtnClass }
      )}
      type={type}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'small', 'flexible']),
  uiType: PropTypes.oneOf(['main', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  pic: PropTypes.oneOf(['play', 'plus', 'none']),
  onClick: PropTypes.func,
  addBtnClass: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  disabled: false,
  size: 'normal',
  uiType: 'main',
  type: 'button',
  pic: 'plus',
  onClick: null,
  addBtnClass: '',
};

export default Button;
