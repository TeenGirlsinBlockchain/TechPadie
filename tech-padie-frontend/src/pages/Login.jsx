import { useState } from 'react';
import Form from '../components/form/Form';
import FormGroup from '../components/form/FormGroup';
import FormInput from '../components/form/FormInput';
import FormFooter from '../components/form/FormFooter';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
      <div className=" bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
        <h1 className="mb-4 text-center text-4xl font-semibold text-black">
          Sign In
        </h1>
        <Form formName="Sign In">
          <FormGroup label="Email" util="email">
            <FormInput
              util="email"
              type="email"
              name="email"
              title="email"
              placeholder="Please fill in your email"
              inputStyles="w-full"
              value={email}
              handleChange={setEmail}
            />
          </FormGroup>
          <FormGroup label="Password" util="password">
            <FormInput
              util="password"
              type="password"
              name="password"
              title="password"
              placeholder="Please fill in your password"
              inputStyles="w-full"
              value={password}
              handleChange={setPassword}
            />
            <a
              href="#"
              className="mt-1 flex justify-end  text-lg  text-secondary_normal hover:underline"
            >
              Forgot Password?
            </a>
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
