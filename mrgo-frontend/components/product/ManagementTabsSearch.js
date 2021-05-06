import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import palette from '../../styles/palette';

import SearchImage from '../../static/assets/icon_search.svg';

const ManagementTabsSearch = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = e => setSearchText(e.target.value);

  return (
    <>
      <InputBlock>
        <InputAbsBlock>
          <SearchIcon onClick={() => alert('검색어 : ' + searchText)} />
        </InputAbsBlock>
        <SearchInput
          tabIndex={0}
          ref={inputRef}
          placeholder="제품을 검색해 주세요."
          type="text"
          value={searchText}
          onChange={onChangeSearchText}
        />
      </InputBlock>
    </>
  );
};

const InputBlock = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  border: solid 1.142px ${palette.base.gray400};
  padding: 10px 10px 10px 50px;
  caret-color: ${palette.primary.blue};

  &:focus {
    border: solid 1.142px ${palette.primary.blue};
  }

  &::placeholder {
    color: ${palette.base.gray400};
  }
`;

const InputAbsBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 15px;
  left: 20px;
`;

const SearchIcon = styled.img.attrs({ src: SearchImage, alt: 'search icon' })`
  width: 20px;
  height: 21px;
  cursor: pointer;
`;

export default ManagementTabsSearch;
