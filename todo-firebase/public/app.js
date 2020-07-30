const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function alpineData() {
    return {
        auth: auth,
        provider: provider,
        signedIn: false,
        user: null,
        signIn() {
            this.auth.signInWithPopup(provider).then((user) => {
                this.user = user;
                this.userDetails = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
            });
        },
        signOut() {
            this.auth.signOut().then(() => {
                this.user = null;
                this.userDetails = '';
            });
        },
        userDetails: ''
    };
};