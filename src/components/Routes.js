import React from "react"

import { BrowserRouter as Router,Route } from "react-router-dom";
import SignIn from "./styles/SignIn";
import SignUp from "./SignUp";
import Home from "./StartingPage"
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./Unauthenticatedroute";
import StartingPage from "./StartingPage";
import CommunityFile from "./CommunityFile";
import File from "./addfile";

import Answer from "./answer";

import CodeM from "./cm" 
import Searching from "./searching"
import MyQuestions from "./myquestions"
import Qcode from "./qcode"
import Profile from "./Profile"

import Editor from "./codeeditor"
// import CKEditor from "./quillanswer";
import FAQ from "./faq"
function Routes(){

return(
  
  <Router>



<UnauthenticatedRoute exact path="/signin">
  <SignIn />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/signup">
  <SignUp />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/">
  <StartingPage/>
</UnauthenticatedRoute>

<Route exact path="/community">
  <CommunityFile />
</Route>
<AuthenticatedRoute exact path="/file">
  <File />
  </AuthenticatedRoute>
  {/* <AuthenticatedRoute exact path="/quill">
  <CKEditor />
  </AuthenticatedRoute> */}
<AuthenticatedRoute exact path="/editor">
<Editor />
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/faq">
<FAQ />
</AuthenticatedRoute>
<AuthenticatedRoute exact path="/answer/:des/:ans/:state">
  <Answer />
  </AuthenticatedRoute>
 
  <AuthenticatedRoute exact path="/codemirror">
  <CodeM />
  </AuthenticatedRoute>
 <AuthenticatedRoute exact path="/search/:languages/:fields/:frameworks/:string">
   <Searching />
 </AuthenticatedRoute>
 <AuthenticatedRoute exact path="/myq">
   <MyQuestions/>
 </AuthenticatedRoute>


<AuthenticatedRoute exact path="/pro_file/:username">
   <Profile />
 </AuthenticatedRoute>
<Route exact path="/ques/:index/:document/:username">
<Qcode />
</Route>

<Route exact path="/home">
<Home/>
</Route>



</Router>
)



}

export default Routes