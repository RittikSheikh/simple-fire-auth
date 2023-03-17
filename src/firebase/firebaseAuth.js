import getAuth from 'firebase/auth';
import { useContext } from 'react';
import { NewUserInfoContext } from '../layouts/Main';
import app from './firebase.init';

const auth = getAuth(app)
const [newUserInfo,setNewUserInfo] = useContext(NewUserInfoContext)

const createEmailPassUser = () => {

}
