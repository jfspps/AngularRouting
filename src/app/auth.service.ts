// fake authentication service (authentication is covered later)

export class AuthService {
    loggedIn = false;

    // checks the state of the user loggedIn
    isAuthenticated(){
        // A Promise is a class, which when instantiated, runs some code through an executor
        const promise = new Promise(
            // this is where the executor would run code to yield a result and then determine which
            // callback, resolve() or reject(), is then called

            // ..after the code is run with the result, run the call-back resolve() or reject() based on the result
            // (at the moment this always returns false)
            (resolve, reject) => {

                // after 800 ms, return the boolean loggedIn
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}