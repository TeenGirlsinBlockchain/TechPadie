import { useState } from 'react';
import Form from '../components/form/Form';
import FormGroup from '../components/form/FormGroup';
import FormInput from '../components/form/FormInput';
import FormFooter from '../components/form/FormFooter';

function Login() {
  const [email, setEmail] = useState();

  return (
      <div className=" bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
        <h1 className="mb-4 text-4xl font-semibold text-black">
          Welcome Back
        </h1>
        <h4 className="mb-4 text-4sm text-gray-500">
        We’ve sent you a code to confirm your registration
        </h4>
        <Form formName="Sign In">
          <FormGroup util="email">
            <FormInput
              util="email"
              type="email"
              name="email"
              title="email"
              placeholder="Enter email address"
              inputStyles="w-full placeholder:text-gray-500 bg-gray-100 rounded-lg"
              labelStyles="p-8 rounded-lg"
              value={email}
              handleChange={setEmail}
            />
          </FormGroup>
        </Form>
        <FormFooter
          link="/signup"
          question="Don't have an account?"
          action="Sign Up"
        />
      </div>
  );
}

export default Login;
