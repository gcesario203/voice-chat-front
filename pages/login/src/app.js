import { constants } from "../../_shared/constants.js";
import UserDb from "../../_shared/userDb.js";


function redirectToLobby()
{
    window.location = constants.pages.lobby
}

function onLogin({provider, firebase}) {
    console.log('provider', provider)
    console.log('firebase', firebase)
    return async () => {
        try {
            const result = await firebase.auth().signInWithPopup(provider)

            const { user } = result;

            const userData = {
                img: user.photoURL,
                username: user.displayName
            }

            UserDb.insert(userData)
            redirectToLobby()
        } catch (error) {

            alert(JSON.stringify(error))
            console.log('error auth',error)
        }
    }
}

const currentUser = UserDb.get()

if(Object.keys(currentUser).length)
{
    redirectToLobby()
}

const { firebaseConfig } = constants

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GithubAuthProvider();

provider.addScope('repo:user');
const btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', onLogin({provider, firebase}))