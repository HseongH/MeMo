// LIBRARY
import React from 'react';
import { useLocation } from 'react-router-dom';

// REDUX
import { useSelector } from 'react-redux';

// PAGE
import AddWord from './Add';

const ModifyWord = (props) => {
  const query = useLocation().search;
  const index = parseInt(query.slice(1).split('=')[1]);
  const modify = useSelector((state) => state.voca.list[index]);

  return <AddWord vocaObj={modify} index={index} />;
};

export default ModifyWord;
