'use client';

import Form from 'next/form';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/store/hooks';

import styles from './form.module.scss';

export const FormElement = ({ formProps, display, setDisplay }) => {
   const { chatId, firstname = '', lastname = '', actionHandler, createNew } = formProps;

   const [valueOne, setValueOne] = useState(firstname);
   const [valueTwo, setValueTwo] = useState(lastname);

   const formHeading = createNew ? 'Create new Chat' : 'Update a Chat';

   const dispatch = useAppDispatch();

   const hiddenClass = !display ? styles.hidden : '';

   useEffect(() => {
      setValueOne(firstname);
      setValueTwo(lastname);
   }, [firstname, lastname, display]);

   return (
      <Form
         action={() => {
            const payload = { firstname: valueOne, lastname: valueTwo, chatId: chatId };
            dispatch(actionHandler(payload));
            setValueOne('');
            setValueTwo('');
            setDisplay(false);
         }}
         disabled={!display}
         className={`${styles.formElement} ${hiddenClass}`}
      >
         <p>{formHeading}</p>
         <div>
            <section>
               <label htmlFor='firstname'>set chat first name</label>
               <input name='firstname' value={valueOne} onChange={(e) => setValueOne(e.target.value)} />
            </section>
            <section>
               <label htmlFor='lastname'>set chat last name</label>
               <input name='lastname' value={valueTwo} onChange={(e) => setValueTwo(e.target.value)} />
            </section>
         </div>
         <button type='submit'>Submit</button>
         <button
            type='reset'
            onClick={(e) => {
               e.preventDefault();
               setValueOne('');
               setValueTwo('');
               setDisplay(false);
               e.stopPropagation();
            }}
            className={styles.close_btn}
         >
            X
         </button>
      </Form>
   );
};
