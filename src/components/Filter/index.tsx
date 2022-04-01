import React from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import filters from '../../json/list.filter.json';
import { Container, Option } from './style';

function Filter() {
  const { filterIsActive } = React.useContext(FilterContext);
  return (
    <Container isActive={filterIsActive}>
      {filters.map((item: { label: string; id: number }, index: number) => (
        <Option key={index.toString()}>{item.label}</Option>
      ))}
    </Container>
  );
}

export default Filter;
