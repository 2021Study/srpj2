import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import palette from '../../styles/palette';

const Input = ({
  isShowClearButton,
  error,
  inputRef,
  label,
  pattern,
  placeholder,
  style,
  type,
  value,
  onChange,
  disabled,
  onBlur = () => {},
  ...props
}) => {
  const clearBtnRef = useRef();
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    const handleClearButton = e => {
      if (e.target === clearBtnRef.current) onChange({ target: { value: '' } });
    };

    window.addEventListener('mousedown', handleClearButton);

    return () => window.removeEventListener('mousedown', handleClearButton);
  }, [onChange]);

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBlock>
        <StyledInput
          ref={inputRef}
          isShowClearButton={isShowClearButton}
          isError={error}
          pattern={pattern}
          placeholder={placeholder}
          style={style}
          type={type}
          value={value}
          autoComplete="on"
          onFocus={() => setShowClear(true)}
          onBlur={() => {
            onBlur();
            setShowClear(false);
          }}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {error && (
          <MessageBlock type="error">
            <span>{error}</span>
          </MessageBlock>
        )}
      </InputBlock>
    </>
  );
};

Input.propTypes = {
  isShowClearButton: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  inputRef: PropTypes.shape({
    current: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  }),
  label: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  isShowClearButton: false,
  error: false,

  inputRef: undefined,
  label: undefined,
  pattern: undefined,
  placeholder: 'placeholder',
  style: undefined,
  type: 'text',
  value: '',
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
};

export const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.38px;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  width: 114.285%;
  height: 48px;
  font-size: 16px;
  border-radius: 5.666666667px;
  border: solid 1.142px ${palette.base.gray400};
  padding: 11.428px 13.714px;
  caret-color: ${palette.primary.blue};
  transform: scale(0.875);
  transform-origin: left top;

  &:focus {
    border: solid 1.142px ${palette.primary.blue};
  }

  &::placeholder {
    color: ${palette.base.gray400};
  }
`;

export const InputBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({ type }) => {
    if (type === 'error') {
      return palette.primary.blue;
    }
  }};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.33px;
  & > span {
    margin-left: 4px;
  }
`;

export default Input;
