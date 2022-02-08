import React from "react";
import {Form} from "react-final-form";
import {UserLoginType} from "../../../redux/auth-redux/authReducer";
import {required} from "../../Commons/Validators/validators";
import {FieldForm} from "../../Commons/FieldForm/FieldForm";
import {Provider} from "react-redux";
import {store} from "../../../redux/redax-store";

type LoginType = {
   onSubmit(loginData: UserLoginType): void
}

export const Login: React.FC<LoginType> = (
   {
      onSubmit
   }
) => (
   <Provider store={store}>
      <Form
         onSubmit={onSubmit}
         render={
            ({handleSubmit, submitError}) => (
               <form onSubmit={handleSubmit}>
                  <h2>Log in</h2>
                  <div>
                     <FieldForm type={"text"} placeholder={"email"} name={"email"} validators={required}/>
                  </div>
                  <div>
                     <FieldForm type={"text"} placeholder={"Password"} name={"password"} validators={required}/>
                  </div>
                  <div>
                     <label>Remember Me</label>
                     <FieldForm type={"checkbox"} name={"rememberMe"}/>
                  </div>
                  <button type="submit">Submit</button>
                  {submitError && <span style={{color: "red"}}>{submitError}</span>}
               </form>
            )
         }
      />
   </Provider>
)