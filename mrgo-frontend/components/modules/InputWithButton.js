import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import palette from '../../styles/palette';

import { InputBlock, Label, StyledInput, MessageBlock } from './Input';

const InputWithButton = ({
  buttonColor,
  buttonText,
  error,
  inputRef,
  label,
  pattern,
  placeholder,
  style,
  type,
  isButtonActive,
  isShowClearButton,
  value,
  onChange,
  disabled,
  onBlur = () => {},
  onClickButton,
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
        <StyledInputWithButton
          tabIndex={0}
          ref={inputRef}
          isShowClearButton={isShowClearButton}
          isError={error}
          pattern={pattern}
          placeholder={placeholder}
          style={style}
          type={type}
          value={value}
          onFocus={() => setShowClear(true)}
          onBlur={() => {
            onBlur();
            setShowClear(false);
          }}
          onChange={onChange}
          disabled={disabled}
        />
        <InputAbsBlock>
          <InputAbsButton
            tabIndex={0}
            buttonColor={buttonColor}
            isActive={isButtonActive}
            onClick={onClickButton}
          >
            {buttonText}
          </InputAbsButton>
        </InputAbsBlock>
        {error && (
          <MessageBlock type="error">
            <span>{error}</span>
          </MessageBlock>
        )}
      </InputBlock>
    </>
  );
};

InputWithButton.propTypes = {
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  inputRef: PropTypes.shape({
    current: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  }),
  label: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['text', 'number', 'email']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isButtonActive: PropTypes.bool,
  isShowClearButton: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClickButton: PropTypes.func,
  disabled: PropTypes.bool,
};

InputWithButton.defaultProps = {
  buttonText: 'button',
  buttonColor: palette.primary.blue,
  error: false,
  inputRef: undefined,
  label: undefined,
  pattern: undefined,
  placeholder: 'placeholder',
  style: undefined,
  type: 'text',
  value: '',
  isButtonActive: false,
  isShowClearButton: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  onClickButton: () => {},
};

export const StyledInputWithButton = styled(StyledInput)`
  padding-right: 108.142px;
  &::placeholder {
    color: ${palette.base.gray400};
  }
`;

export const InputAbsBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  right: 6px;
`;

const flexAlignCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputAbsButton = styled(flexAlignCenterDiv)`
  width: 84px;
  height: 30px;
  margin-left: 6px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
  letter-spacing: -0.738px;

  background-color: ${({ isActive, buttonColor }) => {
    if (isActive) return buttonColor;
    return palette.base.gray400;
  }};
  border-radius: 4px;
`;

export default InputWithButton;
