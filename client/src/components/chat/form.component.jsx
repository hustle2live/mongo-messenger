import Form from 'next/form';

const FormElement = () => {
   return (
      <Form action='/search'>
         {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
         <input name='query' />
         <button type='submit'>Submit</button>
      </Form>
   );
};

const Messenger = () => {
   return <></>;
};

export default Messenger;
