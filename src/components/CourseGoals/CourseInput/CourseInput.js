import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import styles from './CourseInput.module.css';


const FormComponent = styled.div`
  & {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color:${(props)=>props.invalid ?'red':'black'};
  }

  & input {
    display: block;
    width: 100%;
    border:1px solid ${(props)=>props.invalid ?'red':'#ccc'};
    background:${(props)=>props.invalid ?'fad0ec':'#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length!=0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // <form onSubmit={formSubmitHandler}>
    //   <div className={`form-control ${!isValid ? 'invalid':''}`}>
    //     {/* <label style={{color: !isValid ?'red':'black'}}>Course Goal</label> */}
    //     {/* <input style={{borderColor: !isValid ?'red':'black' , background: !isValid ? 'salmon':'transparent'}} type="text" onChange={goalInputChangeHandler} /> */}
    //     <label >Course Goal</label> 
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    //below code is used for implementing styled components concept
      // <form onSubmit={formSubmitHandler}>
      // <FormComponent className={`form-control ${!isValid ? 'invalid':''}`}>
      //   <label >Course Goal</label> 
      //   <input type="text" onChange={goalInputChangeHandler} />
      // </FormComponent>
      // <Button type="submit">Add Goal</Button>
      // </form>

    // another alternative , we can pass props in this component too

      // <form onSubmit={formSubmitHandler}>
      // <FormComponent invalid={!isValid}>
      //   <label >Course Goal</label> 
      //   <input type="text" onChange={goalInputChangeHandler} />
      // </FormComponent>
      // <Button type="submit">Add Goal</Button>
      // </form>

      //code css module is below

      <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid }`}>
        <label >Course Goal</label> 
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
