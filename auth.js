const SUPABASE_URL = "https://xbejkvepazscdtkziykr.supabase.co";
const SUPABASE_KEY = "TA_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

function usernameToEmail(username){
    return username.trim().toLowerCase() + "@0xff.local";
}

async function register(){

    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value;

    if(username.length<3){
        alert("Le nom d'utilisateur doit contenir au moins 3 caractères.");
        return;
    }

    if(password.length<6){
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
    }

    const email=usernameToEmail(username);

    const {error}=await supabase.auth.signUp({
        email,
        password
    });

    if(error){
        alert(error.message);
        return;
    }

    alert("Compte créé avec succès !");
}

async function login(){

    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value;

    const email=usernameToEmail(username);

    const {error}=await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error){
        alert("Nom d'utilisateur ou mot de passe incorrect.");
        return;
    }

    window.location.href="index.html";
}

async function logout(){

    await supabase.auth.signOut();

    window.location.href="login.html";
}
